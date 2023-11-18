// eslint-disable-next-line react/prop-types
const Project = ({ picture, description }) => {
  return (
    <div className="flex flex-col md:grid grid-cols-2">
      <div className="flex md:justify-end">
        <img className="md:object-contain -mt-7 lg:w-1/2" src={picture}></img>
      </div>
      <div className="lg:w-1/2 lg:text-sm 2xl:text-lg h-auto md:flex text-sm md:text-lg text-center md:text-start items-start justify-center md:justify-start">
        <span className="break-words">{description}</span>
      </div>
    </div>
  );
};

export default Project;
