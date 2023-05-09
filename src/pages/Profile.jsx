import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Banner, Videos, NavigateBar } from "../components";
import {
  getChannelDetails,
  getChannelPlaylist,
  getChannelVideos,
} from "../lib/ApiFetch";
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

  const fetchFromApi = async () => {
    try {
      //here we're gonna fetch all the three needed api : getChannelDetails, getChannelPlaylist and getChannelVideos and we're gonna do it sync. Meaning just one fetch and that's it.
    } catch (error) {
      return error;
    }
  };

  const getChannel = async () => {
    const data = await getChannelDetails(idChannel);

    setChannel(data);
  };

  const ChannelPlaylist = async () => {
    const data = await getChannelPlaylist(idChannel);
    setPlayList(data);
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

        <Videos videos={videoCardArray} />

        <div>videos</div>
      </div>
    </div>
  );
};

export default Profile;
