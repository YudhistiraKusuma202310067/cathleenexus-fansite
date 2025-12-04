import { Route, Routes } from "react-router-dom";
import MainPage from "./application/pages/MainPage/MainPage";
import BioData from "./application/pages/BioData/BioData";
import TheaterDetail from "./application/pages/TheaterDetail/TheaterDetail";
import TeaterActivity from "./application/pages/teaterActivity/TeaterActivity";
import RecapOffAir from "./application/pages/teaterActivity/RecapShow/RecapOffAir";
import RecapVC from "./application/pages/teaterActivity/RecapVC/RecapVC";
import AdminPage from "./application/pages/AdminPage/AdminPage";
import RecapMNG from "./application/pages/teaterActivity/RecapMNG/RecapMNG";
import Recap2s from "./application/pages/teaterActivity/Recap2s/Recap2s";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/biodata" element={<BioData />} /> 
      <Route path="/teaterActivity" element={<TeaterActivity />} /> 
      <Route path="/recap-offair" element={<RecapOffAir />} />
      <Route path="/theaterDetail" element={<TheaterDetail />} />
      <Route path="/recap-VC" element={<RecapVC />} />
      <Route path="/adminPage" element={<AdminPage />} />
      <Route path="/RecapMNG" element={<RecapMNG/>} />
      <Route path="/Recap2s" element={<Recap2s/>} />


    </Routes>
  );
}

export default AppRoutes;
