import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const Result = ({ item }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  const VideoCard = ({ video }) => (
    <Link to={`/watch?v=${video?.id?.videoId}`}>
      <div className="md:flex md:flex-row flex-col flex gap-3">
        <div className="w-full md:max-w-lg lg:max-w-sm">
          <img
            src={video?.snippet?.thumbnails?.medium?.url}
            alt="profile"
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="w-full lg:max-w-lg md:max-w-sm flex flex-col gap-1 lg:gap-3">
          <div>
            <p className="font-bold truncate">{video?.title}</p>
            <p className="text-xs dark:text-gray-400 mt-1">
              {timeAgo.format(new Date(video?.snippet?.publishTime))}
            </p>
          </div>

          <Link to={`/channel/${video?.snippet?.channelId}`}>
            <p className="dark:md:text-gray-400 text-xs dark:md:hover:text-white duration-300 ease-in-out">
              {video?.snippet?.channelTitle}
            </p>
          </Link>

          <p className="text-xs lg:text-sm"> {video?.snippet?.description} </p>
        </div>
      </div>
    </Link>
  );

  const ChannelCard = ({ channel }) => (
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <div className="md:flex md:flex-row flex-col flex items-center gap-3 border-y-[1px] border-opacity-20 py-5">
        <div className="w-full md:w-[40%] md:max-w-sm flex items-center justify-center">
          <img
            src={channel?.snippet?.thumbnails?.medium?.url}
            alt="profile"
            className="rounded-full h-32 md:h-auto object-cover md:w-[60%] lg:w-[30%]"
          />
        </div>
        <div className="w-full md:max-w-md md:w-[60%] flex flex-col gap-2 md:gap-0">
          <p className="font-semibold truncate">{channel?.title}</p>

          <p className="text-sm"> {channel?.snippet?.description} </p>
        </div>
      </div>
    </Link>
  );

  return item?.id?.videoId ? (
    <VideoCard video={item} />
  ) : (
    <ChannelCard channel={item} />
  );
};

export default Result;
