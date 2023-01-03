import { Sidebar, Navbar } from "./components";
import { Body } from "./pages";
import { useStateContext } from "./context/StateContextProvider";

const App = () => {
  const { open } = useStateContext();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row my-5">
        <div className={`${!open ? "hidden" : "flex"}`}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;
