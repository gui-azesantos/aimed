import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "dark");
  }, []);

  return (
    <>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </>
  );
}

export default App;
