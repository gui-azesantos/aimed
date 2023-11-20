import OpenAI from "openai";

export const useOpenAPI = () => {
  const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function getResponse(data: any) {
    return await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Irei passar uma lista de informações e gostaria que você retornasse um possível diagnóstico e tratamento
            Sintomas: ${data.symptoms}.
            Idade: ${data.age}
            Sexo biológico: ${data.biologicSex}
            Outras observações: ${data.additionalObservations}
  
            Devolva no seguinte formato
  
            Possíveis Diagnósticos:
  
            -- insira sua resposta aqui --
  
            Recomendações para Tratamento:
  
            -- insira sua resposta aqui --.`,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    });
  }

  return { getResponse };
};
