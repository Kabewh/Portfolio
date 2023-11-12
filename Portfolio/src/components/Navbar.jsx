const Navbar = () => {
  return (
    <>
      <nav className="bg-zinc-800 pl-32 pr-32 pt-4 pb-4 text-white text-xl">
        <ul className="flex justify-between">
          <li>dv</li>
          <li className="flex">
            <div className="mr-10">
              <a href="#one">My Work</a>
            </div>
            <div className="mr-10">
              <a href="#two">Skills</a>
            </div>
            <div className="mr-10">
              <a href="#three">Contact</a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
