import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../../App";
import { Cart } from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "my-cart",
      element: <Cart />,
      errorElement: <ErrorPage />,
    },
  ]);