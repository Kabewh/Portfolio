import { BsChevronDoubleDown } from "react-icons/bs";

const Homepage = () => {
  return (
    <>
      <div
        id="zero"
        className="flex flex-col justify-center items-center text-white h-screen"
      >
        <div className="text-3xl mt-48 md:mt-32 md:text-7xl lg:text-9xl font-handwritten">
          Daniele Viola
        </div>
        <div className="text-center mt-24 md:text-3xl md:w-1/2">
          Front-End focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product{" "}
        </div>
        <a
          href="#projects"
          className="md:text-2xl font-bold bg-purple-900 mt-24 py-3 px-3 md:py-6 md:px-20 rounded-md shadow-2xl hover:shadow-purple-900 hover:duration-300 hover:ease-in-out"
        >
          PROJECTS
        </a>
        <div className="md:absolute relative mt-32 md:mt-[40%] text-4xl animate-bounce">
          <a
            href="#about"
            className="cursor-default hover:text-purple-800 md:hover:text-5xl"
          >
            <BsChevronDoubleDown />
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
