import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usefetchSearch } from "../lib/transtackReactQuery";
import { fetchSearch } from "../lib/ApiFetch";

import InfiniteScroll from "react-infinite-scroller";
import { Videos, HomeLoader, ErrorPage } from "../components";

const Body = () => {
  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";

  // const { data, status, isLoading } = usefetchSearch(query, 1);

  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  const fetchSearchFun = async (query, number) => {
    await fetchSearch(query, number)
      .then(({ items }) => {
        setData(...data, items);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const isError = status === "error";

  console.log("data", data);

  // return isLoading ? (
  //   <HomeLoader grid />
  // ) : status === "error" ? (
  //   <ErrorPage />
  // ) : (
  //   <div>
  //     <Videos videos={data} />
  //   </div>
  // );
  return isError ? (
    <ErrorPage />
  ) : (
    <div>
      <InfiniteScroll
        loadMore={fetchSearchFun(query, 2)}
        hasMore={true}
        loader={<HomeLoader grid key={0} />}
        initialLoad={true}
      >
        <Videos videos={data} />
      </InfiniteScroll>
    </div>
  );
};

export default Body;
