import Navbar from "../components/Header/Navbar.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import PageTransition from "./PageTransition.jsx";

export default function Services(){
    return (
        <>
            <PageTransition />
            <Navbar />
        <h1 className="text-[4rem]">Services</h1>
            <Footer />
            </>
    )
}