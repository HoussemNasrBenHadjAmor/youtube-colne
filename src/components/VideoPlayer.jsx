import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { HandThumbUpIcon, EyeIcon } from "@heroicons/react/24/solid";

const VideoPlayer = ({ id, videoDetails }) => {
  const { snippet, statistics } = videoDetails;

  const { channelTitle, description, localized, publishedAt, title } = snippet;
  const urlTitle = channelTitle?.replace(/\s/g, "").toLowerCase();

  console.log(snippet);
  console.log(statistics);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          className="react-player"
          width="100%"
          // playing="true"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-white text-xl font-semibold">
          {title || localized.title}
        </h1>
        <div className="flex-col flex md:flex-row md:justify-between md:items-center gap-2 md:gap-0 md:border-none border-b-[1px] pb-5 border-opacity-50 border-gray-200">
          <Link to={`/@${urlTitle}`}>
            <h4 className="font-medium text-slate-200"> {channelTitle} </h4>
          </Link>

          <div className="flex gap-3 items-center">
            <p className="flex items-center gap-2">
              {parseInt(statistics.viewCount).toLocaleString()}
              <EyeIcon className="w-4 h-4" />
            </p>
            <p className="flex items-center gap-2">
              {parseInt(statistics.likeCount).toLocaleString()}
              <HandThumbUpIcon className="w-4 h-4" />
            </p>
          </div>
        </div>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
