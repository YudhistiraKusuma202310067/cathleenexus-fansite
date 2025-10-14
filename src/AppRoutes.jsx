import { Route, Routes } from "react-router-dom";
import MainPage from "./application/pages/MainPage/MainPage";
import BioData from "./application/pages/BioData/BioData";
import TeaterActivity from "./application/pages/teaterActivity/teaterActivity";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/biodata" element={<BioData />} /> 
      <Route path="/teaterActivity" element={<TeaterActivity/>} /> 

    </Routes>
  );
}

export default AppRoutes;
