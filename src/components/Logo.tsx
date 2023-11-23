import { Flex, Image, Text } from "@chakra-ui/react";
import AImedLogo from "../assets/AImedLogo.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Logo(props: any) {
  return (
    <Flex
      {...props}
      display="flex"
      justify-content="space-between"
      gap="12px"
      align-items="center !importante"
      w={"100%"}
    >
      <Image alt="logo" width="32px" height="32px" src={AImedLogo} />
      <Text fontWeight={700} margin={0} display="block">
        <span
          style={{
            color: "#00C957",
            fontSize: "18px",
            fontWeight: 900,
            paddingRight: "1px",
          }}
        >
          AI
        </span>
        med - Saúde Inteligente
      </Text>
    </Flex>
  );
}
