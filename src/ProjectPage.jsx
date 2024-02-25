export function ProjectPage(){

    return <>
        <ProjectPageHeading />
        <Project />
    </>
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


function Project() {
    return (
        <>
        <ProjectFirst />
    <ProjectFirst />
    <ProjectFirst />
    <ProjectFirst />
    <ProjectFirst />
        </>
    );

    function ProjectFirst(){
        return (
            <div className="flex flex-col items-center relative my-[100px]">
                <Blob/>
                <SideImage/>
                <div className="flex flex-col gap-[30px] z-[50]">
                    <ProjectMainImg/>
                    <ProjectContent/>
                    <ProjectLinks/>
                </div>
            </div>
        )
    }

    function Blob() {
        return (
            <div
                className="blur--blob absolute z-[1] w-[300px] h-[300px] rounded-full bottom-[0%] right-[10%] bg-[#6e40c9]"/>
        )
    }


    function SideImage() {
        return (
            <img className="absolute w-[24vw] z-[99] rounded-md bottom-[0] right-[10%]"
                 src="/Vite-Portfolio/Projects/sibiro--menu.png" alt="side--img"></img>
        )
    }

    function ProjectMainImg() {
        return (
            <span className="w-[80vw] overflow-hidden">
            <img className="rounded-3xl scale-[0.97] hover:scale-[1] grayscale-[30%] hover:grayscale-0 duration-[300ms]"
                 src="/Vite-Portfolio/Projects/sibiro.png" alt="Project--img"></img>
                </span>
        )
    }

    function ProjectContent() {
        return (
            <span className="w-[55vw] flex">
                <h1 className="text-[2vw] text-start text-[#686b72]"><a className="text-[#6e40c9] hover:text-[#97ee81]" href="https://sibiro.ru" target="_blank">sibiro.ru</a> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.</h1>
            </span>
        )
    }

    function ProjectLinks() {
        return (
            <a className="project--link text-[1.8rem] w-fit" href="/">Explore SIBIRO</a>
        )
    }
}