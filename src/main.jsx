import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Watch } from "./pages";
import { ErrorPage } from "./components";
import { StateContextProvider } from "./context/StateContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "category/:id",
        element: <App />,
      },

      {
        path: "watch/:id",
        element: <Watch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContextProvider>
  </React.StrictMode>
);
