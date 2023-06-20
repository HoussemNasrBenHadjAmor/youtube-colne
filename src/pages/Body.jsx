import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usefetchSearch } from "../lib/transtackReactQuery";
import { fetchSearch, fetchMovies } from "../lib/ApiFetch";

import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Videos, HomeLoader, ErrorPage } from "../components";
import { useStateContext } from "../context/StateContextProvider";

const Body = ({ country }) => {
  const { pathname } = useLocation();
  const query = pathname.slice(10).length ? pathname.slice(10) : "new";
  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(false);
  // const [data, setData] = useState([]);
  // const [status, setStatus] = useState("");

  const { data, status, isLoading } = usefetchSearch(query, 1, "date", country);
  // const Test = ({ data }) => {
  //   {
  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-5">
  //       {data?.map((movie) => (
  //         <div>
  //           <img
  //             src={movie?.backdrop_path}
  //             alt="movie"
  //             className="w-full h-full object-cover"
  //           />
  //           <p> {movie?.title} </p>
  //         </div>
  //       ))}
  //     </div>;
  //   }
  // };

  // console.log("hasMore", hasMore);

  // const fetchSearchFun = async (page) => {
  //   await fetchMovies(page)
  //     .then((response) => {
  //       // setData(response);
  //       // setData((prev) => [...prev, response?.results?.map((r) => r)]);
  //       setData((prev) => {
  //         return [...prev, response?.results?.map((r) => r)];
  //       });
  //       setPage(page + 1);
  //       if (parseInt(response?.total_pages) > page) {
  //         setHasMore(true);
  //       } else {
  //         setHasMore(false);
  //       }
  //     })
  //     .catch((err) => {
  //       setStatus("error");
  //     })
  //     .finally(() => {
  //       setStatus("error");
  //     });
  // };

  // const fetchSearchFun = async (query, number) => {
  //   await fetchSearch(query, number)
  //     .then(({ items }) => {
  //       // setData(...data, items);
  //       // setData((prev) => ({
  //       //   ...prev,
  //       //   items,
  //       // }));
  //       setData({ ...data, items });
  //     })
  //     .catch(() => {
  //       setStatus("error");
  //     });
  // };

  // const fetchSearchFun = async () => {
  //   await fetchMovies()
  //     .then(({ results }) => {
  //       setData({ ...data, results });
  //       // setData((prev) => ({
  //       //   ...prev,
  //       //   prev: results,
  //       // }));
  //     })
  //     .catch(() => {
  //       setStatus("error");
  //     });
  // };
  // console.log("data", data);

  const isError = status === "error";

  return isLoading ? (
    <HomeLoader grid />
  ) : isError ? (
    <ErrorPage />
  ) : (
    <Videos videos={data} />
  );
  // return isError ? (
  //   <ErrorPage />
  // ) : (
  //   <div>
  //     <InfiniteScroll
  //       // loadMore={fetchSearchFun(query, 10)}
  //       pageStart={0}
  //       initialLoad={true}
  //       hasMore={hasMore}
  //       loader={<HomeLoader grid key={0} />}
  //       loadMore={fetchSearchFun(page)}
  //       // dataLength={20}
  //       // next={fetchSearchFun(page)}
  //       // hasMore={hasMore}
  //       // loader={<HomeLoader grid key={0} />}
  //     >
  //       {/* <Videos videos={data?.items} /> */}
  //       <Test data={data?.response?.results} />
  //     </InfiniteScroll>
  //   </div>
  //   // <div>hi</div>
  // );
};

export default Body;
