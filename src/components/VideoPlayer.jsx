import ReactPlayer from "react-player";

const VideoPlayer = ({ id }) => {
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        className="react-player"
        width="100%"
      />
    </div>
  );
};

export default VideoPlayer;
