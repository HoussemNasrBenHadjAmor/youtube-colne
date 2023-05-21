import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { VideoPlayer, Suggestions, Videos } from "../components";

import {
  getRelatedVideo,
  getVideoDetails,
  getChannelPlayListItems,
} from "../lib/ApiFetch";

import { suggestedVideo, videoDetails } from "../utils/Variables";
import { isNumber } from "../utils/functions";

const Watch = () => {
  const { search } = useLocation();

  //*need to fix the id
  const id = search.slice(3);

  const [relatedVideos, setRelatedVideos] = useState([]);

  const [videoDetail, setVideoDetail] = useState(null);

  const suggestedVideos = new Array(15).fill(suggestedVideo);

  useEffect(() => {
    // getChannelPlayListItems();
    // getRelatedVideo(id).then(({ items }) => setRelatedVideos(items));
    // getVideoDetails(id).then(({ items }) => setVideoDetail(items));
  }, [id, search]);

  // console.log("videoDetails from the component", videoDetail);

  return (
    <div className="flex flex-col md:flex-row p-5 gap-7">
      <div className="lg:w-[65%] w-full">
        <VideoPlayer id={id} videoDetails={videoDetails} />
      </div>
      <div className="lg:w-[35%] w-full">
        <Suggestions videos={suggestedVideos} />
      </div>
    </div>
  );
};

export default Watch;
