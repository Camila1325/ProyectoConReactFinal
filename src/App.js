import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import CheckoutPage from "./components/payment-page/checkoutPage";
import Inicio from "./pages/Inicio";
import LibrosAcademicos from "./pages/LibrosAcademicos";
import MundoInfantil from "./pages/MundoInfantil";
import LibrosJuveniles from "./pages/LibrosJuveniles";
import Annoucement from "./components/Annoucement/annoucement";
import Login from "./pages/login/login";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Annoucement />
        <Navbar />
        <Routes>
          <Route path="/CheckoutPage" element={<CheckoutPage />}></Route>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/MundoInfantil" element={<MundoInfantil />}></Route>
          <Route
            path="/LibrosAcademicos"
            element={<LibrosAcademicos />}
          ></Route>
          <Route path="/LibrosJuveniles" element={<LibrosJuveniles />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
