const MyWork = () => {
  return (
    <div
      id="one"
      className="flex flex-col items-center justify-center h-screen bg-zinc-900 font-serif text-white"
    >
      <div className="text-8xl">My Work</div>
      <div className="w-96 h-96 bg-zinc-800 rounded-xl shadow-lg">
        <div className="m-10">
          <div>Title: </div>
          <div>Content: </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
