import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Estimate from "../pages/Estimate";
import NavBar from "../components/NavBar";

const Router = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Estimate/" element={<Estimate />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
