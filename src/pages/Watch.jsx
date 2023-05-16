import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { VideoPlayer, Suggestions, Videos } from "../components";

import {
  getRelatedVideo,
  getVideoDetails,
  getChannelPlayListItems,
} from "../lib/ApiFetch";

import { suggestedVideo, videoDetails } from "../utils/Variables";

const Watch = () => {
  const { search } = useLocation();

  //*to verify if we're gonna display a list of playList videos
  const isList = search.includes("list");
  const isIndex = search.includes("index");
  const isVideo = search.includes("?v");

  //* we need to test here if the URL contains ?v= or does contain ?list=
  //* & then we need to get the videoId if it's ?v= || to get the listId if it's ?list =?
  //* & then fetch the playlist items and test the number of the list to INDEX and if the index in the url is bigger than the length we need to display the videoId's index number 0
  //* or if the index in the URL if less than the length then we'll display the same videoId's index

  const id = isList
    ? search.slice(3, search.indexOf("list") - 1)
    : search.slice(3);

  const index = isIndex ? search[search.indexOf("index") + 6] : 0;

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
      <div className="md:w-[65%] w-full">
        <VideoPlayer id={id} videoDetails={videoDetails} />
      </div>
      <div className="md:w-[35%] w-full">
        {isList && (
          <div>
            <p>hi</p>
          </div>
        )}
        <Suggestions videos={suggestedVideos} />
      </div>
    </div>
  );
};

export default Watch;
