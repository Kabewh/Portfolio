const Navbar = () => {
  return (
    <>
      <nav className="bg-purple-950 pl-32 pr-32 pt-4 pb-4 text-white text-xl fixed w-full shadow-lg z-50">
        <ul className="flex justify-between">
          <li>
            <a href="#zero" className="font-handwritten text-2xl">
              dv
            </a>
          </li>
          <li className="flex">
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
