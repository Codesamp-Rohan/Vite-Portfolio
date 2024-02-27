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
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sibiro" element={<Sibiro />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}



