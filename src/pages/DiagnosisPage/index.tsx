import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import LandingLayout from "../../components/LandingLayout";
import { useOpenAPI } from "../../hooks/useOpenAPI/useOpenAPI";
import { CustomForm, FormContainer } from "./styles";

export const DiagnosisPage: React.FC = () => {
  const [response, setResponse] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { getResponse } = useOpenAPI();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      symptoms: "",
      age: "",
      biologicalSex: "masculino",
      additionalDescription: "",
    },
  });

  console.log(response);

  const formatResponse = (response: string | undefined) => {
    const sections = response?.match(
      /(Possíveis Diagnósticos:[\s\S]*?)(Recomendações para Tratamento:[\s\S]*)/
    );
    const formattedText: string[] | undefined = sections?.map((item) => {
      const text = item.split("-");

      return `
          ${text[0]}
          \n
          ${text
            ?.map((item: string, index: number) => {
              if (index > 0) {
                return `- ${item}`;
              }
            })
            .join("")}
    `;
    });
    console.log(formattedText);

    return formattedText;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await getResponse(data);
      formatResponse(response.choices[0].message.content || undefined);
      setResponse(response.choices[0].message.content || undefined);

      console.log(response.choices[0].message.content);
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LandingLayout h="full">
      <Flex pt="48px" direction={"column"} gap="40px">
        <FormContainer>
          <Text as={"h1"} fontSize="32" fontWeight={600}>
            Gerador de diagnóstico
          </Text>
          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                placeholder="Sintomas"
                type="text"
                {...register("symptoms", { required: true })}
              />
              {errors.symptoms && <span>Este campo é obrigatório.</span>}
            </div>

            <div>
              <Input
                placeholder="Idade"
                type="number"
                {...register("age", { required: true })}
              />
              {errors.age && <span>Por favor, insira uma idade válida.</span>}
            </div>

            <div>
              <Select
                placeholder="Sexo Biológico"
                {...register("biologicalSex", { required: true })}
              >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </Select>
              {errors.biologicalSex && (
                <span>Por favor, selecione o sexo.</span>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Descrição adicional (opcional)"
                {...register("additionalDescription")}
              />
            </div>

            <Button type="submit">Obter Diagnóstico</Button>
          </CustomForm>
        </FormContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          response !== undefined && (
            <>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Resposta
              </Text>
              <Container maxW="2xl" bg="blue.600" centerContent>
                <Box
                  padding="4"
                  bg="blue.400"
                  color="black"
                  maxW="md"
                  id="response"
                >
                  {formatResponse(response)}
                  <Text color={"white"}></Text>
                </Box>
              </Container>
              <Container maxW="2xl" bg="red.600" centerContent>
                <Box
                  padding="4"
                  bg="red.500"
                  color="black"
                  maxW="md"
                  id="response"
                >
                  <Text color={"white"} mt={24} margin={0}>
                    {formatResponse(response)}
                  </Text>
                </Box>
              </Container>
            </>
          )
        )}
      </Flex>
    </LandingLayout>
  );
};
