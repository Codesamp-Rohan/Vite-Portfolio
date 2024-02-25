import { LoadPage } from "./LoadPage";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import {ProjectPage} from "./ProjectPage.jsx";

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
      <ProjectPage />
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

function SocialLinks() {
  const links = [
    { img: "/Vite-Portfolio/Icons/github.png", link: "/" },
    { img: "/Vite-Portfolio/Icons/instagram.png", link: "/" },
    { img: "/Vite-Portfolio/Icons/linkedin.png", link: "/" },
  ];
  return (
    <>
      <div className="fixed bottom-[30px] left-[10px] z-[99] flex flex-col gap-[20px]">
        {links.map((link, index) => {
          return (
            <a key={index} href={link.link}>
              <img className="w-[30px]" src={link.img} alt="icons"></img>
            </a>
          );
        })}
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
          <h1 className="text-[40px] text-justify text-[#fff] py-[30px]">
            I am an independent full-service studio creating awesome digital
            experiences and solutions. We are an award winning group
            specializing in branding, design and engineering. Our mission is to
            make work meaningful.
              <br /> <br />I am high on SKILLS.
          </h1>
          <a className="border-none" href="/">
            <button className="px-[20px] py-[10px] rounded-md border-[0.2px] border-[#6e40c9] bg-[#6e40c9] text-[1.2rem] uppercase duration-300 hover:border-[#97ee81] hover:bg-[#97ee81] hover:text-[#000]">
              TALK
            </button>
          </a>
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
      img: "https://imgs.search.brave.com/l7OxzTza4qsfM6bke2p9GA-eF6-b3ilamjHYHs6TKUQ/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODJmYTczY2Fi/MDNjOWMxNTVmZTRl/ODgzMDMyYTU0MGI2/MGYxZTFkNzhkMWZl/YmQ5OWNkN2E3Mzcx/NWUzY2VkYi90YWls/d2luZGNzcy5jb20v",
    },
    {
      name: "GSAP",
      img: "https://imgs.search.brave.com/QN72Bvq58BQwT6zqVtca3P0wTl_jttTZWgLUfIpProw/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTczOWNlYTZl/Mjg1ZGU1YmMwZDZm/Y2JjZmVlMTE5NWVj/ZWMxNTg4ZTQzZTRj/YzJlZDE5MjlmM2Nl/ZGVhYzEzZS9nc2Fw/LmNvbS8",
    },
    {
      name: "ScrollTrigger",
      img: "https://imgs.search.brave.com/QN72Bvq58BQwT6zqVtca3P0wTl_jttTZWgLUfIpProw/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTczOWNlYTZl/Mjg1ZGU1YmMwZDZm/Y2JjZmVlMTE5NWVj/ZWMxNTg4ZTQzZTRj/YzJlZDE5MjlmM2Nl/ZGVhYzEzZS9nc2Fw/LmNvbS8",
    },
    {
      name: "Framer-Motion",
      img: "https://imgs.search.brave.com/ayJp8exjMnaVI8OPCrFOaWV7ttwAx0AbZN-dQSFIijc/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDdmNmQwNjE5/Mjg3MDVkODRhYmQz/YjYwZThiMTQxMDMx/MTJkMWY4ODZkM2Qy/YTY1ODY1MWMxNjdk/ZmFkNzE1Ny93d3cu/ZnJhbWVyLmNvbS8",
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