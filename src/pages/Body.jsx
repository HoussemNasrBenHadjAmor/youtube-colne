import { useLocation } from "react-router-dom";
import { usefetchSearch } from "../lib/transtackReactQuery";

import { Videos, HomeLoader, ErrorPage } from "../components";

const Body = () => {
  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";

  const { data, status, isLoading } = usefetchSearch(query, 50);

  return isLoading ? (
    <HomeLoader grid />
  ) : status === "error" ? (
    <ErrorPage />
  ) : (
    <div>
      <Videos videos={data} />
    </div>
  );
};

export default Body;
