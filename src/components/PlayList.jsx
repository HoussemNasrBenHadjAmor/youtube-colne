import { Link } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/outline";

const PlayList = ({ playList }) => {
  const { contentDetails, snippet, id } = playList;

  const truncateText =
    snippet?.title?.length > 60
      ? snippet?.title?.slice(0, 60) + "..."
      : snippet?.title;

  return (
    <Link to={`/watch?list=${id}&index=0`}>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt="playList-banner"
            className="object-cover rounded-md w-full"
          />

          <div className="text-white absolute inset-0 left-52 sm:left-48 md:left-36 flex flex-col justify-center items-center z-50 bg-opacity-[.85] bg-black rounded-r-md">
            <p className="">{contentDetails?.itemsCount}</p>
            <Bars2Icon className="w-6 h-6" />
          </div>
        </div>

        <p className="text-sm text-white">{truncateText}</p>
        <p className="text-sm">View full playlist</p>
      </div>
    </Link>
  );
};

export default PlayList;
