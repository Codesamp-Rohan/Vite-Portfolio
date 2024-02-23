import { LoadPage } from "./LoadPage";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <LoadPage />
      <Navbar />
      <Main />
      <ProjectSection />
    </>
  );
}

export default App;

function Main() {
  return (
    <div className="flex relative items-center border-b-[0.5px] border-b-[#000] overflow-hidden">
      <div className="main--title border-r-[0.5px] border-r-[#000] h-[60vh] px-[2rem] flex items-center">
        <h1 className="text-[5rem] line-height-[10px] text-[#cdbbbb] w-[60vw]">
          <strong className="font-tilt text-[#000000]">Front-End</strong> and{" "}
          <strong className="font-tilt text-[#000000]">web development</strong>,
          driven by strategy & innovation.
        </h1>
      </div>
      <div className="w-[740px] absolute right-[-50%] top-[20%] translate-x-[-50%] z-[-1] border-[1px] border-[#000] rounded-full h-[600px] bg-[#9195F6]"></div>
    </div>
  );
}

function ProjectSection() {
  return <h1>Hello</h1>;
}
