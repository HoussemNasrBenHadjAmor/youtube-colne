import { useStateContext } from "../context/StateContextProvider";
import { categories } from "../utils/constants";
import { NavItem } from "./";

const Sidebar = () => {
  const { open } = useStateContext();

  return (
    <div>
      <div
        className={`hidden h-full md:flex md:flex-col md:gap-2 md:h-screen transition-all duration-500 ${
          open ? "animate-closeMenu" : "animate-openMenu"
        }`}
      >
        {categories.map(({ name, Icon, path }) => (
          <NavItem name={name} Icon={Icon} path={path} key={path} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
