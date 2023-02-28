import { categories } from "../utils/constants";
import { NavItem } from "./";

const Sidebar = () => {
  return (
    <div>
      <div className="hidden md:flex md:flex-col md:gap-2 md:h-screen">
        {categories.map(({ name, Icon, path }) => (
          <NavItem name={name} Icon={Icon} path={path} key={path} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
