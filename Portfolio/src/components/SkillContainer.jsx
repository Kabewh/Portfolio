// eslint-disable-next-line react/prop-types
const SkillContainer = ({ skill }) => {
  return (
    <div className="w-32  bg-purple-900/50 shadow-xl hover:shadow-purple-900 hover:bg-purple-900/75 backdrop-blur hover:duration-300 hover:ease-in-out cursor-default md:w-auto py-1 px-3 md:py-2 md:px-6 md:m-5 my-2 mx-2 mx-0 text-center shadow-lg rounded-sm md:rounded-xl text-lg">
      {skill}
    </div>
  );
};

export default SkillContainer;
