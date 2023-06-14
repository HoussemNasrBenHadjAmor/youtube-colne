import { Link } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/outline";

const PlayList = ({ playList }) => {
  const { contentDetails, snippet, id } = playList;

  const truncateText =
    snippet?.title?.length > 60
      ? snippet?.title?.slice(0, 60) + "..."
      : snippet?.title;

  return (
    <Link to={`/watch/list/${id}&index=0`}>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt="playList-banner"
            className="object-cover rounded-md w-full"
          />

          <div className="absolute inset-0 top-32 sm:top-48 md:top-20 flex px-2 justify-between items-center z-50 bg-opacity-[.55] text-white bg-black">
            <Bars2Icon className="w-4 h-4" />
            <p className="text-xs">{contentDetails?.itemCount} videos</p>
          </div>
        </div>

        <p className="text-sm font-semibold">{truncateText}</p>
        <p className="text-sm">View full playlist</p>
      </div>
    </Link>
  );
};

export default PlayList;
