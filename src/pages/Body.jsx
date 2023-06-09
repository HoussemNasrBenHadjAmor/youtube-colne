import { useLocation } from "react-router-dom";
import { fetchSearch } from "../lib/ApiFetch";
import { usefetchSearch } from "../lib/transtackReactQuery";
import { Videos, HomeLoader } from "../components";
import { channelCard, videoCard } from "../utils/Variables";

const Body = () => {
  let channelCardArray = [channelCard];
  let videoCardArray = new Array(49).fill(videoCard);

  let newArray = channelCardArray.concat(videoCardArray);

  const isLoading = false;

  // console.log("new Array", newArray);

  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";

  // const { data, error, isFetching, isLoading } = usefetchSearch(query, 50);

  // console.log("new results", results);
  return isLoading ? (
    <HomeLoader />
  ) : (
    <div>
      <Videos
        videos={newArray}
        // videos={results}
      />
    </div>
  );
};

export default Body;
