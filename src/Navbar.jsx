export function Navbar() {
  const navLinks = ["Work", "Services", "Insight"];
  return (
    <>
      <nav className="w-[100vw] py-[1rem] px-[1rem] flex sticky top-0 z-[100] bg-[#0f1116] items-center justify-between border-b-[0.4px] border-b-[#404246]">
        <span className="flex gap-[10px] items-center">
          <img
            className="w-[30px] h-[30px] object-cover grayscale-[100%] rounded-full"
            src="/Vite-Portfolio/Rohan.jpg"></img>
          <span>
            <p>Rohan</p>
            <p>Chaudhary</p>
          </span>
        </span>
        <ul className="flex gap-[20px] border-[#6e40c9] bg-[#11151f] border-[1px] rounded-md text-[1.2rem] px-[10px] uppercase divide-x-[0.2px] divide-[#273550]">
          {navLinks.map((links, index) => {
            return (
              <li
                className="cursor-pointer hover:bg-[#0f1116] hover:border-[#404246] hover:ring-[0.2px] hover:text-[#eee] rounded-sm my-[5px] py-[10px] px-[10px]"
                key={index}>
                {links}
              </li>
            );
          })}
        </ul>
        <a href="/" className="dot flex items-center mr-[30px] uppercase text-[1.2rem] bg-[#6e40c9] py-[10px] rounded-md px-[10px]">
          Contact
        </a>
      </nav>
    </>
  );
}
