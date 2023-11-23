import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LandingLayout = (props: any) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
      // h={"full"}
    >
      <Header />
      {props.children}
    </Flex>
  );
};
