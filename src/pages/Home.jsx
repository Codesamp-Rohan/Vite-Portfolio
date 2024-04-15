import {motion} from "framer-motion";
import {ProjectPage} from "../components/ProjectPage.jsx";
import Navbar from "../components/Header/Navbar.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PageTransition from "./PageTransition.jsx";

export default function Home(){

    const [isTheme, setIsTheme] = useState(true);

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
            <PageTransition/>
            <Navbar isTheme={isTheme} setIsTheme={setIsTheme}/>
            <Main />
            <GithubSection handleGithubImg={handleGithubImg} pageSize={pageSize} isTheme={isTheme} setIsTheme={setIsTheme}/>
            <AboutMe />
            <TechMarquee isTheme={isTheme}/>
            <ProjectPage isTheme={isTheme}/>
            <Footer />
        </>
    )
}

function Main() {
    return (
        <div className="flex AppScroll relative items-center border-b-[0.5px] border-b-[#404246] overflow-hidden dark:bg-[#fff] dark:border-[1px] dark:border-b-[#cbcbcb]">
            <div className="main--title border-r-[0.5px] border-r-[#404246] h-[60vh] px-[2rem] flex items-center dark:border-r-[#cbcbcb] dark:border-r-[1px] z-[30]">
                <h1 className="home-section-content text-[5rem] line-height-[10px] text-[#424769] w-[60vw] dark:text-[#888]">
                    {/*<strong className="text-[#eee] dark:text-[#7743DB]">Front-End</strong> and{" "}*/}
                    {/*<strong className="text-[#eee] dark:text-[#7743DB]">web development</strong>, driven by*/}
                    {/*strategy & innovation.*/}
                    <strong className="text-[#eee] dark:text-[#7743db]">Better</strong> and <strong className="text-[#eee] dark:text-[#7743db]">enhanced Web Developer</strong> than Spiderman itself.
                </h1>
            <img className="w-[1200px] rotate--svg--at--heading z-[1] opacity-[10%] absolute top-[10%] left-[-40%] dark:opacity-[20%]" src="/Icons/pattern--2.svg" alt="pattern--icons"></img>
            </div>
            <div className="w-[50vw] homesection--ball absolute right-[-50%] top-[20%] translate-x-[-50%] z-[1] border-[0.5px] border-[#404246] rounded-full h-[600px] bg-[#0f1116] grayscale-[60%] dark:bg-[#f6f8fa] dark:border-[#cbcbcb] dark:border-r-[1px] dark:border-[1px]"></div>
        </div>
    );
}

function GithubSection({ handleGithubImg, pageSize, isTheme }) {


    return (
        <>
            <div className="relative flex justify-center py-[100px] dark:bg-[#fff]">
                {
                    isTheme ? (<img
                        className="border-[0.3px] border-[#404246] rounded-3xl"
                        style={{width: pageSize ? "80vw" : "90vw"}}
                        src={pageSize ? "/GithubProfile.png" : "/github--mobile.jpg"}
                        onChange={handleGithubImg}
                        alt="images"></img> ): (<img
                        className="border-[0.3px] border-[#404246] rounded-3xl dark:shadow-2xl"
                        style={{width: pageSize ? "80vw" : "90vw"}}
                        src={pageSize ? "/light--GithubProfile.png" : "/github--mobile.jpg"}
                        onChange={handleGithubImg}
                        alt="images"></img>)
                }
            </div>
        </>
    );
}

function AboutMe() {
    return (
        <>
            <div className="border-t-[0.2px] relative border-t-[#404246] pb-[100px] flex justify-center dark:bg-[#fff]">
        <span className="w-[80vw] divide-y-[0.2px] divide-[#404246]">
          <p className="heading--para text-[18px] py-[30px] dark:text-[#65B741]">About Me:</p>
          <h1 className="description text-[40px] text-justify text-[#fff] py-[30px] dark:text-[#000]">
            {/*I am an independent full-service studio creating awesome digital*/}
            {/*experiences and solutions. We are an award winning group*/}
            {/*specializing in branding, design and engineering. Our mission is to*/}
            {/*make work meaningful.*/}
              I am a Web Developer and UI/UX Designer. I have 2+ years of experience.
              My mission is to be best in my skill and give the best result from my hardwork and dedication.
              <br /> <br />I am high on SKILLS 🤗.
          </h1>
          <Link className="border-none" to="/contact">
            <button className="px-[20px] py-[10px] rounded-md border-[0.2px] border-[#6e40c9] bg-[#6e40c9] text-[1.2rem] uppercase duration-300 hover:border-[#97ee81] hover:bg-[#97ee81] hover:text-[#000]">
              TALK
            </button>
          </Link>
        </span>
            </div>
        </>
    );
}

function TechMarquee({ isTheme }) {
    const skills = [
        { name: "HTML", img: "/Icons/html.png" },
        { name: "CSS", img: "/Icons/css.png" },
        { name: "JavaScript", img: "/Icons/js.png" },
        { name: "React Js", img: "/Icons/react.png" },
        {
            name: "Tailwind CSS",
            img: "/Icons/tailwind.png",
        },
        {
            name: "GSAP",
            img: "/Icons/gsap.jpg",
        },
        {
            name: "ScrollTrigger",
            img: "/Icons/gsap.jpg",
        },
        {
            name: "Framer-Motion",
            img: "/Icons/framer-motion.png",
        },
    ];
    // "marquee-fade w-full h-full"
    return (
        <>
            <div
                className="flex w-[100vw] overflow-hidden py-[1rem] relative border-y-[0.2px] border-[#404246] dark:bg-[#f6f8fa] dark:border-y-[1px] dark:border-y-[#cbcbcb] dark:text-[#000]">
                <div className={`isTheme ? "marquee-fade w-full h-full" : "l--marquee-fade w-full h-full"`}></div>
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