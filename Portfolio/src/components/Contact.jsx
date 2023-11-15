import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center text-white h-auto bg-zinc-950/25"
    >
      <div className="text-5xl mt-64">Let's work together!</div>
      <div className="mt-24 mb-48">
        <div>
          <div className="p-10 hover:bg-zinc-900/50 hover:bg-transparent hover:duration-300 hover:ease-in-out">
            <a
              href="https://www.linkedin.com/in/daniele-viola-444b6b195/"
              className="text-9xl text-white"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
