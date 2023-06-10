const HomeLoader = ({ number, grid }) => {
  const data = new Array(number || 20).fill("");

  return (
    <div
      className={`${
        grid
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 items-center justify-center gap-5 gap-y-10 p-5"
          : "flex flex-col gap-2"
      } `}
    >
      {data.map((_, i) => (
        <div className="w-full animate-pulse flex flex-col gap-3" key={i}>
          <div className="h-36 sm:h-28 md:h-36 bg-[#353535] rounded-md" />
          <div className="h-3 bg-[#353535] rounded-sm" />
          <div className="flex flex-col gap-2">
            <div className="w-32 h-3 bg-[#353535] rounded-sm" />
            <div className="w-10 h-3 bg-[#353535] rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeLoader;
