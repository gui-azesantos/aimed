import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LandingLayout(props: any) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
    </Flex>
  );
}
