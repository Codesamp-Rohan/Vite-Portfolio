import Navbar from "../Header/Navbar.jsx";

export function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const socialLinks = [
        {name : "LinkedIn", url: "/"}, {name :"Github", url: "/"}, {name :"Instagram", url: "/"}, {name :"Gmail", url: "/"}
    ];
    return (
        <>
            <div className="flex flex-col items-center border-y-[0.2px] border-y-[#404246]">
                <span className="w-[80vw] border-[0.2px] border-[#404246]">
        <div className="border-b-[0.2px] border-b-[#404246]">
            <h1 className="heading--para text-[18px] py-[30px] px-[20px]">Contact :</h1>
        </div>
            <form className="py-[30px] px-[20px]">
                <h1 className="text-[2.8vw]">Wanna know anything? Just text here 😁</h1>
                <span className="flex flex-col gap-[10px] py-[40px]">
                <input className="w-[45vw] text-[24px] border-[0.3px] border-[#97ee81] text-[#97ee81] bg-transparent p-[14px] rounded-md"
                       placeholder="Name" required type="name"/>
                    <input className="w-[45vw] text-[24px] border-[0.3px] border-[#97ee81] text-[#97ee81] bg-transparent p-[14px] rounded-md"
                           placeholder="Email address" required type="name"/>
                    <button className="w-fit bg-[#6e40c9] py-[14px] text-[24px] px-[70px] rounded-md hover:bg-[#97ee81] hover:text-[#000] duration-200">SEND</button>
                </span>
            </form>
                </span>
            </div>
            <footer className="flex justify-center items-center h-[30vh]">
                <div className="w-[80vw] flex justify-between items-center">
                    <a>&copy; Rohan Chaudhary</a>
                    <span
                        className="flex p-[4px] border-[0.3px] rounded-md border-[#6e40c9]  divide-x-[0.1px] divide-[#404246]">
    {socialLinks.map((links, index) => {
        return (
            <a className="cursor-pointer w-[100px] text-center hover:bg-[#0f1116] hover:border-[#404246] hover:ring-[0.2px] hover:text-[#eee] rounded-sm my-[5px] py-[10px] px-[10px]"
               key={index} href={links.url}>{links.name}</a>
        )
    })}
</span>
                    <span>
                    <button
                        className="bg-[#6e40c9] border-[0.3px] border-[#6e40c9] py-[15px] px-[40px] rounded-l-md hover:bg-[#97ee81] hover:text-[#000] duration-300">Let's
                        Connect
                    </button>
                    <button className="back--to--top--btn py-[15px] px-[10px] border-y-[0.2px] border-r-[0.2px] border-[#404246] duration-300 rounded-r-md" onClick={scrollToTop}>BACK TO TOP</button>
                    </span>
                </div>
            </footer>
        </>
    )
}