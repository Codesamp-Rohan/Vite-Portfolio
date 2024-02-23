export function Navbar() {
  const navLinks = ["Work", "Services", "Insight"];
  return (
    <>
      <nav className="w-[100vw] p-[2rem] flex items-center justify-between border-b-[0.4px] border-b-[#000]">
        <span className="flex gap-[10px] items-center">
          <img
            className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
            src="/Rohan.jpg"></img>
          <span>
            <p>Rohan</p>
            <p className="font-tilt">Chaudhary</p>
          </span>
        </span>
        <ul className="flex gap-[1px] text-[1.2rem] uppercase">
          {navLinks.map((links, index) => {
            return (
              <li
                className="cursor-pointer hover:bg-[#ece9e7] hover:border-[1px] hover:border-[#ece] rounded-lg py-[10px] px-[20px]"
                key={index}>
                {links}
              </li>
            );
          })}
        </ul>
        <a href="/" className="dot flex items-center uppercase text-[1.2rem]">
          Contact
        </a>
      </nav>
    </>
  );
}
