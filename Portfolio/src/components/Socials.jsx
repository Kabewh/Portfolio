import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-around absolute mt-[20%] w-14 h-56 rounded-sm bg-purple-800">
        <div className="p-3 hover:bg-zinc-900/50 hover:bg-transparent hover:duration-300 hover:ease-in-out">
          <a
            href="https://www.linkedin.com/in/daniele-viola-444b6b195/"
            className="text-3xl text-white"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="p-3 hover:bg-zinc-900/50 hover:duration-300 hover:ease-in-out">
          <a href="https://github.com/Kabewh" className="text-3xl text-white">
            <BsGithub />
          </a>
        </div>
        <div className="p-3 hover:bg-zinc-900/50 hover:duration-300 hover:ease-in-out">
          <a href="" className="text-3xl text-white">
            <BsInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
