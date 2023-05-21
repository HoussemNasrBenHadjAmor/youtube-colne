import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import HoverVideoPlayer from "react-hover-video-player";

const Suggestion = ({ video }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { id, snippet, thumbnails, title } = video;
  const LinkTo = ({ children, link }) => <Link to={link}>{children}</Link>;

  const shortTitle = title?.length > 50 ? title?.slice(0, 50) + "..." : title;
  // const shortTitle =
  //   snippet?.title?.length > 50
  //     ? snippet?.title?.slice(0, 50) + "..."
  //     : snippet?.title;

  return (
    <LinkTo link={`/watch?v=${id?.videoId}`}>
      <div className="flex-col md:flex md:flex-row md:gap-2">
        <div className="md:w-[40%] w-full">
          <img
            src={thumbnails?.medium?.url}
            // src={snippet?.thumbnails?.medium?.url}
            alt="cover-video"
            className="rounded-lg w-full"
          />
        </div>

        <div className="w-full mt-3 md:mt-0 pr-3 md:w-[60%]">
          <p className="text-white font-semibold text-xs sm:text-sm">
            {shortTitle}
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
      </div>
    </LinkTo>
  );
};

export default Suggestion;
