import { Link } from "react-router-dom";

const PlayListItem = ({ video }) => {
  const { snippet } = video;

  const title =
    snippet?.title?.length > 50
      ? snippet?.title?.slice(0, 50) + "..."
      : snippet?.title;

  return (
    <Link to={`/watch/list/${snippet?.playlistId}&index=${snippet?.position}`}>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full lg:w-[30%]">
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
