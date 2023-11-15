import SmallSeparator from "./SmallSeparator";
import WorldStats from "../assets/WorldStats.png";
import PConsultant from "../assets/PConsultant.png";
import SekaiStats from "../assets/SekaiStats.png";
import ChatApp from "../assets/ChatApp.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="one"
      className="flex flex-col items-center justify-center h-auto text-white mt-96"
    >
      <div className="text-5xl">PROJECTS</div>
      <SmallSeparator />
      <div className="text-xl">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <Project
          picture={WorldStats}
          description={
            "World Stats is a comprehensive web application that allows user to visualize personalized demographic data featuring a live world population clock. Integrated React.js for the frontend, Django for the backed and Chart.js for the efficient and visually appealing data representation. The data was successfully sourced and integrated from the United Nations official webpage covering demographic data since 1950."
          }
        />
        <Project
          picture={PConsultant}
          description={
            "PC Consultant is just a basic HTML template for a computer / hardware focused company."
          }
        />
        <Project
          picture={SekaiStats}
          description={
            "Developed a dynamic website for Nokia seamlessly integrating Power BI for interactive charts and statistics on diverse topics utilizing React. SekaiStats played a key role in enhancing user engagement, contributing to positive feedback from both users and stakeholders."
          }
        />
        <Project
          picture={ChatApp}
          description={
            "Room based chat application that allows users to talk in real-time in different virtual rooms. Users can join or create rooms for specific topics, chat using text or share pictures, and interact with others who are interested in the same things. It's like being in different rooms at a party where you can chat with people about different subjects all in one place."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
