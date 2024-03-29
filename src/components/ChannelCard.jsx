import { Link } from "react-router-dom";

const ChannelCard = ({ video }) => {
  const { snippet, thumbnails, title } = video;
  const LinkTo = ({ children, link }) => <Link to={link}>{children}</Link>;

  return (
    <LinkTo link={`/channel/${snippet?.channelId}`}>
      <div className="flex flex-col justify-center items-center">
        <img
          // src={thumbnails?.medium?.url}
          src={snippet?.thumbnails?.medium?.url}
          alt="cover-video"
          className="rounded-full h-32"
        />

        <div className="pr-3 mt-5">
          <LinkTo link={`/channel/${snippet?.channelId}`}>
            <p className="dark:text-gray-400 text-sm dark:hover:text-white duration-300 ease-in-out">
              {snippet?.channelTitle}
            </p>
          </LinkTo>
        </div>
      </div>
    </LinkTo>
  );
};

export default ChannelCard;
