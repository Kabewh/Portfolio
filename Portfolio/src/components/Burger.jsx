/* eslint-disable react/prop-types */
import { BsListUl, BsXLg } from "react-icons/bs";

const Burger = ({ isOpen, toggleBurger }) => {
  return !isOpen ? (
    <>
      <div
        className="inline-block md:hidden mr-5 text-2xl"
        onClick={toggleBurger}
      >
        <BsListUl />
      </div>
      <div className="hidden md:flex md:mr-48 md:inline-block">
        <div className="md:mr-10 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          <a href="#about">About</a>
        </div>
        <div className="md:mr-10 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          <a href="#projects">Projects</a>
        </div>
        <div className="md:mr-10 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        className="w-screen flex justify-end pr-5 inline-block md:hidden text-2xl"
        onClick={toggleBurger}
      >
        <BsXLg />
      </div>
      <div className="h-screen -mt-5 flex flex-col items-center justify-center space-y-10 text-3xl">
        <div className="md:mr-10">
          <a href="#home" onClick={toggleBurger}>
            Home
          </a>
        </div>
        <div className="md:mr-10">
          <a href="#about" onClick={toggleBurger}>
            About
          </a>
        </div>
        <div className="md:mr-10">
          <a href="#projects" onClick={toggleBurger}>
            Projects
          </a>
        </div>
        <div className="md:mr-10">
          <a href="#contact" onClick={toggleBurger}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Burger;
