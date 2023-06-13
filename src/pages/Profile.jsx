import { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import {
  useChannelDetails,
  useChannelVideos,
} from "../lib/transtackReactQuery";

import {
  Banner,
  Videos,
  NavigateBar,
  PlayLists,
  About,
  ErrorPage,
  ProfileHomeLoader,
} from "../components";

const Profile = () => {
  const idChannel = useParams()?.id;
  const [photo, setPhoto] = useState(null);

  const {
    data: channelDetails,
    status: statusChannel,
    isLoading: isLoadingCD,
  } = useChannelDetails(idChannel);

  const {
    data: CVideos,
    status: statusVideos,
    isLoading: isLoadingCVideos,
  } = useChannelVideos(idChannel);

  const isLoading = isLoadingCD && isLoadingCVideos;
  const isError = statusChannel === "error" || statusVideos === "error";

  const CoverPhoto = () => (
    <img
      src={photo?.brandingSettings?.image?.bannerExternalUrl}
      alt="banner_profile_image"
      className="w-full h-24 sm:h-32 md:h-56 object-cover"
    />
  );

  useEffect(() => {
    channelDetails && setPhoto(channelDetails[0]);
  }, [channelDetails]);

  return isLoading && !channelDetails && !CVideos ? (
    <ProfileHomeLoader />
  ) : isError ? (
    <ErrorPage />
  ) : (
    <div className="flex flex-col gap-10 min-h-screen">
      <CoverPhoto />

      <div className="max-w-5xl mx-auto flex flex-col w-full gap-10">
        <Banner channelDetails={channelDetails} idChannel={idChannel} />

        <div className="px-5 gap-5 flex flex-col">
          <NavigateBar id={idChannel} />

          <Routes>
            <Route path="/" element={<Videos videos={CVideos} noPadding />} />
            <Route path="/playlists" element={<PlayLists />} />
            <Route
              path="/about"
              element={
                <About
                  description={channelDetails[0]?.snippet?.description}
                  join={channelDetails[0]?.snippet?.publishedAt}
                  views={channelDetails[0]?.statistics?.viewCount}
                  location={channelDetails[0]?.snippet?.country}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
