import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import HoverVideoPlayer from "react-hover-video-player";

const VideoCard = ({ video }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { id, snippet, thumbnails, title } = video;
  const LinkTo = ({ children, link }) => <Link to={link}>{children}</Link>;

  return (
    <LinkTo link={`/watch?v=${id?.videoId}`}>
      {/* <HoverVideoPlayer
        videoSrc={`https://youtu.be/${id?.videoId}.mp4`}
        pausedOverlay={
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt=""
            // style={{
            //   width: "100%",
            //   height: "100%",
            //   objectFit: "cover",
            // }}
            className="rounded-lg w-full object-cover h-full"
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      /> */}

      <img
        src={thumbnails?.medium?.url}
        // src={snippet?.thumbnails?.medium?.url}
        alt="cover-video"
        className="rounded-lg w-full"
      />

      <div className="pr-3 mt-2">
        <p className="truncate text-white font-semibold text-xs sm:text-sm">
          {snippet?.description}
        </p>

        <div className="mt-1">
          <LinkTo
            link={`/@${snippet?.channelTitle
              ?.replace(/\s/g, "")
              ?.toLowerCase()}`}
          >
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
