export function ProjectPage(){
    const projectDetails = [
        {img: "/Vite-Portfolio/Projects/sibiro.png", sideImg: "/Vite-Portfolio/Projects/sibiro--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinks: "Explore SIBIRO", quickLinks: "sibiro.ru", blob: "6e40c999"},
        {img: "/Vite-Portfolio/Projects/docyard.png", sideImg: "/Vite-Portfolio/Projects/sibiro--menu.png", content: "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.", exploreLinks: "Explore DOCYARD", quickLinks: "docyard.co.in", blob: "97ee8159"}
    ]

    return (
        <>
            <ProjectPageHeading />
            <Project ProjectDetails={projectDetails}/>
        </>
    )
}

function ProjectPageHeading(){
    return (
        <div className="flex border-y-[0.2px] border-[#404246] overflow-hidden relative">
            <h1 className="text-[9vw] p-[10px] border-r-[0.2px] border-[#404246]">SELECTED <h1
                className="pl-[25vw]">WORKS</h1></h1>
            <img className="rotate--svg absolute top-[-50%] right-[-20%] translate-x-[20%]"
                 src="https://github.githubassets.com/assets/shape-0-df97fa6b0c27.svg" alt="side--image"></img>
        </div>
    )
}


function Project({ ProjectDetails }) {
    return (
        <>
            <ProjectFirst ProjectDetails={ProjectDetails[0]}/>
            <ProjectFirst ProjectDetails={ProjectDetails[1]}/>
        </>
    );

    function ProjectFirst({ ProjectDetails }) {
        return (
            <div className="flex flex-col items-center relative my-[100px]">
                <Blob ProjectDetails={ProjectDetails}/>
                <SideImage ProjectDetails={ProjectDetails}/>
                <div className="flex flex-col gap-[30px] z-[50]">
                    <ProjectMainImg ProjectDetails={ProjectDetails}/>
                    <ProjectContent ProjectDetails={ProjectDetails}/>
                    <ProjectLinks ProjectDetails={ProjectDetails}/>
                </div>
            </div>
        )
    }

    function Blob({ ProjectDetails }) {
        return (
            <div
                className="blur--blob absolute z-[1] w-[300px] h-[300px] rounded-full bottom-[0%] right-[10%]" style={{backgroundColor: `#${ProjectDetails.blob}`}}/>
        )
    }

    function SideImage({ ProjectDetails }) {
        return (
            <img className="absolute w-[24vw] z-[90] rounded-md bottom-[0] right-[10%]"
                 src={ProjectDetails.sideImg} alt="side--img"></img>
        )
    }

    function ProjectMainImg({ ProjectDetails }) {
        return (
            <span className="w-[80vw] overflow-hidden">
            <img className="rounded-3xl scale-[0.97] hover:scale-[1] grayscale-[30%] hover:grayscale-0 duration-[300ms]"
                 src={ProjectDetails.img} alt="Project--img"></img>
                </span>
        )
    }

    function ProjectContent({ ProjectDetails }) {
        return (
            <span className="w-[55vw] flex">
                <h1 className="text-[2vw] text-start text-[#686b72]"><a className="text-[#6e40c9] hover:text-[#97ee81]" href={ProjectDetails.quickLinks} target="_blank">{ProjectDetails.quickLinks}</a> {ProjectDetails.content}</h1>
            </span>
        )
    }

    function ProjectLinks({ ProjectDetails }) {
        return (
            <a className="project--link text-[1.8rem] w-fit" href={ProjectDetails.exploreLinks}>{ProjectDetails.exploreLinks}</a>
        )
    }
}
