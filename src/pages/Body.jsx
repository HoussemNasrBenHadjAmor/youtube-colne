import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearch } from "../lib/ApiFetch";
import { Videos } from "../components";

const Body = () => {
  const [results, setResults] = useState([]);
  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";
  console.log(results);
  useEffect(() => {
    fetchSearch("javascript mastery").then(({ items }) => setResults(items));
  }, [query]);

  return (
    <div>
      <div>
        <Videos videos={results} />
      </div>
    </div>
  );
};

export default Body;
