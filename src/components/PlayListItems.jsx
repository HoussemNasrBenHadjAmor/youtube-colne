import { PlayListItem } from "./";

const PlayListItems = ({ videos }) => {
  return (
    <div className="border-[1px] border-gray-400 rounded-md flex flex-col gap-2 p-3">
      {videos?.map((video) => (
        <PlayListItem video={video} key={video?.id} />
      ))}
    </div>
  );
};

export default PlayListItems;
