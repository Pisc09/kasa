import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import Header from "./components/Header.jsx";
import Apropos from "./pages/Apropos.jsx";
import AnnoncesDetails from "./pages/AnnoncesDetails.jsx";
import Error from "./pages/Error.jsx";
import "./scss/index.scss";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/logement/:id" element={<AnnoncesDetails />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);
