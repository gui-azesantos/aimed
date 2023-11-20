import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DiagnosisForm } from "./pages/DiagnosisPage"; // Importe o componente DiagnosisForm aqui
import Test from "./pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para o DiagnosisForm */}
        <Route path="/diagnostico" Component={DiagnosisForm} />

        {/* Rota padrão */}
        <Route path="/" Component={Test} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
