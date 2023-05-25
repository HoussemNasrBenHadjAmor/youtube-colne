import { useLocation } from "react-router-dom";
import { categories } from "../utils/constants";
import { NavItem } from "./";

const SideBarMobile = () => {
  const { pathname } = useLocation();
  const pattern = ["channel", "search"];

  const isNotShownPath = pathname.match(
    new RegExp("\\b(" + pattern.join("|") + ")\\b", "ig")
  );

  return (
    !isNotShownPath && (
      <div className="md:hidden flex justify-center items-center overflow-auto flex-nowrap whitespace-nowrap">
        <div className="md:hidden w-full flex py-4">
          {categories.map(({ name, Icon, path }) => (
            <NavItem name={name} Icon={Icon} path={path} key={path} />
          ))}
        </div>
      </div>
    )
  );
};

export default SideBarMobile;
