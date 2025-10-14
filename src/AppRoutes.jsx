import { Route, Routes } from "react-router-dom";
import LandingPage from "./application/pages/LandingPage";
import BioData from "./application/pages/BioData"; // ✅ import BioData page

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/biodata" element={<BioData />} /> {/* ✅ new route */}
    </Routes>
  );
}

export default AppRoutes;
