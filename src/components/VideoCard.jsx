import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;

  console.log(video);

  const LinkTo = ({ children, link }) => <Link to={link}>{children}</Link>;
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  return (
    <LinkTo link={`/watch?v=${id?.videoId}`}>
      <img
        src={snippet?.thumbnails?.medium?.url}
        alt="cover-video"
        className="rounded-lg w-full"
      />

      <div className="pr-3 mt-2">
        <p className="truncate text-white font-semibold text-xs sm:text-sm">
          {snippet?.description}
        </p>

        <div className="mt-1">
          <LinkTo link={`/@${snippet?.channelTitle}`}>
            <p className="text-gray-400 text-xs hover:text-white duration-300 ease-in-out">
              {snippet?.channelTitle}
            </p>
          </LinkTo>
          <p className="text-xs text-gray-400">
            {timeAgo.format(new Date(snippet?.publishTime))}
          </p>
        </div>
      </div>
    </LinkTo>
  );
};

export default VideoCard;
