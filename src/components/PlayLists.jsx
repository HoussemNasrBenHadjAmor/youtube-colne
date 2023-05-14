import { useEffect, useState } from "react";

import { getChannelPlaylist } from "../lib/ApiFetch";

const PlayLists = () => {
  const [playList, setPlayList] = useState(null);

  const fetchPlayList = async () => {
    try {
      const data = await getChannelPlaylist().then((data) => setPlayList(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchPlayList()
  }, []);

  return (
    <div>
      <p>PlayLists</p>
    </div>
  );
};

export default PlayLists;
