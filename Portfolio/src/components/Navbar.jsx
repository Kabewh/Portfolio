import Burger from "./Burger";
import { useState } from "react";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <nav className="bg-purple-950 py-4 text-white text-xl fixed w-screen shadow-lg z-50">
        {!burgerOpen ? (
          <div className="flex justify-between items-center">
            <a
              href="#home"
              className="font-handwritten text-lg ml-6 md:ml-48 md:text-2xl"
            >
              dv
            </a>
            <Burger isOpen={burgerOpen} toggleBurger={handleBurgerClick} />
          </div>
        ) : (
          <Burger isOpen={burgerOpen} toggleBurger={handleBurgerClick} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
