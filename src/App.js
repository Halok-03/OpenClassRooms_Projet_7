import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PageError from "./pages/PageError";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
