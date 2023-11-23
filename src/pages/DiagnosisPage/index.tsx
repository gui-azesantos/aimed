import { useState } from "react";

import {
  Button,
  Flex,
  Input,
  Select,
  Skeleton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { LandingLayout, ReportCard } from "../../components";
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

    const formattedText = sections?.map((item) => {
      const text = item.split(/-\s/gi);

      // Remover o texto do título da seção
      const sectionText = text
        .filter((_item, index) => index > 0)
        .map((item) => item.trim())
        .join("\n- ");

      return `- ${sectionText}`;
    });

    return formattedText || [];
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
      <Flex pt="48px" direction={"column"} gap="40px" max-width={700} w="full">
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
          <Skeleton endColor="#00C957">
            <div>loading</div>
            <div>loading</div>
            <div>loading</div>
            <div>loading</div>
          </Skeleton>
        ) : (
          response !== undefined && (
            <ReportCard
              diagnosis={formatResponse(response)[1]}
              treatment={formatResponse(response)[2]}
            />
          )
        )}
      </Flex>
    </LandingLayout>
  );
};
