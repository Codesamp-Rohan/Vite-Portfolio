import { Link } from "react-router-dom";

export function ProjectPage({ active, isTheme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projectDetails = [
    {
      img: "/Projects/holesail-1.png",
      sideImg: "/Projects/holesail-mobile.png",
      content:
        "is a peer to peer reverse tunneling software for instant access of localhost just by sharing the seed(key).",
      exploreLinksBtn: "Explore HOLESAIL",
      exploreLinks: "/holesail",
      quickLinksBtn: "holesail.io",
      blob: "6e40c999",
      dataValue: "1",
    },
    {
      img: "/Projects/sibiro.png",
      sideImg: "/Projects/sibiro--menu.png",
      content:
        "is a website of a client from Russia who has a furniture business and I designed the Front-End part of his website.",
      exploreLinksBtn: "Explore SIBIRO",
      exploreLinks: "/sibiro",
      quickLinksBtn: "sibiro.ru",
      blob: "97ee8199",
      dataValue: "1",
    },
    {
      img: "/Projects/docyard.png",
      sideImg: "/Projects/docyard--menu.png",
      content:
        "a freelancing agency and social-media platform. I developed the complete website of them from designing to development to deployment to maintaince.",
      exploreLinksBtn: "Explore DOCYARD",
      exploreLinks: "/docyard",
      quickLinksBtn: "docyard.co.in",
      blob: "97ee8199",
      dataValue: "2",
    },
    {
      img: "/Projects/portfolio.png",
      sideImg: "/Projects/portfolio--menu.png",
      content:
        "is my previous portfolio when I was new to JavaScript and was full on `code-eroids` to develop a personal portfolio for me.",
      exploreLinksBtn: "Explore PREVIOUS PORTFOLIO",
      exploreLinks: "/portfolio",
      quickLinksBtn: "previous-portfolio.me",
      blob: "EECF8159",
      dataValue: "3",
    },
    {
      img: "/Projects/cosmetics.png",
      sideImg: "/Projects/cosmetics--menu.png",
      content:
        "is a simple template I designed and developed for a cosmetics startup. We can convert it for a cafe or restaurent too.",
      exploreLinksBtn: "Explore COSMETICS",
      exploreLinks: "/cosmetics",
      quickLinksBtn: "cosmetics.me",
      blob: "eeeeee59",
      dataValue: "4",
    },
    {
      img: "/Projects/quasar.png",
      sideImg: "/Projects/quasar--menu.png",
      content:
        "empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.",
      exploreLinksBtn: "Explore QUASAR",
      exploreLinks: "/quasar",
      quickLinksBtn: "quasar",
      blob: "395B30FF",
      dataValue: "5",
    },
  ];

  return (
    <>
      <ProjectPageHeading />
      <Project
        isTheme={isTheme}
        ProjectDetails={projectDetails}
        scrollToTop={scrollToTop}
        active={active}
      />
    </>
  );
}

function ProjectPageHeading() {
  return (
    <div className="flex border-y-[0.2px] border-[#404246] overflow-hidden relative dark:border-[#cbcbcb] dark:border-y-[1px] dark:bg-[#fff]">
      <h1 className="text-[9vw] p-[10px] border-r-[0.2px] border-[#404246] dark:border-r-[#cbcbcb] dark:text-[#888] dark:border-r-[1px]">
        SELECTED <h1 className="pl-[25vw] dark:text-[#888]">WORKS</h1>
      </h1>
      <img
        className="rotate--svg absolute top-[-50%] right-[-20%] translate-x-[20%] flex z-[2] dark:invert"
        src="https://github.githubassets.com/assets/shape-0-df97fa6b0c27.svg"
        alt="side--image"></img>
    </div>
  );
}

function Project({ ProjectDetails, active, scrollToTop, isTheme }) {
  return (
    <>
      <ProjectFirst
        scrollToTop={scrollToTop}
        active={active}
        ProjectDetails={ProjectDetails[0]}
        isTheme={isTheme}
      />
      <ProjectFirst
        scrollToTop={scrollToTop}
        active={active}
        ProjectDetails={ProjectDetails[1]}
        isTheme={isTheme}
      />
      <ProjectFirst
        scrollToTop={scrollToTop}
        active={active}
        ProjectDetails={ProjectDetails[2]}
        isTheme={isTheme}
      />
      <ProjectFirst
        scrollToTop={scrollToTop}
        active={active}
        ProjectDetails={ProjectDetails[3]}
        isTheme={isTheme}
      />
      <ProjectFirst
        scrollToTop={scrollToTop}
        active={active}
        ProjectDetails={ProjectDetails[4]}
        isTheme={isTheme}
      />
    </>
  );

  function ProjectFirst({ ProjectDetails, active, scrollToTop, isTheme }) {
    return (
      <div
        data-value={ProjectDetails.dataValue}
        className="project--container flex flex-col items-center relative py-[100px] dark:bg-[#fff]"
        style={{
          display:
            active === parseInt(ProjectDetails.dataValue) ? "none" : "flex",
        }}>
        <Blob ProjectDetails={ProjectDetails} />
        <SideImage ProjectDetails={ProjectDetails} />
        <div className="flex flex-col gap-[30px] z-[50]">
          <ProjectMainImg ProjectDetails={ProjectDetails} />
          <ProjectContent
            scrollToTop={scrollToTop}
            ProjectDetails={ProjectDetails}
          />
          <ProjectLinks ProjectDetails={ProjectDetails} isTheme={isTheme} />
        </div>
      </div>
    );
  }

  function Blob({ ProjectDetails }) {
    return (
      <div
        className="blur--blob absolute z-[1] w-[300px] h-[300px] rounded-full bottom-[20%] right-[10%]"
        style={{ backgroundColor: `#${ProjectDetails.blob}` }}
      />
    );
  }

  function SideImage({ ProjectDetails }) {
    return (
      <img
        className="side--img absolute w-[24vw] z-[90] rounded-md border-[1px] border-[#000] shadow-3xl bottom-[20%] right-[10%]"
        src={ProjectDetails.sideImg}
        alt="side--img"></img>
    );
  }

  function ProjectMainImg({ ProjectDetails }) {
    return (
      <span className="main--img w-[70vw] overflow-hidden">
        <img
          className="rounded-3xl scale-[0.97] hover:scale-[1] duration-[300ms] border-[0.5px] border-[#000]"
          src={ProjectDetails.img}
          alt="Project--img"></img>
      </span>
    );
  }

  function ProjectContent({ ProjectDetails }) {
    return (
      <span className="project--content--container w-[45vw] flex">
        <h1 className="text-[2vw] text-start text-[#686b72]">
          <Link
            className="text-[#6e40c9] hover:text-[#97ee81]"
            onClick={scrollToTop}
            to={ProjectDetails.exploreLinks}>
            {ProjectDetails.quickLinksBtn}
          </Link>{" "}
          {ProjectDetails.content}
        </h1>
      </span>
    );
  }

  function ProjectLinks({ ProjectDetails, isTheme }) {
    return (
      <Link
        className={`text-[2.4vw] w-fit dark:text-[#000] ${isTheme ? "project--link" : "l--project--link"}`}
        target="_blank"
        href={ProjectDetails.exploreLinks}>
        {ProjectDetails.exploreLinksBtn}
      </Link>
    );
  }
}
