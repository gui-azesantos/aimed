import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Router from "./Router";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </>
  );
}

export default App;
