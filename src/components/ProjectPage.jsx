import {Link} from "react-router-dom";


export function ProjectPage({ active, isTheme }){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const projectDetails = [
        {img: "/Vite-Portfolio/Projects/sibiro.png", sideImg: "/Vite-Portfolio/Projects/sibiro--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinksBtn: "Explore SIBIRO", exploreLinks: "/Vite-Portfolio/sibiro", quickLinksBtn: "sibiro.ru", blob: "6e40c999", dataValue: "1"},
        {img: "/Vite-Portfolio/Projects/docyard.png", sideImg: "/Vite-Portfolio/Projects/docyard--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinksBtn: "Explore DOCYARD", exploreLinks: "/Vite-Portfolio/docyard", quickLinksBtn: "docyard.co.in", blob: "97ee8199", dataValue: "2"},
        {img: "/Vite-Portfolio/Projects/portfolio.png", sideImg: "/Vite-Portfolio/Projects/portfolio--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinksBtn: "Explore PREVIOUS PORTFOLIO", exploreLinks: "/Vite-Portfolio/portfolio", quickLinksBtn: "previous-portfolio.me", blob: "EECF8159", dataValue: "3"},
        {img: "/Vite-Portfolio/Projects/cosmetics.png", sideImg: "/Vite-Portfolio/Projects/cosmetics--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinksBtn: "Explore COSMETICS", exploreLinks: "/Vite-Portfolio/cosmetics", quickLinksBtn: "cosmetics.me", blob: "eeeeee59", dataValue: "4"},
        {img: "/Vite-Portfolio/Projects/quasar.png", sideImg: "/Vite-Portfolio/Projects/quasar--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinksBtn: "Explore QUASAR", exploreLinks: "/Vite-Portfolio/quasar", quickLinksBtn: "quasar", blob: "395B30FF", dataValue: "5"}
    ]

    return (
        <>
            <ProjectPageHeading />
            <Project isTheme={isTheme} ProjectDetails={projectDetails} scrollToTop={scrollToTop} active={active}/>
        </>
    )
}

function ProjectPageHeading(){
    return (
        <div className="flex border-y-[0.2px] border-[#404246] overflow-hidden relative dark:border-[#cbcbcb] dark:border-y-[1px] dark:bg-[#fff]">
            <h1 className="text-[9vw] p-[10px] border-r-[0.2px] border-[#404246] dark:border-r-[#cbcbcb] dark:text-[#888] dark:border-r-[1px]">SELECTED <h1
                className="pl-[25vw] dark:text-[#888]">WORKS</h1></h1>
            <img className="rotate--svg absolute top-[-50%] right-[-20%] translate-x-[20%] flex z-[2] dark:invert"
                 src="https://github.githubassets.com/assets/shape-0-df97fa6b0c27.svg" alt="side--image"></img>
        </div>
    )
}


function Project({ ProjectDetails, active, scrollToTop, isTheme }) {
    return (
        <>
            <ProjectFirst scrollToTop={scrollToTop} active={active} ProjectDetails={ProjectDetails[0]} isTheme={isTheme}/>
            <ProjectFirst scrollToTop={scrollToTop} active={active} ProjectDetails={ProjectDetails[1]} isTheme={isTheme}/>
            <ProjectFirst scrollToTop={scrollToTop} active={active} ProjectDetails={ProjectDetails[2]} isTheme={isTheme}/>
            <ProjectFirst scrollToTop={scrollToTop} active={active} ProjectDetails={ProjectDetails[3]} isTheme={isTheme}/>
            <ProjectFirst scrollToTop={scrollToTop} active={active} ProjectDetails={ProjectDetails[4]} isTheme={isTheme}/>
        </>
    );

    function ProjectFirst({ ProjectDetails, active, scrollToTop, isTheme }) {

        return (
            <div data-value={ProjectDetails.dataValue} className="project--container flex flex-col items-center relative py-[100px] dark:bg-[#fff]" style={{display: active === parseInt(ProjectDetails.dataValue) ? "none" : "flex"}}>
                <Blob ProjectDetails={ProjectDetails}/>
                <SideImage ProjectDetails={ProjectDetails}/>
                <div className="flex flex-col gap-[30px] z-[50]">
                    <ProjectMainImg ProjectDetails={ProjectDetails}/>
                    <ProjectContent scrollToTop={scrollToTop} ProjectDetails={ProjectDetails}/>
                    <ProjectLinks ProjectDetails={ProjectDetails} isTheme={isTheme}/>
                </div>
            </div>
        )
    }



    function Blob({ ProjectDetails }) {
        return (
            <div
                className="blur--blob absolute z-[1] w-[300px] h-[300px] rounded-full bottom-[20%] right-[10%]" style={{backgroundColor: `#${ProjectDetails.blob}`}}/>
        )
    }

    function SideImage({ ProjectDetails }) {
        return (
            <img className="side--img absolute w-[24vw] z-[90] rounded-md border-[1px] border-[#000] shadow-3xl bottom-[20%] right-[10%]"
                 src={ProjectDetails.sideImg} alt="side--img"></img>
        )
    }

    function ProjectMainImg({ ProjectDetails }) {
        return (
            <span className="main--img w-[70vw] overflow-hidden">
            <img className="rounded-3xl scale-[0.97] hover:scale-[1] duration-[300ms] border-[0.5px] border-[#000]"
                 src={ProjectDetails.img} alt="Project--img"></img>
                </span>
        )
    }

    function ProjectContent({ ProjectDetails }) {
        return (
            <span className="project--content--container w-[45vw] flex">
                <h1 className="text-[2vw] text-start text-[#686b72]"><Link className="text-[#6e40c9] hover:text-[#97ee81]" onClick={scrollToTop} to={ProjectDetails.exploreLinks}>{ProjectDetails.quickLinksBtn}</Link> {ProjectDetails.content}</h1>
            </span>
        )
    }

    function ProjectLinks({ ProjectDetails, isTheme }) {
        return (
            <Link className={`text-[2.4vw] w-fit dark:text-[#000] ${isTheme ? "project--link" : "l--project--link"}`} target="_blank" href={ProjectDetails.exploreLinks}>{ProjectDetails.exploreLinksBtn}</Link>

        )
    }
}
