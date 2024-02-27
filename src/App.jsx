import Home from "./Pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Work from "./Pages/Work.jsx";
import Services from "./Pages/Services.jsx";
import {Contact} from "./Pages/Contact.jsx";
import {Sibiro} from "./ProjectPages/sibiro.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Vite-Portfolio/" element={<Home />} />
                    <Route path="/Vite-Portfolio/work" element={<Work />} />
                    <Route path="/Vite-Portfolio/services" element={<Services />} />
                    <Route path="/Vite-Portfolio/contact" element={<Contact />} />
                    <Route path="/Vite-Portfolio/sibiro" element={<Sibiro />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}



