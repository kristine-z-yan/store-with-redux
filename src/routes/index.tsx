import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CartPage } from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "my-cart",
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
]);
