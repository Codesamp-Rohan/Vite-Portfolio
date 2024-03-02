import Navbar from "../components/Header/Navbar.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {ProjectPage} from "../ProjectPage.jsx";
import {LoadPage} from "../LoadPage.jsx";
import PageTransition from "./PageTransition.jsx";

export default function Work(){
    return (
        <>
            <PageTransition />
            <Navbar />
            <ProjectPage />
            <Footer />
        </>
    )
}