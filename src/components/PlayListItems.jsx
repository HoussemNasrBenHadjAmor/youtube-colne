import { PlayListItem } from "./";

const PlayListItems = ({ videos, index }) => {
  return (
    <div className="border-[0.5px] dark:border-gray-600 border-opacity-40 rounded-md flex flex-col md:gap-2 gap-y-5 p-3 px-4 shadow-md max-h-[65vh] overflow-y-auto">
      {videos?.map((video) => (
        <PlayListItem video={video} key={video?.id} index={index} />
      ))}
    </div>
  );
};

export default PlayListItems;
