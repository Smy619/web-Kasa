import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Logement from "../pages/Logement/Logement.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}
