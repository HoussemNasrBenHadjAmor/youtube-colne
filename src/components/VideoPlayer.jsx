import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import { HandThumbUpIcon, EyeIcon } from "@heroicons/react/24/solid";

const VideoPlayer = ({ id, videoDetails }) => {
  const { snippet, statistics } = videoDetails;

  const { channelTitle, localized, title, channelId } = snippet;

  return (
    <div className="flex flex-col gap-5">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        className="react-player h-full w-full"
        width="100%"
        // playing="true"
      />

      <div className="flex flex-col gap-4 px-5">
        <h1 className="text-xl font-semibold">{title || localized.title}</h1>
        <div className="flex-col flex md:flex-row md:justify-between md:items-center gap-2 md:gap-0 md:border-none border-b-[1px] pb-5 border-opacity-50 dark:border-gray-200">
          <Link to={`/channel/${channelId}`}>
            <h4 className="font-medium text-slate-200"> {channelTitle} </h4>
          </Link>

          <div className="flex gap-3 items-center">
            <p className="flex items-center gap-2">
              {parseInt(statistics?.viewCount).toLocaleString()}
              <EyeIcon className="w-4 h-4" />
            </p>
            <p className="flex items-center gap-2">
              {parseInt(statistics?.likeCount).toLocaleString()}
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
