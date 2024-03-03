import Navbar from "../components/Header/Navbar.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {ProjectPage} from "../components/ProjectPage.jsx";
import {LoadPage} from "../components/LoadPage.jsx";
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