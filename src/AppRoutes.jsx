import { Route, Routes } from "react-router-dom";
import MainPage from "./application/pages/MainPage/MainPage";
import BioData from "./application/pages/BioData/BioData";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/biodata" element={<BioData />} /> {/* ✅ new route */}
    </Routes>
  );
}

export default AppRoutes;
