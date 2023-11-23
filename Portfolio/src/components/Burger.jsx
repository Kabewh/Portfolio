/* eslint-disable react/prop-types */
import { BsListUl, BsXLg } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

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
          <HashLink to="/#about">About</HashLink>
        </div>
        <div className="md:mr-10 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          <HashLink to="/#projects">Projects</HashLink>
        </div>
        <div className="md:mr-10 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          <HashLink to="/#contact">Contact</HashLink>
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
          <HashLink to="/#home" onClick={toggleBurger}>
            Home
          </HashLink>
        </div>
        <div className="md:mr-10">
          <HashLink to="/#about" onClick={toggleBurger}>
            About
          </HashLink>
        </div>
        <div className="md:mr-10">
          <HashLink to="/#projects" onClick={toggleBurger}>
            Projects
          </HashLink>
        </div>
        <div className="md:mr-10">
          <HashLink to="/#contact" onClick={toggleBurger}>
            Contact
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Burger;
