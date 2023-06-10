import { useParams } from "react-router-dom";

import {
  useChannelPlayListItems,
  useVideoDetails,
  useRelatedVideo,
} from "../lib/transtackReactQuery";
import {
  suggestedVideo,
  videoDetails,
  playListVideos,
  PlayListItemVideos,
} from "../utils/Variables";
import {
  VideoPlayer,
  Suggestions,
  PlayListItems,
  WatchLoader,
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

  const isLoading = false;

  // const { data: playListItemsData, error: playListItemsError } =
  //   useChannelPlayListItems(idList);

  // const videoIndex =
  //   playListItemsData && playListItemsData?.length < index ? 0 : index;

  // const video = playListItemsData && playListItemsData[videoIndex];

  // const { data: videoDetailsData, error: videoDetailsError } = useVideoDetails(
  //   video?.contentDetails?.videoId
  // );

  // const { data: relatedVideoData, error: relatedVideoError } = useRelatedVideo(
  //   video?.contentDetails?.videoId
  // );

  const suggestedVideos = new Array(15).fill(suggestedVideo);
  const temporaryId = "9DDX3US3kss";

  return (
    // playListItemsData &&
    // videoDetailsData && (

    isLoading ? (
      <WatchLoader />
    ) : (
      <div className="flex flex-col lg:flex-row p-5 gap-7">
        <div className="lg:w-[65%] w-full">
          <VideoPlayer
            id={temporaryId}
            videoDetails={videoDetails}
            // id={videoDetailsData && videoDetailsData[0]?.id}
            // videoDetails={videoDetailsData && videoDetailsData[0]}
          />
        </div>
        <div className="lg:w-[35%] w-full flex flex-col gap-5">
          <div>
            <PlayListItems
              videos={PlayListItemVideos}
              // videos={playListItemsData}
            />
          </div>

          <Suggestions
            // videos={relatedVideoData && relatedVideoData}
            videos={suggestedVideos}
          />
        </div>
      </div>
    )
    // )
  );
};

export default WatchList;
