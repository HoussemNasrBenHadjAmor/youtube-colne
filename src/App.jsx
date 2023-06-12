import { Sidebar, Navbar, ErrorPage, SideBarMobile } from "./components";
import { Body, Watch, Profile, WatchList, Results, Search } from "./pages";
import { useStateContext } from "./context/StateContextProvider";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { open } = useStateContext();

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div className="">
        <Navbar />
      </div>

      <div className="flex flex-col md:flex-row my-5 gap-7">
        <div className={`flex flex-row md:my-5 ${!open ? "hidden" : "flex"}`}>
          <Sidebar />
        </div>

        <div className="flex-1">
          <div className="md:hidden flex">
            <SideBarMobile />
          </div>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/category/:id" element={<Body />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/watch/list/:id" element={<WatchList />} />
            <Route path="/channel/:id/*" element={<Profile />} />
            <Route path="/results" element={<Results />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
