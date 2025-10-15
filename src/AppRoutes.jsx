import { Route, Routes } from "react-router-dom";
import MainPage from "./application/pages/MainPage/MainPage";
import BioData from "./application/pages/BioData/BioData";
import TheaterDetail from "./application/pages/TheaterDetail/TheaterDetail";
import TeaterActivity from "./application/pages/teaterActivity/TeaterActivity";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/biodata" element={<BioData />} /> 
      <Route path="/teaterActivity" element={<TeaterActivity />} /> 
      <Route path="/theaterDetail" element={<TheaterDetail />} />

    </Routes>
  );
}

export default AppRoutes;
