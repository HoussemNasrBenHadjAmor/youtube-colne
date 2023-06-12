import { useLocation, Link } from "react-router-dom";
import { useStateContext } from "../context/StateContextProvider";

const NavItem = ({ name, Icon, path }) => {
  const { hideShow } = useStateContext();
  const { pathname } = useLocation();
  const isPath = pathname === path;
  const mobileView = screen.width < 768;

  return (
    <div className="px-3 w-full">
      <Link
        onClick={() => mobileView && hideShow()}
        to={path}
        className={`flex flex-row items-center gap-5 p-1 px-2 ${
          isPath &&
          "font-semibold bg-gray-100 dark:bg-[#3d3d3d] rounded-lg px-4"
        }`}
      >
        <span>
          <Icon className={`w-5 h-5 ${isPath && "font-semibold"}`} />
        </span>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default NavItem;
