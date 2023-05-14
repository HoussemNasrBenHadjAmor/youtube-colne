import { useState, useEffect } from "react";
import { useParams, Routes, Route } from "react-router-dom";

import {
  Banner,
  Videos,
  NavigateBar,
  PlayLists,
  About,
  ErrorPage,
} from "../components";
import { getChannelDetails, getChannelVideos } from "../lib/ApiFetch";
import { channelDetails, videoCard } from "../utils/Variables";

const Profile = () => {
  const [channel, setChannel] = useState(null);
  const [playList, setPlayList] = useState(null);
  const [videos, setVideos] = useState(null);

  const idChannel = useParams()?.id;

  let videoCardArray = new Array(49).fill(videoCard);

  const CoverPhoto = () => (
    <img
      src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
      alt="banner_profile_image"
      className="w-full h-24 sm:h-32 md:h-56 object-cover"
    />
  );

  const getChannel = async () => {
    const data = await getChannelDetails(idChannel);

    setChannel(data);
  };

  const ChannelVideos = async () => {
    const data = await getChannelVideos(idChannel);
    setVideos(data);
  };

  useEffect(() => {
    // getChannel();
    // ChannelPlaylist();
    // ChannelVideos();
  }, [idChannel]);

  return (
    <div className="flex flex-col gap-10">
      <CoverPhoto />

      <div className="max-w-5xl mx-auto flex flex-col w-full gap-10">
        <Banner channelDetails={channelDetails} idChannel={idChannel} />

        <div className="px-5">
          <NavigateBar id={idChannel} />
        </div>

        <Routes>
          <Route path="/" element={<Videos videos={videoCardArray} />} />
          <Route path="/playlists" element={<PlayLists />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
