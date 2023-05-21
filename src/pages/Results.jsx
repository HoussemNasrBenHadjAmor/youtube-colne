import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchSearch } from "../lib/ApiFetch";
import { Videos, Result } from "../components";
import { channelCard, videoCard } from "../utils/Variables";

const Results = () => {
  let channelCardArray = [channelCard];
  let videoCardArray = new Array(49).fill(videoCard);

  let newArray = channelCardArray.concat(videoCardArray);

  useState(() => {}, []);

  return (
    <div className="p-5 flex gap-5 flex-col max-w-5xl mx-auto">
      {newArray?.map((item) => (
        <Result item={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Results;
