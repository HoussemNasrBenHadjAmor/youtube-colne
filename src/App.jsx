import { Sidebar, Navbar } from "./components";
import { Body } from "./pages";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default App;
