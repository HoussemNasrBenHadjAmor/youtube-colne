import { useLocation } from "react-router-dom";

import { VideoPlayer, Suggestions } from "../components";

const Watch = () => {
  const { search } = useLocation();

  const id = search.slice(3);

  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 bg-slate-300">
        <VideoPlayer id={id} className="" />
      </div>
      <div className="">
        <Suggestions />
      </div>
    </div>
  );
};

export default Watch;
