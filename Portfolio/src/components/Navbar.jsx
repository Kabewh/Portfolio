const Navbar = () => {
  return (
    <>
      <nav className="bg-purple-950 pl-32 pr-32 pt-4 pb-4 text-white text-xl fixed w-screen shadow-lg z-50">
        <ul className="flex justify-between">
          <li>
            <a
              href="#zero"
              className="font-handwritten text-lg -ml-24 md:m-0 md:text-2xl"
            >
              dv
            </a>
          </li>
          <li className="flex text-sm md:text-lg font-black md:font-normal items-center">
            <div className="mr-10">
              <a href="#about">About</a>
            </div>
            <div className="mr-10">
              <a href="#projects">Projects</a>
            </div>
            <div className="mr-10">
              <a href="#contact">Contact</a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
