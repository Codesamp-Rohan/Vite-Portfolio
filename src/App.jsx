import { LoadPage } from "./LoadPage";
import { Navbar } from "./Navbar";
import {motion} from "framer-motion";

function App() {
  return (
    <>
      <LoadPage />
        <SocialLinks />
      <Navbar />
      <Main />
      <GithubSection />
        <AboutMe />
        <TechMarquee />
    </>
  );
}

export default App;

function Main() {
  return (
    <div className="flex relative items-center border-b-[0.5px] border-b-[#404246] overflow-hidden">
      <div className="main--title border-r-[0.5px] border-r-[#404246] h-[60vh] px-[2rem] flex items-center">
        <h1 className="text-[5rem] line-height-[10px] text-[#424769] w-[60vw]">
          <strong className="text-[#eee]">Front-End</strong> and{" "}
          <strong className="text-[#eee]">web development</strong>, driven by
          strategy & innovation.
        </h1>
      </div>
      <div className="w-[50vw] homesection--ball absolute right-[-50%] top-[20%] translate-x-[-50%] z-[-1] border-[0.5px] border-[#404246] rounded-full h-[600px] bg-[#0f1116] grayscale-[60%]"></div>
    </div>
  );
}

function GithubSection() {
  return (
    <>
      <div className="w-[100vw] flex justify-center py-[100px]">
        <img
          className="w-[90vw] border-[0.3px] border-[#404246] rounded-3xl"
          src="/Vite-Portfolio/GithubProfile.png"
          alt="images"></img>
      </div>
    </>
  );
}

function SocialLinks(){
    const links = [
        {img: '/Vite-Portfolio/Icons/github.png'},
        {img: '/Vite-Portfolio/Icons/instagram.png'},
        {img: '/Vite-Portfolio/Icons/linkedin.png'}
    ]
    return <>
        <div className="fixed bottom-[30px] bg-[#0f1116] left-[10px] flex flex-col gap-[20px]">
                {links.map((link, index) => {
                    return (
                        <a key={index}>
                            <img className="w-[30px]" src={link.img} alt="icons"></img>
                        </a>
                    )
                })}
        </div>
    </>
}

function AboutMe(){
    return <>
        <div className="border-t-[0.2px] border-t-[#404246] mb-[100px] flex justify-center">
            <span className="w-[80vw] divide-y-[0.2px] divide-[#404246]">
            <p className="heading--para text-[18px] py-[30px]">About Me:</p>
            <h1 className="text-[40px] text-justify text-[#fff] py-[30px]">I am an independent full-service studio creating awesome digital experiences and solutions. We are an award winning group specializing in branding, design and engineering. Our mission is to make work meaningful.</h1>
                <a className="border-none" href="/"><button className="px-[20px] py-[10px] rounded-md border-[0.2px] border-[#6e40c9] bg-[#6e40c9] text-[1.2rem] uppercase duration-300 hover:border-[#97ee81] hover:bg-[#97ee81] hover:text-[#000]">Connect</button></a>
            </span>
        </div>
    </>
}

function TechMarquee(){

    const skills  = [
        {name: "HTML"},
        {name: "CSS"},
        {name: "JavaScript"},
        {name: "React Js"},
        {name: "GSAP"},
        {name: "ScrollTrigger"},
        {name: "Framer-Motion"},
    ]

    return <>
        <div className="flex w-[100vw] overflow-hidden py-[1rem] border-y-[0.2px] border-[#404246]"
             style={{ background: "linear-gradient(to right, transparent, transparent)" }}>
            <motion.div initial={{x: 0}} animate={{x: "-100%"}}
                        transition={{duration: 15, repeat: Infinity, ease: "linear"}}
                        className="whitespace-nowrap pr-[3rem] gap-[3rem] flex justify-around text-[3rem]">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}><h1>{skill.name}</h1></div>
                    )
                })}
            </motion.div>
            <motion.div initial={{x: 0}} animate={{x: "-100%"}}
                        transition={{duration: 15, repeat: Infinity, ease: "linear"}}
                        className="whitespace-nowrap pr-[3rem] flex gap-[3rem] justify-around text-[3rem]">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}><h1>{skill.name}</h1></div>
                    )
                })}
            </motion.div>
            <motion.div initial={{x: 0}} animate={{x: "-100%"}}
                        transition={{duration: 15, repeat: Infinity, ease: "linear"}}
                        className="whitespace-nowrap pr-[3rem] flex gap-[3rem] justify-around text-[3rem]">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}><h1>{skill.name}</h1></div>
                    )
                })}
            </motion.div>
        </div>
    </>
}