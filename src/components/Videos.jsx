import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 items-center justify-center gap-5 gap-y-10 p-5">
      {videos?.map((video) => (
        <div key={`${video?.id?.videoId || video?.id?.channelId}`}>
          {video?.id?.videoId && <VideoCard video={video} />}
          {video?.id?.channelId && <ChannelCard video={video} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
