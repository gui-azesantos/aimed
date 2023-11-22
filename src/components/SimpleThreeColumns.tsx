"use client";

import { Box, Flex, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaBrain } from "react-icons/fa";
import { FcAssistant, FcMindMap } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export const SimpleThreeColumns = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Suporte Vitalício"}
          text={
            "Estamos aqui para acompanhar cada passo da sua jornada de cuidados de saúde"
          }
        />
        <Feature
          icon={<Icon as={FcMindMap} w={10} h={10} />}
          title={"Interface Amigável e Acessível em Dispositivos Móveis"}
          text={
            "Estamos aqui para acompanhar cada passo da sua jornada de cuidados de saúde"
          }
        />
        <Feature
          icon={<Icon as={FaBrain} w={10} h={10} color={"black"} />}
          title={"Diagnóstico Avançado com IA"}
          text={
            "Receba diagnósticos de saúde avançados e precisos, alimentados pela inteligência artificial."
          }
        />
      </SimpleGrid>
    </Box>
  );
};
