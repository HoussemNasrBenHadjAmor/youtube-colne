import { Link } from "react-router-dom";

const PlayListItem = ({ video, index }) => {
  const { snippet } = video;

  const isPosition = parseInt(index) === parseInt(snippet?.position);

  const title =
    snippet?.title?.length > 50
      ? snippet?.title?.slice(0, 50) + "..."
      : snippet?.title;

  return (
    <Link to={`/watch/list/${snippet?.playlistId}&index=${snippet?.position}`}>
      <div
        className={`flex flex-col md:flex-row gap-3 ${
          isPosition && "dark:bg-bg_zinc bg-gray-200 py-2 -mx-4 px-4"
        }`}
      >
        <div className="w-full lg:w-[30%] flex items-center justify-center gap-2">
          <p className="font-thin text-xs"> {snippet?.position + 1} </p>
          <img
            src={`${snippet?.thumbnails?.medium?.url}`}
            alt="playlistItem"
            className="w-full object-contain rounded-md"
          />
        </div>
        <div className="mt-1 lg:w-[50%] w-full">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs">{snippet?.videoOwnerChannelTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlayListItem;
