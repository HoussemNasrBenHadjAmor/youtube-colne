import { useParams } from "react-router-dom";

import {
  useChannelPlayListItems,
  useVideoDetails,
  useRelatedVideo,
} from "../lib/transtackReactQuery";

import {
  VideoPlayer,
  Suggestions,
  PlayListItems,
  WatchLoader,
  ErrorPage,
} from "../components";
import { isNumber, filterId } from "../utils/functions";

const WatchList = () => {
  const { id } = useParams();

  const indexSplit = id.includes("index=") && id.split("&");
  const indexLength = indexSplit && indexSplit[1]?.slice(6);
  const index = indexLength ? (isNumber(indexLength) ? indexLength : 0) : 0;

  const idList = id.includes("index")
    ? filterId(id.slice(0, id.indexOf("index")))
    : id;

  const {
    data: playListItemsData,
    status: playListItemsStatus,
    isLoading: playListItemsLoading,
  } = useChannelPlayListItems(idList);

  const videoIndex =
    playListItemsData && playListItemsData?.length < index ? 0 : index;

  const video = playListItemsData && playListItemsData[videoIndex];

  const {
    data: videoDetailsData,
    status: videoDetailsStatus,
    isLoading: videoDetailsLoading,
  } = useVideoDetails(video?.contentDetails?.videoId);

  const {
    data: relatedVideoData,
    status: relatedVideoStatus,
    isLoading: relatedVideoLoading,
  } = useRelatedVideo(video?.contentDetails?.videoId);

  const isError =
    playListItemsStatus === "error" ||
    videoDetailsStatus === "error" ||
    relatedVideoStatus === "error";

  const isLoading =
    relatedVideoLoading && videoDetailsLoading && playListItemsLoading;

  return isLoading ? (
    <WatchLoader />
  ) : isError ? (
    <ErrorPage />
  ) : (
    videoDetailsData &&
    relatedVideoData && (
      <div className="flex flex-col lg:flex-row p-5 gap-7">
        <div className="lg:w-[65%] w-full">
          <VideoPlayer
            id={videoDetailsData && videoDetailsData[0]?.id}
            videoDetails={videoDetailsData && videoDetailsData[0]}
          />
        </div>
        <div className="lg:w-[35%] w-full flex flex-col gap-5">
          <div>
            <PlayListItems videos={playListItemsData} index={videoIndex} />
          </div>

          <Suggestions videos={relatedVideoData && relatedVideoData} />
        </div>
      </div>
    )
  );
  // )
};

export default WatchList;
