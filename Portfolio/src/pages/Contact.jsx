/* eslint-disable react/no-unescaped-entities */
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center text-white h-auto bg-zinc-950/25"
    >
      <div className="text-4xl md:text-5xl mt-32 text-center md:mt-64 font-thicc">
        Let's work together!
      </div>
      <div className="mt-12 md:mt-24 mb-48">
        <div className="flex w-full flex-wrap">
          <div className="p-5 md:p-10 hover:bg-zinc-900 hover:bg-transparent hover:duration-300 hover:ease-in-out">
            <a
              href="https://github.com/Kabewh"
              className="text-7xl md:text-8xl text-white"
            >
              <BsGithub />
            </a>
          </div>
          <div className="p-5 md:p-10 hover:bg-zinc-900 hover:bg-transparent hover:duration-300 hover:ease-in-out">
            <a
              href="https://www.linkedin.com/in/daniele-viola-444b6b195/"
              className="text-7xl md:text-8xl text-white"
            >
              <BsLinkedin />
            </a>
          </div>
          <div className="p-5 md:p-10 hover:bg-zinc-900 hover:bg-transparent hover:duration-300 hover:ease-in-out">
            <a
              href="https://www.linkedin.com/in/daniele-viola-444b6b195/"
              className="text-7xl md:text-8xl text-white"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
