import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-5 gap-y-10 p-3">
      {videos?.map((video) =>
        video?.id?.videoId ? (
          <VideoCard video={video} />
        ) : (
          <ChannelCard ChannelCard={video} />
        )
      )}
    </div>
  );
};

export default Videos;
