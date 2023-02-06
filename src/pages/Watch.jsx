import { useLocation } from "react-router-dom";

import { VideoPlayer, Suggestions } from "../components";

const Watch = () => {
  const { search } = useLocation();

  const id = search.slice(3);

  return (
    <div className="flex justify-center items-center">
      <div>
        <VideoPlayer id={id} />
      </div>
      <div className="flex 1">
        <Suggestions />
      </div>
    </div>
  );
};

export default Watch;
