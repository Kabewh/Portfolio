// eslint-disable-next-line react/prop-types
const Project = ({ picture, description }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-end">
        <img className="w-1/2" src={picture}></img>
      </div>
      <div className="w-1/2 flex text-lg items-center justify-start -mt-20">
        <span className="w-full break-words">{description}</span>
      </div>
    </div>
  );
};

export default Project;
