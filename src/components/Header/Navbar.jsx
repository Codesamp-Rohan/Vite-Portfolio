import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(true);

    const handleNavbar = () => {
        if (window.innerWidth <= 700) {
            setNavbar(!navbar);
        }
    };

    const menuOption = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", link: "/Vite-Portfolio/" },
        { name: "Work", link: "/Vite-Portfolio/work" },
        { name: "Services", link: "/Vite-Portfolio/services" },
    ];

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) {
                setNavbar(false);
            } else {
                setNavbar(true);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="menu--area" style={{transform: isOpen ? "translate(0, 0)" : "translate(200%, -200%)"}}>
                <button className="absolute w-[20px] right-[6%] top-[4%]" onClick={menuOption}><img className="invert w-[100%]" src="/Vite-Portfolio/Icons/close.png"></img></button>
                <ul className="w-full h-full flex flex-col justify-center pl-[30px]">
                    {navLinks.map((links, index) => {
                        return (
                            <li
                                className="text-[3rem] nav--links"
                                key={index}>
                                <Link to={links.link}>{links.name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/Vite-Portfolio/contact"
                      className="dot flex items-center mr-[30px] uppercase text-[1.2rem] bg-[#6e40c9] py-[10px] rounded-md px-[10px] absolute bottom-[10%] ml-[30px] hover:text-[#000] hover:bg-[#97ee81] duration-300">
                    Contact
                </Link>
            </div>
            <nav
                onChange={handleNavbar}
                style={{display: navbar ? "none" : "flex"}}
                className="mobile--nav w-[100vw] py-[1rem] px-[2rem] flex sticky top-0 z-[99] bg-[#0f1116] items-center justify-between border-b-[0.4px] border-b-[#404246]">
                <Link to="/Vite-Portfolio" className="flex gap-[10px] items-center">
                    <img
                        className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
                        src="/Vite-Portfolio/Rohan.jpg"></img>
                    <span>
            <p>Rohan</p>
            <p>Chaudhary</p>
          </span>
                </Link>
                <button onClick={menuOption} className="w-[40px]">
                    <img className="invert" src="/Vite-Portfolio/Icons/menu.png"></img>
                </button>
            </nav>
            <nav
                onChange={handleNavbar}
                style={{display: navbar ? "flex" : "none"}}
                className="desktop--nav w-[100vw] py-[1rem] px-[1rem] flex sticky top-0 z-[99] bg-[#0f1116] items-center justify-between border-b-[0.4px] border-b-[#404246]">
                <Link to="/Vite-Portfolio" className="flex gap-[10px] items-center">
                    <img
                        className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
                        src="/Vite-Portfolio/Rohan.jpg"></img>
                    <span>
            <p>Rohan</p>
            <p>Chaudhary</p>
          </span>
                </Link>
                <ul className="flex gap-[20px] border-[#6e40c9] bg-[#11151f] border-[1px] rounded-md text-[1.2rem] px-[10px] uppercase divide-x-[0.2px] divide-[#273550]">
                    {navLinks.map((links, index) => {
                        return (
                            <li
                                className="cursor-pointer hover:bg-[#0f1116] hover:border-[#404246] hover:ring-[0.2px] hover:text-[#eee] rounded-sm my-[5px] py-[10px] px-[10px]"
                                key={index}>
                                <Link to={links.link}>{links.name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/Vite-Portfolio/contact"
                      className="dot flex items-center mr-[30px] uppercase text-[1.2rem] bg-[#6e40c9] py-[10px] rounded-md px-[10px]">
                    Contact
                </Link>
            </nav>
        </>
    )
}