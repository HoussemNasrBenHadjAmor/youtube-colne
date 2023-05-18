import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { VideoPlayer, Suggestions, Videos } from "../components";

import {
  getRelatedVideo,
  getVideoDetails,
  getChannelPlayListItems,
} from "../lib/ApiFetch";

import {
  suggestedVideo,
  videoDetails,
  playListVideos,
} from "../utils/Variables";
import { isNumber, filterId } from "../utils/functions";

const WatchList = () => {
  const { id } = useParams();

  const indexSplit = id.includes("index=") && id.split("&");
  const indexLength = indexSplit && indexSplit[1]?.slice(6);
  const index = indexLength ? (isNumber(indexLength) ? indexLength : 0) : 0;

  const idList = id.includes("index")
    ? filterId(id.slice(0, id.indexOf("index")))
    : id;

  //* first of all : we need to fetch the playList and then test our index :
  //* and then get the correct index as well the videoId of the correct index and then :
  //* fetch the video details by the video id and display it on the screen.

  const [relatedVideos, setRelatedVideos] = useState([]);

  const [videoDetail, setVideoDetail] = useState(null);

  const [channelListVideos, setChannelListVideos] = useState(null);

  const suggestedVideos = new Array(15).fill(suggestedVideo);

  const videoIndex =
    channelListVideos && channelListVideos?.length < index ? 0 : index;

  const video = channelListVideos && channelListVideos[videoIndex];

  const getChannelPlayListItemsFun = async () => {
    try {
      await getChannelPlayListItems(idList).then(({ items }) =>
        setChannelListVideos(items)
      );
    } catch (error) {
      return error;
    }
  };

  const getVideoDetailsFun = async () => {
    try {
      await getVideoDetails(video?.contentDetails?.videoId).then(({ items }) =>
        setVideoDetail(items)
      );
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getChannelPlayListItemsFun();
  }, [idList]);

  useEffect(() => {
    channelListVideos && getVideoDetailsFun();
  }, [video]);

  return (
    channelListVideos &&
    videoDetail && (
      <div className="flex flex-col md:flex-row p-5 gap-7">
        <div className="md:w-[65%] w-full">
          <VideoPlayer
            id={videoDetail && videoDetail[0]?.id}
            videoDetails={videoDetail && videoDetail[0]}
          />
        </div>
        <div className="md:w-[35%] w-full flex flex-col gap-2">
          <div>
            <p>hi</p>
          </div>

          <Suggestions videos={suggestedVideos} />
        </div>
      </div>
    )
  );
};

export default WatchList;
