const ResultsLoader = ({ number }) => {
  const data = new Array(number || 20).fill("");

  return (
    <div className="flex flex-col gap-5 animate-pulse p-5">
      {data.map(() => (
        <div className="md:flex md:flex-row flex-col flex gap-3">
          <div className="w-full md:max-w-lg lg:max-w-sm">
            <div className="h-36 sm:h-28 md:h-36 bg-gray-200  dark:bg-[#353535] rounded-md" />
          </div>

          <div className="w-full lg:max-w-lg md:max-w-sm flex flex-col gap-1 lg:gap-3">
            <div className="h-3 bg-gray-200  dark:bg-[#353535] rounded-sm w-20" />

            <div className="h-3 bg-gray-200  dark:bg-[#353535] rounded-sm w-16" />

            <div className="h-6 bg-gray-200  dark:bg-[#353535] rounded-sm" />

            <div className="h-3 bg-gray-200  dark:bg-[#353535] rounded-sm hidden md:flex max-w-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsLoader;
