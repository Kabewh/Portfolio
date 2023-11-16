import { useState } from "react";
import { BsListUl, BsXLg } from "react-icons/bs";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return !open ? (
    <div className="ml-36 text-3xl text-center" onClick={handleClick}>
      <BsListUl />
    </div>
  ) : (
    <>
      <li className="overflow:none h-screen w-screen space-y-16 text-xl duration-500 flex flex-col items-center justify-center text-sm md:text-lg font-black md:font-normal items-center">
        <div className="md:mr-10">
          <a href="#home" onClick={handleClick}>
            Home
          </a>
        </div>
        <div className="md:mr-10">
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </div>
        <div className="md:mr-10">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </div>
        <div className="md:mr-10">
          <a href="#contact" onClick={handleClick}>
            Contact
          </a>
        </div>
      </li>
      <div
        className="md:hidden absolute flex justify-end h-screen p-10 inline-block text-3xl"
        onClick={handleClick}
      >
        <BsXLg />
      </div>
    </>
  );
};

export default Burger;
