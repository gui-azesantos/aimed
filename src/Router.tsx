import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DiagnosisPage, FeaturesPage, Home } from "./pages/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/diagnostico" Component={DiagnosisPage} />
        <Route path="/features" Component={FeaturesPage} />
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
