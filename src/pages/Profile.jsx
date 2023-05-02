import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getChannelDetails, getChannelDetailsBySearch } from "../lib/ApiFetch";

const Profile = () => {
  const [channel, setChannel] = useState(null);

  const idChannel = useParams()?.id?.slice(1);

  const getChannel = async () => {
    const data = await getChannelDetailsBySearch(idChannel);

    setChannel(data);
  };

  useEffect(() => {
    getChannel();
  }, []);

  console.log("channel", channel);

  return (
    <div>
      <p>profile</p>
    </div>
  );
};

export default Profile;
