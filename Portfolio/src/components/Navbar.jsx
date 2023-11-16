import Burger from "./Burger";

const Navbar = () => {
  return (
    <>
      <nav className="bg-purple-950 py-3 text-white text-xl fixed w-screen shadow-lg z-50">
        <ul className="flex justify-between">
          <li className="w-screen ml-50 md:ml-20">
            <a
              href="#home"
              className="font-handwritten text-lg -ml-24 md:m-0 md:text-2xl"
            >
              dv
            </a>
          </li>
          <Burger />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
