import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContextProvider";
import { logo } from "../utils/constants";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ isDark }) => {
  const { hideShow } = useStateContext();

  return (
    <div className="flex flex-row items-center justify-between p-3 px-5">
      <div className="flex flex-row gap-4 items-center">
        <button onClick={hideShow} className="hidden md:flex">
          <Bars3Icon className="w-6" />
        </button>
        <Link to="/">
          <img src={logo} alt="you-logo" className="w-10" />
        </Link>
      </div>

      <div className="gap-2 bg-[#212121] rounded-lg p-1 px-3 hidden md:flex w-full">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
        <MagnifyingGlassIcon className="w-6 cursor-pointer" />
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex md:hidden">
          <MagnifyingGlassIcon className="md:w-6 w-5 cursor-pointer" />
        </div>
        <button>
          {isDark ? (
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
