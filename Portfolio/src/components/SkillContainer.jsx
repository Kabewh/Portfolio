// eslint-disable-next-line react/prop-types
const SkillContainer = ({ skill }) => {
  return (
    <div className="py-2 px-6 m-5 text-center shadow-lg rounded-2xl bg-purple-900/75 text-lg">
      {skill}
    </div>
  );
};

export default SkillContainer;
