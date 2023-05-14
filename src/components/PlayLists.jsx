import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getChannelPlaylist } from "../lib/ApiFetch";
import { channelPlaylists } from "../utils/Variables";
import { PlayList } from "../components";

const PlayLists = () => {
  const { id } = useParams();
  const [playList, setPlayList] = useState(null);

  const fetchPlayList = async () => {
    try {
      const data = await getChannelPlaylist(id).then((data) =>
        setPlayList(data)
      );
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    // fetchPlayList();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-white">Created playlists</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-4 items-center justify-center">
        {channelPlaylists.map((list) => (
          <PlayList playList={list} key={list?.snippet?.publishedAt} />
        ))}
      </div>
    </div>
  );
};

export default PlayLists;
