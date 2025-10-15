import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppRoutes from "./AppRoutes";
import Preloader from "./application/pages/Preloader/Preloader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3300);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : <AppRoutes />;
}


export default App;
