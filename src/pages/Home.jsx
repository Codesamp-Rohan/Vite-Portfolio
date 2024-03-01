import {motion} from "framer-motion";
import {ProjectPage} from "../ProjectPage.jsx";
import Navbar from "../components/Header/Navbar.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Home(){

    const [pageSize, setPageSize] = useState(false);

    const handleGithubImg = () => {
        if (pageSize) {
            setPageSize(true);
        } else {
            setPageSize(false);
        }
    }

    useEffect(() => {
        const handleSize = () => {
            if(window.innerWidth >= 640){
                setPageSize(true);
            } else {
                setPageSize(false);
            }
        };

        handleSize();

        window.addEventListener("resize", handleSize);

        return () => {
            window.addEventListener("resize", handleSize);
        }

    }, []);

    return (
        <>
            <Navbar />
            <Main />
            <GithubSection handleGithubImg={handleGithubImg} pageSize={pageSize}/>
            <AboutMe />
            <TechMarquee />
            <ProjectPage />
            <Footer />
        </>
    )
}

function Main() {
    return (
        <div className="flex AppScroll relative items-center border-b-[0.5px] border-b-[#404246] overflow-hidden">
            <div className="main--title border-r-[0.5px] border-r-[#404246] h-[60vh] px-[2rem] flex items-center">
                <h1 className="home-section-content text-[5rem] line-height-[10px] text-[#424769] w-[60vw]">
                    <strong className="text-[#eee]">Front-End</strong> and{" "}
                    <strong className="text-[#eee]">web development</strong>, driven by
                    strategy & innovation.
                </h1>
            </div>
            <div className="w-[50vw] homesection--ball absolute right-[-50%] top-[20%] translate-x-[-50%] z-[-1] border-[0.5px] border-[#404246] rounded-full h-[600px] bg-[#0f1116] grayscale-[60%]"></div>
        </div>
    );
}

function GithubSection({ handleGithubImg, pageSize }) {
    return (
        <>
            <div className="flex justify-center py-[100px]">
                <img
                    className="border-[0.3px] border-[#404246] rounded-3xl"
                    style={{width: pageSize? "90vw" : "70vw"}}
                    src={pageSize ? "/Vite-Portfolio/GithubProfile.png" : "/Vite-Portfolio/github--mobile.jpg"}
                    onChange={handleGithubImg}
                    alt="images"></img>
            </div>
        </>
    );
}

function AboutMe() {
    return (
        <>
            <div className="border-t-[0.2px] relative border-t-[#404246] mb-[100px] flex justify-center">
        <span className="w-[80vw] divide-y-[0.2px] divide-[#404246]">
          <p className="heading--para text-[18px] py-[30px]">About Me:</p>
          <h1 className="description text-[40px] text-justify text-[#fff] py-[30px]">
            I am an independent full-service studio creating awesome digital
            experiences and solutions. We are an award winning group
            specializing in branding, design and engineering. Our mission is to
            make work meaningful.
              <br /> <br />I am high on SKILLS.
          </h1>
          <Link className="border-none" to="/Vite-Portfolio/contact">
            <button className="px-[20px] py-[10px] rounded-md border-[0.2px] border-[#6e40c9] bg-[#6e40c9] text-[1.2rem] uppercase duration-300 hover:border-[#97ee81] hover:bg-[#97ee81] hover:text-[#000]">
              TALK
            </button>
          </Link>
        </span>
            </div>
        </>
    );
}

function TechMarquee() {
    const skills = [
        { name: "HTML", img: "/Vite-Portfolio/Icons/html.png" },
        { name: "CSS", img: "/Vite-Portfolio/Icons/css.png" },
        { name: "JavaScript", img: "/Vite-Portfolio/Icons/js.png" },
        { name: "React Js", img: "/Vite-Portfolio/Icons/react.png" },
        {
            name: "Tailwind CSS",
            img: "/Vite-Portfolio/Icons/tailwind.png",
        },
        {
            name: "GSAP",
            img: "/Vite-Portfolio/Icons/gsap.jpg",
        },
        {
            name: "ScrollTrigger",
            img: "/Vite-Portfolio/Icons/gsap.jpg",
        },
        {
            name: "Framer-Motion",
            img: "/Vite-Portfolio/Icons/framer-motion.png",
        },
    ];

    return (
        <>
            <div
                className="flex w-[100vw] overflow-hidden py-[1rem] relative border-y-[0.2px] border-[#404246]">
                <div className="marquee-fade w-full h-full"></div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap pr-[3rem] gap-[5rem] flex justify-around z-[88] text-[3rem]">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="flex items-center gap-[30px]">
                                <h1>{skill.name}</h1>
                                <img src={skill.img} className="h-[40px]" alt="icons"></img>
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap pr-[3rem] flex gap-[5rem] justify-around text-[3rem]">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="flex items-center gap-[30px]">
                                <h1>{skill.name}</h1>
                                <img src={skill.img} className="h-[40px]" alt="icons"></img>
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap pr-[3rem] flex gap-[5rem] justify-around text-[3rem]">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="flex items-center gap-[30px]">
                                <h1>{skill.name}</h1>
                                <img src={skill.img} className="h-[40px]" alt="icons"></img>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
}