import {Link} from "react-router-dom";

export function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const socialLinks = [
        {name : "/Vite-Portfolio/Icons/github.png", url: "/"}, {name :"/Vite-Portfolio/Icons/linkedin.png", url: "/"}, {name :"/Vite-Portfolio/Icons/instagram.png", url: "/"}, {name :"/Vite-Portfolio/Icons/github.png", url: "/"}
    ];
    return (
        <>
            <div className="flex flex-col items-center border-y-[0.2px] border-y-[#404246] dark:bg-[#fff] dark:text-[#000]">
                <span className="contact--area w-[80vw] border-[0.2px] border-[#404246]">
        <div className="border-b-[0.2px] border-b-[#404246]">
            <h1 className="heading--para text-[18px] py-[30px] px-[20px] dark:text-[#65B741]">Contact :</h1>
        </div>
            <form className="py-[30px] px-[20px]">
                <h1 className="form--heading text-[2.8vw]">Wanna know anything? Just text here 😁</h1>
                <span className="flex flex-col gap-[10px] py-[40px]">
                <input name="name" id="name" className="contact--input w-[45vw] text-[24px] border-[0.3px] border-[#97ee81] text-[#97ee81] bg-transparent p-[14px] rounded-md dark:border-[#65B741] dark:border-[1px] dark:text-[#65B741]"
                       placeholder="Name" required type="name"/>
                    <input name="email" id="email" className="contact--input w-[45vw] text-[24px] border-[0.3px] border-[#97ee81] text-[#97ee81] bg-transparent p-[14px] rounded-md dark:border-[#65B741] dark:border-[1px] dark:text-[#65B741]"
                           placeholder="Email address" required type="name"/>
                    <button className="contact--button w-fit bg-[#6e40c9] py-[14px] text-[24px] px-[70px] rounded-md hover:bg-[#97ee81] hover:text-[#000] duration-200 dark:text-[#fff] dark:hover:text-[#000]">SEND</button>
                </span>
            </form>
                </span>
            </div>
            <footer className="footer--area flex justify-center items-center h-[30vh] dark:bg-[#fff] dark:text-[#000]">

                <div className="footer--area--content w-[80vw] flex justify-between items-center">
                    <span className="links--span flex items-center gap-[30px]">
                    <Link to="https://Codesamp-rohan.github.io">&copy; Rohan Chaudhary</Link>
                    <span
                        className="flex p-[4px]">
    {socialLinks.map((links, index) => {
        return (
            <a className="cursor-pointer w-[50px] text-center hover:bg-[#0f1116] hover:border-[#404246] hover:ring-[0.2px] hover:text-[#eee] rounded-sm my-[5px] py-[10px] px-[10px] dark:invert"
               key={index} href={links.url}><img className="w-20px" src={links.name} alt="icons--img"></img></a>
        )
    })}
</span>
                    </span>
                    <span>
                    <button
                        className="footer--button bg-[#6e40c9] border-[0.3px] border-[#6e40c9] py-[15px] px-[40px] rounded-l-md hover:bg-[#97ee81] hover:text-[#000] duration-300 dark:text-[#fff] dark:hover:text-[#000]">Let's
                        Connect
                    </button>
                    <button className="back--to--top--btn py-[15px] px-[10px] border-y-[0.2px] border-r-[0.2px] border-[#404246] duration-300 rounded-r-md" onClick={scrollToTop}>BACK TO TOP</button>
                    </span>
                </div>
            </footer>
        </>
    )
}