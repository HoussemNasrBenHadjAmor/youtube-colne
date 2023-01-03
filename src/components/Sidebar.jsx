import { categories } from "../utils/constants";
import { NavItem } from "./";

const Sidebar = () => {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-2 h-screen">
      {categories.map(({ name, Icon, path }) => (
        <NavItem name={name} Icon={Icon} path={path} key={path} />
      ))}
    </div>
  );
};

export default Sidebar;
