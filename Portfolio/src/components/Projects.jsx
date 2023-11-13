import SmallSeparator from "./SmallSeparator";
import WorldStats from "../assets/WorldStats.png";
import PConsultant from "../assets/PConsultant.png";

const Projects = () => {
  return (
    <div
      id="one"
      className="flex flex-col items-center justify-center h-screen bg-zinc-900 font-serif text-white"
    >
      <div className="text-5xl">PROJECTS</div>
      <SmallSeparator />
      <div className="text-xl">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </div>
      <img className="w-2/6" src={WorldStats}></img>
      <img className="w-2/6" src={PConsultant}></img>
    </div>
  );
};

export default Projects;
