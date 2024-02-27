import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const navLinks = [
        {name: "Home", link: "/"},
        {name: "Work", link: "/work"},
        {name: "Services", link: "/services"},
    ]
    return (
        <>
            {/*<Link to="/">Home</Link>*/}
            {/*<Link to="/work">Work</Link>*/}
            {/*<Link to="/services">Services</Link>*/}
            <nav
                className="w-[100vw] py-[1rem] px-[1rem] flex sticky top-0 z-[99] bg-[#0f1116] items-center justify-between border-b-[0.4px] border-b-[#404246]">
                <Link to="/" className="flex gap-[10px] items-center">
                    <img
                        className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
                        src="/Rohan.jpg"></img>
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
                <Link to="/contact"
                   className="dot flex items-center mr-[30px] uppercase text-[1.2rem] bg-[#6e40c9] py-[10px] rounded-md px-[10px]">
                    Contact
                </Link>
            </nav>
        </>
    )
}
