import { useLocation } from "react-router-dom";
import { usefetchSearch } from "../lib/transtackReactQuery";
import { useStateContext } from "../context/StateContextProvider";

import { Result, ResultsLoader, ErrorPage } from "../components";

const Results = () => {
  const { countryCode } = useStateContext();
  const { search } = useLocation();

  const indexSplit = search.includes("search_query=") && search.split("?");
  const searchString = indexSplit && indexSplit[1]?.slice(13);

  const { data, status, isLoading } = usefetchSearch(
    searchString,
    8,
    null,
    countryCode
  );

  return isLoading ? (
    <ResultsLoader number={15} />
  ) : status === "error" ? (
    <ErrorPage />
  ) : (
    <div className="p-5 flex gap-5 flex-col max-w-5xl mx-auto">
      {data?.map((item) => (
        <Result item={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Results;
