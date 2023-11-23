import { BsChevronDoubleDown } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Daniele Viola</title>
        <meta
          name="description"
          content="Front-End focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
        />
        <meta
          name="keywords"
          content="Website, Pagina Web, Front-End, Web Developer, Front-End Developer, Developer, Junior Front-End Developer, Middle Front-End Developer, Software Engineer, Daniele Viola"
        />
      </Helmet>
      <div
        id="home"
        className="flex flex-col justify-center items-center text-white min-h-screen h-auto"
      >
        <div className="text-center text-5xl mt-48 md:mt-32 md:text-7xl lg:text-8xl xl:text-9xl font-thicc">
          Daniele Viola
        </div>
        <div className="text-center mt-24 md:text-lg lg:text-xl md:w-5/6 xl:text-3xl lg:w-1/2">
          Front-End focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product{" "}
        </div>
        <a
          href="#projects"
          className="md:text-xl lg:text-2xl font-bold bg-purple-900 mt-24 py-3 px-3 md:py-3 md:px-8 lg:py-6 lg:px-20 rounded-md shadow-2xl hover:shadow-purple-900 hover:duration-300 hover:ease-in-out"
        >
          PROJECTS
        </a>
        <a
          href="#about"
          className="animate-bounce cursor-default hover:text-purple-800 text-4xl mt-24 md:mt-48 mb-12"
        >
          <BsChevronDoubleDown />
        </a>
        <div className="md:absolute relative mt-32 md:mt-[40%] text-4xl"></div>
      </div>
    </>
  );
};

export default Homepage;
