import { BsChevronDoubleDown } from "react-icons/bs";

const Homepage = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-center items-center text-white min-h-screen h-auto"
      >
        <div className="text-3xl mt-48 md:mt-32 md:text-7xl lg:text-9xl font-handwritten">
          Daniele Viola
        </div>
        <div className="text-center mt-24 md:text-xl md:w-5/6 lg:text-3xl lg:w-1/2">
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
          className="animate-bounce cursor-default hover:text-purple-800 text-4xl mt-32 md:mt-48 mb-12"
        >
          <BsChevronDoubleDown />
        </a>
        <div className="md:absolute relative mt-32 md:mt-[40%] text-4xl"></div>
      </div>
    </>
  );
};

export default Homepage;
