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

  //*need to fix the id
  const id = search.slice(3);

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
  const isError = statusVD === "error" || statusSV === "error";

  return isLoading ? (
    <WatchLoader />
  ) : isError ? (
    <ErrorPage />
  ) : (
    <div className="flex flex-col md:flex-row p-5 gap-7">
      <div className="lg:w-[65%] w-full">
        <VideoPlayer id={id} videoDetails={videoDetails[0]} />
      </div>
      <div className="lg:w-[35%] w-full">
        <Suggestions videos={suggestedVideos} />
      </div>
    </div>
  );
};

export default Watch;
