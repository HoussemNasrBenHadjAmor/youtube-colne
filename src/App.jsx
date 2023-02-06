import { Sidebar, Navbar, ErrorPage } from "./components";
import { Body, Watch } from "./pages";
import { useStateContext } from "./context/StateContextProvider";
import { Routes, Route } from "react-router-dom";

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
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/category/:id" element={<Body />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Body /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
