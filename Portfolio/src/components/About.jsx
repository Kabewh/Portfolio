import SkillContainer from "./SkillContainer";
import SmallSeparator from "./SmallSeparator";

const About = () => {
  return (
    <div
      id="two"
      className="flex flex-col items-center justify-center h-screen bg-zinc-900 font-serif text-white"
    >
      <div className="text-5xl -mt-96">ABOUT ME</div>
      <SmallSeparator />
      <div className="text-xl text-center">
        Here you will find more information about me, what I do, and my current
        skills <br></br>mostly in terms of programming and technology
      </div>
      <div className="grid grid-cols-2 mt-16 w-1/2">
        <div className="ml-24">
          <div className="text-2xl">Get to know me!</div>
          <div className="mt-6 text-md">
            I'm a <span className="font-black">Frontend Web Developer</span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="font-black">Projects</span> section. <br></br>
            <br></br>I also like sharing content related to the stuff that I
            have learned over the years in{" "}
            <span className="font-black">Web Development</span> so it can help
            other people of the Dev Community.<br></br>
            <br></br> I'm open to <span className="font-black">Job</span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to <span className="font-black">contact</span> me.
          </div>
        </div>
        <div className="ml-24">
          <div className="text-2xl">Skills</div>
          <div className="mt-1 flex flex-wrap max-w-96">
            <SkillContainer skill={"React.js"} />
            <SkillContainer skill={"JavaScript"} />
            <SkillContainer skill={"HTML5"} />
            <SkillContainer skill={"CSS3"} />
            <SkillContainer skill={"Docker"} />
            <SkillContainer skill={"TypeScript"} />
            <SkillContainer skill={"TailwindCSS"} />
            <SkillContainer skill={"Git"} />
          </div>
        </div>
      </div>
      {/* <ul className="flex text-4xl mt-20">
        <li className="mr-10 flex items-center">
          <span className="text-sky-500">
            <SiReact />
          </span>
          React
        </li>
        <li className="mr-10 flex items-center">
          <span className="text-sky-500">
            <SiTypescript />
          </span>
          TypeScript
        </li>
        <li className="mr-10 flex items-center">
          <span className="text-sky-500">
            <SiTailwindcss />
          </span>
          Tailwind CSS
        </li>
      </ul> */}
    </div>
  );
};

export default About;
