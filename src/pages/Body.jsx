import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearch } from "../lib/ApiFetch";
import { Videos } from "../components";
import { channelCard, videoCard } from "../utils/Variables";

const Body = () => {
  let channelCardArray = [channelCard];
  let videoCardArray = new Array(49).fill(videoCard);

  let newArray = channelCardArray.concat(videoCardArray);

  console.log("new Array", newArray);

  const [results, setResults] = useState([]);
  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";
  console.log("new results", results);
  useEffect(() => {
    // fetchSearch("javascript mastery").then(({ items }) => setResults(items));
  }, [query]);

  return (
    <div>
      <div>
        <Videos
          videos={newArray}
          // videos={newArray}
        />
      </div>
    </div>
  );
};

export default Body;
