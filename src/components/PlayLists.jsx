import { useParams } from "react-router-dom";

import { useChannelPlaylist } from "../lib/transtackReactQuery";
import { PlayList, HomeLoader } from "../components";

const PlayLists = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useChannelPlaylist(id);

  return isLoading ? (
    <HomeLoader number={12} grid />
  ) : (
    <div className="flex flex-col gap-4">
      <p>Created playlists</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 gap-y-4">
        {data
          .filter((list) => list?.contentDetails?.itemCount)
          .map((list) => (
            <PlayList playList={list} key={list?.id} />
          ))}
      </div>
    </div>
  );
};

export default PlayLists;
