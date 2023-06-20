import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StateContextProvider } from "./context/StateContextProvider";
import { Watch, Profile } from "./pages";
import { ErrorPage } from "./components";

const queryClient = new QueryClient();

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
        path: "channel/:id",
        element: <Profile />,
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
      <QueryClientProvider client={queryClient}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StateContextProvider>
  </React.StrictMode>
);
