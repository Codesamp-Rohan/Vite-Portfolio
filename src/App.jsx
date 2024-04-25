import Home from "./Pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Pages/Work.jsx";
import Services from "./Pages/Services.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { Sibiro } from "./ProjectPages/sibiro.jsx";
import { Cosmetics } from "./ProjectPages/cosmetics.jsx";
import { Docyard } from "./ProjectPages/docyard.jsx";
import { Quasar } from "./ProjectPages/quasar.jsx";
import { Portfolio } from "./ProjectPages/portfolio.jsx";
import { LoadPage } from "./components/LoadPage.jsx";
import { MouseFollower } from "./components/MouseFollower.jsx";
import { ThemeProvider } from "./context/theme.js";
import { useEffect, useState } from "react";
import {Holesail} from "./ProjectPages/Holesail.jsx";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <LoadPage />
      <MouseFollower />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/holesail" element={<Holesail />} />
          <Route path="/sibiro" element={<Sibiro />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/docyard" element={<Docyard />} />
          <Route path="/quasar" element={<Quasar />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
