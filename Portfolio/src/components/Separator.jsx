/* eslint-disable react/prop-types */
const Separator = ({ size }) => {
  const small = (
    <div className="w-12 h-2 rounded-md bg-purple-900 m-5 md:m-10"></div>
  );

  const large = (
    <div className="w-1/3 h-1 rounded-md bg-purple-900 m-5 md:m-10"></div>
  );

  return size === "large" ? large : small;
};

export default Separator;
