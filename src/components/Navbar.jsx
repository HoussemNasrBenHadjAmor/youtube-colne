import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContextProvider";
import { useDebounce } from "use-debounce";

import { logo } from "../utils/constants";
import { searchResults } from "../utils/Variables";
import { fetchSearch } from "../lib/ApiFetch";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { hideShow, toggleMode, theme } = useStateContext();
  const [search, setSearch] = useState("");
  const [searchDetails, setSearchDetails] = useState(null);
  const [searchValue] = useDebounce(search, 2000);
  const [show, setShow] = useState(false);
  const divRef = useRef();
  const navigate = useNavigate();

  const Results = ({ data }) => {
    return (
      <div className="absolute z-50 pt-3 pb-3 top-11 left-0 right-0 rounded-md bg-light_mode dark:bg-bg_search_dark shadow-bg_zinc shadow-md">
        {data?.map((d) => (
          <Link
            to={`/results?search_query=${searchValue
              ?.trim()
              ?.replace(/\s+/g, "+")
              ?.toLocaleLowerCase()}`}
            onClick={() => setShow(false)}
            key={d?.id?.videoId}
          >
            <div className="px-3 p-2 text-sm dark:hover:bg-bg_zinc hover:bg-gray-100 duration-200 ease-out">
              <p>{d?.snippet?.title?.toLowerCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  const handleClickOutside = (e) => {
    if (!divRef.current.contains(e.target)) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const getSearch = async () => {
    try {
      await fetchSearch(searchValue, 8).then(({ items }) =>
        setSearchDetails(items)
      );
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, [divRef]);

  useEffect(() => {
    // searchValue && getSearch();
    if (searchValue === "") {
      // setSearchDetails(null);
    }
  }, [searchValue, search]);

  return (
    <div className="flex items-center justify-between p-3 px-5 relative">
      <div className="flex justify-center gap-4 items-center">
        <button onClick={hideShow} className="hidden md:flex">
          <Bars3Icon className="w-6 h-6" />
        </button>

        <Link to="/">
          <img src={logo} alt="you-logo" className="w-10 h-10" />
        </Link>
      </div>

      <div
        className="gap-2 border-[1px] dark:border-0 dark:bg-[#212121] rounded-lg px-3 hidden md:flex w-full md:max-w-lg relative items-center"
        ref={divRef}
      >
        {searchValue && show && <Results data={searchResults} />}

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full border-none focus:ring-0"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <MagnifyingGlassIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            navigate(
              `/results?search_query=${searchValue
                ?.trim()
                ?.replace(/\s+/g, "+")
                ?.toLocaleLowerCase()}`
            );
            setShow(false);
          }}
        />
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex md:hidden">
          <MagnifyingGlassIcon
            className="md:w-6 w-5 cursor-pointer"
            onClick={() => navigate("/search")}
          />
        </div>

        <button onClick={() => toggleMode()}>
          {theme ? (
            <SunIcon className="md:w-6 w-5" />
          ) : (
            <MoonIcon className="md:w-6 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
