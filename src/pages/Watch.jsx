import { useLocation } from "react-router-dom";
import { useRelatedVideo, useVideoDetails } from "../lib/transtackReactQuery";

import {
  VideoPlayer,
  Suggestions,
  WatchLoader,
  ErrorPage,
} from "../components";

const Watch = () => {
  const { search } = useLocation();

  const indexSplit = search.includes("v=") && search.split("?");
  const id = indexSplit ? indexSplit[1]?.slice(2) : undefined;

  const {
    data: videoDetails,
    status: statusVD,
    isLoading: isLoadingVD,
  } = useVideoDetails(id);

  const {
    data: suggestedVideos,
    status: statusSV,
    isLoading: isLoadingSV,
  } = useRelatedVideo(id);

  const isLoading = isLoadingSV && isLoadingVD;
  const isError = statusVD === "error" || statusSV === "error" || !id;

  return isLoading ? (
    <WatchLoader />
  ) : isError ? (
    <ErrorPage />
  ) : (
    <div className="flex flex-col md:flex-row pt-5 gap-7">
      <div className="lg:w-[65%] w-full md:px-5">
        <VideoPlayer id={id} videoDetails={videoDetails[0]} />
      </div>
      <div className="lg:w-[35%] w-full px-5">
        <Suggestions videos={suggestedVideos} />
      </div>
    </div>
  );
};

export default Watch;
