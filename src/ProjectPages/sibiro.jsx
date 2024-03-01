import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {ProjectPage} from "../ProjectPage.jsx";
import Navbar from "../components/Header/Navbar.jsx";
import {Footer} from "../components/Footer/Footer.jsx";

export function Sibiro(){
    let active = 1;
    return (
        <>
            <Navbar />
            <div>
                <div className="h-[60vh] top--section relative border-b-[1px] border-b-[#404246]">
                    <span className="project--img z-[20] w-[100%] h-[100%] absolute text-[#000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
                    <img className="project--img absolute h-full w-full object-cover z-[19] brightness-[70%]" src="/Vite-Portfolio/Projects/sibiro.png" alt="bg-img"></img>
                    <span className="absolute w-[100%] h-[100%] z-[50] flex items-end px-[30px]">
                        <h1 className="text-[10vw]">SIBIRO</h1>
                    </span>
                </div>
            </div>
            <Slider />
            <ProjectContent />
            <ProjectPage active={active}/>
            <Footer />
        </>
    )
}

const Slider = () => {
    // Initialize the state for the current slide index
    const [index, set] = useState(0);

    // Replace these image sources with the actual file names of your images
    const images = [
        '/Vite-Portfolio/Projects/sibiro.png',
        '/Vite-Portfolio/Projects/sibiro-2.png',
        '/Vite-Portfolio/Projects/sibiro-3.png'
    ];

    // Use the useSpring hook to animate the slide transition
    const props = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 500}});

    return (
        <div className="relative flex justify-center border-y-[0.2px] border-y-[#404246] my-[100px]">
            <div style={{ marginBottom: '1rem' }}>
                <button className="single--project--btn absolute bg-[#6e40c9] p-[20px] rounded-md top-[50%] left-[3%] hover:bg-[#273550] translate-y-[-50%]"
                        onClick={() => set((state) => (state === 0 ? images.length - 1 : state - 1))}
                >
                    &#8592;
                </button>
                <button className="single--project--btn absolute bg-[#6e40c9] p-[20px] rounded-md hover:bg-[#273550] top-[50%] right-[3%] translate-y-[-50%]"
                        onClick={() => set((state) => (state === images.length - 1 ? 0 : state + 1))}
                >
                    &#8594;
                </button>
            </div>
            <animated.div style={props}>
                {index !== -1 && index !== images.length && <img className="w-[80vw] rounded-xl" src={images[index]} alt={`Image ${index + 1}`} />}
            </animated.div>
        </div>
    );
};

export default Slider;

function ProjectContent(){
    return (
        <>
            <div className="single--project--content flex justify-center px-[100px] pb-[200px]">
                <div className="single--project--content--container flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="single--project--heading text-[#97ee81]">Project Details</h1>
                        <span
                            className="flex whitespace-nowrap justify-between border-b-[0.2px] border-b-[#404246] py-[20px] text-[2vw]">
                        <h1 className="single--project--heading w-[35%]">Date : </h1>
                        <h1 className="single--project--heading w-[65%]">30th Feb, 2024</h1>
                    </span>
                        <span
                            className="flex whitespace-nowrap justify-between border-b-[0.2px] border-b-[#404246] py-[20px] text-[2vw]">
                        <h1 className="single--project--heading w-[35%]">Client : </h1>
                        <h1 className="single--project--heading w-[65%]">Sibiro</h1>
                    </span>
                        <span
                            className="flex justify-between border-b-[0.2px] border-b-[#404246] py-[20px] text-[2vw]">
                        <h1 className="single--project--heading w-[35%]">Services : </h1>
                        <h1 className="single--project--heading w-[65%]">UI/UX Design, Front-End Developer</h1>
                    </span>
                    </div>
                    <div className="description flex flex-col w-[45%]">
                        <h1 className="text-[#97ee81]">Description</h1>
                        <p className="description--para text-[1.6vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae risus vel velit laoreet tristique. Nulla euismod eleifendi nunc, ac euismod velit pellentesentes Sed et risus tincidunt, cursus nunc sit amet, bibendum nunc. Sed euismod, justo sed pulvinar feugiat, dui velit viverra velit, vel tristique ante velit et velit. Suspendisse vel libero vel massa volutpat faucibus vel et nibh. Sed et risus tincidunt, cursus nunc sit amet, bibendum nunc. Sed euismod, justo sed pulvinar feugiat, dui velit viverra velit, vel tristique ante velit et velit. Suspendisse vel libero vel massa volutpat faucibus vel et nibh.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
