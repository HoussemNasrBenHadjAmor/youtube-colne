import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { VideoPlayer, Suggestions } from "../components";

import { getRelatedVideo } from "../lib/ApiFetch";

const Watch = () => {
  const { search } = useLocation();

  const id = search.slice(3);

  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getRelatedVideo(id).then(({ items }) => setRelatedVideos(items));
  }, [id, search]);

  console.log(relatedVideos);

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center">
      <div className="flex-1 w-full bg-slate-300">
        <VideoPlayer id={id} className="w-full h-full" />
      </div>
      <div className="">
        <Suggestions />
      </div>
    </div>
  );
};

export default Watch;
