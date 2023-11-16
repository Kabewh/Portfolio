// eslint-disable-next-line react/prop-types
const Project = ({ picture, description }) => {
  return (
    <div className="flex flex-col md:grid grid-cols-2">
      <div className="flex md:justify-end">
        <img className="md:w-1/2" src={picture}></img>
      </div>
      <div className="md:w-1/2 h-auto md:h-48 md:flex text-sm md:text-lg text-center md:text-start items-start md:mt-28 justify-center md:justify-start">
        <span className="w-full break-words">{description}</span>
      </div>
    </div>
  );
};

export default Project;
