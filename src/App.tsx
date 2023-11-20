import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Router from "./Router";
import { useEffect } from "react";

function App() {
useEffect(() => { 
  localStorage.setItem("chakra-ui-color-mode", 'dark')
}, [])

  return (
    <>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </>
  );
}

export default App;
