import { createBrowserRouter } from "react-router-dom";
import ContactUsPage from "../pages/ContactUsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
