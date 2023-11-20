import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </>
  );
}

export default App;
