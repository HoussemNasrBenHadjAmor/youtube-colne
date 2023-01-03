import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider>
      <RouterProvider router={router} />
    </StateContextProvider>
  </React.StrictMode>
);
