import {Navbar} from "../Navbar.jsx";

export function Sibiro(){
    return (
        <>
            <Navbar />
            <div>
                <div className="h-[50vh] top--section relative border-b-[1px] border-b-[#404246]">
                    <span className="project--img z-[20] w-[100%] h-[100%] absolute text-[#000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
                    <img className="project--img absolute h-full w-full object-cover z-[19] brightness-[70%]" src="/Vite-Portfolio/Projects/sibiro.png" alt="bg-img"></img>
                    <span className="absolute w-[100%] h-[100%] z-[50] flex items-end px-[30px]">
                        <h1 className="text-[10vw]">SIBIRO</h1>
                    </span>
                </div>
            </div>
        </>
    )
}