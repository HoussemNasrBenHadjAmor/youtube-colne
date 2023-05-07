import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  getChannelDetails,
  getChannelPlaylist,
  getChannelVideos,
} from "../lib/ApiFetch";

const Profile = () => {
  const [channel, setChannel] = useState(null);
  const [playList, setPlayList] = useState(null);
  const [videos, setVideos] = useState(null);

  const idChannel = useParams()?.id;

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
    getChannel();
    ChannelPlaylist();
    ChannelVideos();
  }, [idChannel]);

  return (
    <div>
      <p>profile</p>
    </div>
  );
};

export default Profile;
