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
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useOpenAPI } from "../../hooks/useOpenAPI/useOpenAPI";
import { CustomForm, FormContainer } from "./styles";

export const DiagnosisForm = () => {
  const [response, setResponse] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const { getResponse } = useOpenAPI();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      symptoms: "",
      age: "",
      biologicalSex: "masculino",
      additionalDescription: "",
    },
  });

  console.log(response);

  const formatResponse = (response?: string | null) => {
    if (response) {
      const secoesSeparadas = response.match(
        /(Possíveis Diagnósticos:[\s\S]*?)(Recomendações para Tratamento:[\s\S]*)/
      );

      if (secoesSeparadas) {
        const secaoDiagnostico: string = secoesSeparadas[1]
          .trim()
          .replace("Possíveis Diagnósticos: - ", "");
        const secaoTratamento: string = secoesSeparadas[2]
          .trim()
          .replace("Recomendações para Tratamento: - ", "");

        return [secaoDiagnostico, secaoTratamento];
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await getResponse(data);
      formatResponse(response.choices[0].message.content);
      setResponse(response.choices[0].message.content);
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex direction={"column"} gap="40px">
      <FormContainer>
        <Text as={"h1"} fontSize="32" fontWeight={600}>
          Gerador de diagnóstico
        </Text>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              placeholder="Sintomas"
              type="text"
              {...register("symptoms")}
            />
            {/* {errors.symptoms && <span>Este campo é obrigatório.</span>} */}
          </div>

          <div>
            <Input placeholder="Idade" type="number" {...register("age")} />
            {/* {errors.age && <span>Por favor, insira uma idade válida.</span>} */}
          </div>

          <div>
            <Select placeholder="Sexo Biológico" {...register("biologicalSex")}>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </Select>
            {/* {errors.gender && <span>Por favor, selecione o sexo.</span>} */}
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
        response && (
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
                <Text color={"white"}>{formatResponse(response)?.[0]}</Text>
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
                  {formatResponse(response)?.[1]}
                </Text>
              </Box>
            </Container>
          </>
        )
      )}
    </Flex>
  );
};
