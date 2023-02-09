import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { VideoPlayer, Suggestions, Videos } from "../components";

import { getRelatedVideo } from "../lib/ApiFetch";

import { suggestedVideo } from "../utils/Variables";

const Watch = () => {
  const { search } = useLocation();

  const id = search.slice(3);

  const [relatedVideos, setRelatedVideos] = useState([]);

  const suggestedVideos = new Array(50).fill(suggestedVideo);

  useEffect(() => {
    getRelatedVideo(id).then(({ items }) => setRelatedVideos(items));
  }, [id, search]);

  return (
    <div className="flex flex-col md:flex-row p-5 gap-10 md:gap-5">
      <div className="md:w-[65%] w-full">
        <VideoPlayer id={id} />
      </div>
      <div className="md:w-[35%] w-full">
        <Suggestions videos={relatedVideos} />
      </div>
    </div>
  );
};

export default Watch;
