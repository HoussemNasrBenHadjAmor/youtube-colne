const WatchLoader = () => {
  const Suggestion = () => (
    <div className="flex-col md:flex md:flex-row md:gap-2 animate-pulse">
      <div className="md:w-[40%] w-full ">
        <div className="rounded-lg w-full bg-[#353535] h-36 md:h-24" />
      </div>

      <div className="w-full flex flex-col gap-2 mt-3 md:mt-0 pr-3 md:w-[60%]">
        <div className="bg-[#353535] h-4 w-full" />
        <div className="bg-[#353535] h-4 w-full" />

        <div className="mt-1 flex flex-col gap-2">
          <div className="bg-[#353535] h-3 w-16" />
          <div className="bg-[#353535] h-3 w-12" />
        </div>
      </div>
    </div>
  );

  const Suggestions = ({ number }) => (
    <div className="flex flex-col gap-10 md:gap-4">
      {new Array(number || 10).fill("").map((_, i) => (
        <div key={i}>
          <Suggestion />
        </div>
      ))}
    </div>
  );

  const VideoPlayer = () => (
    <div className="flex flex-col gap-5 animate-pulse">
      <div className="h-[65vh] w-full animate-pulse bg-[#353535]" />

      <div className="flex flex-col gap-4">
        <div className="bg-[#353535] h-5 max-w-lg" />
        <div className="flex-col flex md:flex-row md:justify-between md:items-center gap-2 md:gap-0 pb-5">
          <div className="bg-[#353535] h-4 w-24" />

          <div className="flex gap-3 items-center">
            <div className="bg-[#353535] h-4 w-12" />
            <div className="bg-[#353535] h-4 w-12" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row p-5 gap-7">
      <div className="lg:w-[65%] w-full">
        <VideoPlayer />
      </div>

      <div className="lg:w-[35%] w-full">
        <Suggestions number={8} />
      </div>
    </div>
  );
};

export default WatchLoader;
