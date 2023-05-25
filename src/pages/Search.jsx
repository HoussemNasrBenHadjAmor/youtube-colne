import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

import { searchResults } from "../utils/Variables";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchValue] = useDebounce(search, 2000);

  return (
    <div className="absolute inset-0 w-full bg-[#181818] h-screen p-3 flex flex-col gap-3">
      <div className="flex gap-2 place-items-start">
        <ChevronLeftIcon className="w-8" onClick={() => navigate("/")} />

        <div className="w-full">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none rounded-full w-full bg-neutral-800 p-1 px-2 text-sm text-white"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          {searchValue && (
            <div className="flex flex-col gap-4 text-sm pt-5">
              {searchResults?.map((item) => (
                <Link
                  to={`/results?search_query=${searchValue
                    ?.trim()
                    ?.replace(/\s+/g, "+")
                    ?.toLocaleLowerCase()}`}
                  key={`${item?.snippet?.title}`}
                >
                  <div className="flex gap-3 items-center">
                    <p>{item?.snippet?.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
