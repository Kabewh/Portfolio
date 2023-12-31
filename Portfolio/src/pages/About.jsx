/* eslint-disable react/no-unescaped-entities */
import SkillContainer from "../components/SkillContainer";
import Separator from "../components/Separator";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center py-20 md:flex md:flex-col md:items-center md:justify-center h-auto bg-zinc-950/25 font-serif text-white"
      >
        <h1 className="text-2xl mt-20 md:mt-0 md:text-5xl font-thicc">
          ABOUT ME
        </h1>
        <Separator size="small" />
        <h4 className="md:text-xl md:m-0 text-center">
          Here you will find more information about me, what I do, and my
          current skills <br></br>mostly in terms of programming and technology
        </h4>
        <div className="xl:grid xl:grid-cols-2 mt-8 2xl:mt-16 2xl:max-w-7xl">
          <div className="md:ml-24 lg:mt-10 px-5">
            <h5 className="hidden md:block text-lg md:text-2xl">
              Get to know me!
            </h5>
            <p className="mt-4 mb-8 md:my-8 text-sm md:text-md">
              I'm a <span className="font-black">Frontend Web Developer</span>{" "}
              building the Front-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the <span className="font-black">Projects</span> section.{" "}
              <br></br>
              <br></br>I also like sharing content related to the stuff that I
              have learned over the years in{" "}
              <span className="font-black">Web Development</span> so it can help
              other people of the Dev Community.<br></br>
              <br></br> I'm open to <span className="font-black">Job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to <span className="font-black">contact</span> me.
            </p>
            <a
              href="#contact"
              className="hidden md:inline-block text-md fw-500 font-bold bg-purple-900 py-4 px-10 rounded-md shadow-lg hover:shadow-purple-900 hover:duration-300 bg-purple-900/50 shadow-xl hover:shadow-purple-900 hover:bg-purple-900/75 backdrop-blur hover:ease-in-out"
            >
              CONTACT ME
            </a>
          </div>
          <div className="md:ml-24 md:mt-10 px-5 py-10 md:py-0">
            <h4 className="hidden md:inline-block text-2xl text-center md:text-left">
              SKILLS
            </h4>
            <div className="-mt-5 md:mt-1 flex flex-wrap md:flex-row md:flex-wrap justify-center md:justify-start">
              <SkillContainer skill={"React.js"} />
              <SkillContainer skill={"JavaScript"} />
              <SkillContainer skill={"TypeScript"} />
              <SkillContainer skill={"HTML5"} />
              <SkillContainer skill={"CSS3"} />
              <SkillContainer skill={"Docker"} />
              <SkillContainer skill={"TailwindCSS"} />
              <SkillContainer skill={"Git"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
