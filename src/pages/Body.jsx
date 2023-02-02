import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearch } from "../lib/ApiFetch";
import { Videos } from "../components";
import { channelCard } from "../utils/Variables";

const Body = () => {
  let newArray = new Array(50).fill(channelCard);
  console.log("new Array", newArray);
  const [results, setResults] = useState([]);
  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";
  useEffect(() => {
    fetchSearch("javascript mastery").then(({ items }) => setResults(items));
  }, [query]);

  return (
    <div>
      <div>
        <Videos
          videos={results}
          // videos={newArray}
        />
      </div>
    </div>
  );
};

export default Body;
