import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "../themeBtn.jsx";

export default function Navbar({ isTheme, setIsTheme }) {

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const menuOption = () => setIsOpen(!isOpen);

    const [navbar, setNavbar] = useState(true);

    const handleNavbar = () => {
        if (window.innerWidth <= 700) {
            setNavbar(!navbar);
        }
    };

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
            <div className="menu--area" style={{ transform: isOpen ? "translate(0, 0)" : "translate(200%, -200%)" }}>
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
            <MobileNav handleNavbar={handleNavbar} isTheme={isTheme} setIsTheme={setIsTheme} navbar={navbar} menuOption={menuOption} isFixed={isFixed}/>
            <DesktopNav handleNavbar={handleNavbar} isTheme={isTheme} setIsTheme={setIsTheme} navLinks={navLinks} navbar={navbar} menuOption={menuOption} isFixed={isFixed}/>
        </>
    )
}

function MobileNav({ handleNavbar, navbar, isTheme, setIsTheme, menuOption, isFixed }){
    return (
        <nav
            onChange={handleNavbar}
            style={{display: navbar ? "none" : "flex", position: isFixed ? "fixed" : "sticky"}}
            className="mobile--nav w-[100vw] py-[1rem] px-[2rem] flex top-0 z-[99] backdrop-blur-[10px] items-center justify-between border-b-[0.4px] border-b-[#404246] dark:backdrop-blur-[10px] dark:bg-[#eee] dark:text-[#000] duration-300">
            <Link to="/Vite-Portfolio" className="flex gap-[10px] items-center">
                <img
                    className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
                    src="/Vite-Portfolio/Rohan.jpg"></img>
                <span>
        <p>Rohan</p>
        <p>Chaudhary</p>
      </span>
            </Link>
            <span className="flex items-center gap-[20px] dark:text-[#000] text-[#fff]">
                              <ThemeBtn isTheme={isTheme} setIsTheme={setIsTheme}/>
                <button onClick={menuOption} className="w-[40px]">
                    <img className="invert dark:invert-0" src="/Vite-Portfolio/Icons/menu.png"
                    alt="btn"></img>
                </button>
                </span>
        </nav>
    )
}


function DesktopNav({ handleNavbar, navbar, navLinks, isTheme, setIsTheme, handleActive, menuOption, isFixed }){
    return (
        <nav
            onChange={handleNavbar}
            style={{display: navbar ? "flex" : "none", position: isFixed ? "fixed" : "sticky"}}
            className="desktop--nav w-[100vw] py-[1rem] px-[1rem] flex top-0 z-[99] backdrop-blur-[10px] items-center justify-between border-b-[0.4px] border-b-[#404246] dark:backdrop-blur-[10px] dark:bg-[#eee] dark:text-[#000] duration-300">
            <Link to="/Vite-Portfolio" className="flex gap-[10px] items-center">
                <img
                    className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
                    src="/Vite-Portfolio/Rohan.jpg"></img>
                <span>
        <p>Rohan</p>
        <p>Chaudhary</p>
      </span>
            </Link>
            <ul className="nav--links--container flex border-[#6e40c9] bg-[#11151f] border-[1px] rounded-md text-[1.2rem] px-[10px] uppercase divide-x-[0.2px] divide-[#273550] dark:bg-[#fff]">
                {navLinks.map((links, index) => {
                    return (
                        <li
                            className="cursor-pointer hover:bg-[#0f1116] hover:border-[#404246] hover:ring-[0.2px] hover:text-[#eee] rounded-sm my-[5px] py-[10px] px-[10px] dark:hover:bg-[#eee] dark:hover:text-[#000] w-[100px] text-center"
                            key={index}>
                            <Link onClick={handleActive} to={links.link}>{links.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <span className="flex gap-[20px]">
          <ThemeBtn isTheme={isTheme} setIsTheme={setIsTheme}/>
          <Link to="/Vite-Portfolio/contact"
                className="dot flex items-center mr-[30px] uppercase text-[1.2rem] bg-[#6e40c9] py-[10px] rounded-md px-[10px] dark:text-[#fff]">
            Contact
          </Link>
                <button onClick={menuOption} className="menu--btn w-[40px]">
                <img className="invert dark:invert-0" src="/Vite-Portfolio/Icons/menu.png"
                     alt="btn"></img>
            </button>
        </span>
        </nav>
    )
}