import { Suggestion } from "./";

const Suggestions = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-10 md:gap-4">
      {videos?.map((video) => (
        <div key={video?.id?.videoId}>
          {video?.id?.videoId && <Suggestion video={video} />}
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
