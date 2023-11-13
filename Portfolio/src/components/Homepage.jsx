import { BsChevronDoubleDown } from "react-icons/bs";

const Homepage = () => {
  return (
    <>
      <div
        id="zero"
        className="flex flex-col justify-center items-center text-white h-screen"
      >
        <div className="text-9xl font-handwritten">Daniele Viola</div>
        <div className="text-center mt-16 text-3xl w-1/2">
          Front-End focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product{" "}
        </div>
        <a
          href="#one"
          className="text-2xl fw-500 font-bold bg-purple-900 mt-24 pt-6 pb-6 pl-20 pr-20 rounded-md shadow-2xl hover:shadow-purple-900 hover:duration-300 hover:ease-in-out"
        >
          PROJECTS
        </a>
        <div className="absolute mt-[40%] text-4xl animate-bounce">
          <a href="#two" className="cursor-default hover:text-5xl">
            <BsChevronDoubleDown />
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
