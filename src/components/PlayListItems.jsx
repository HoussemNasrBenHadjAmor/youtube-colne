import { PlayListItem } from "./";

const PlayListItems = ({ videos }) => {
  return (
    <div className="border-[1px] dark:border-gray-400 border-opacity-40 rounded-md flex flex-col gap-2 p-3 shadow-md">
      {videos?.map((video) => (
        <PlayListItem video={video} key={video?.id} />
      ))}
    </div>
  );
};

export default PlayListItems;
