import ReactPlayer from "react-player";

const VideoPlayer = ({ id }) => {
  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
    </div>
  );
};

export default VideoPlayer;
