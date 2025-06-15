import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import ContactUsPage from "../Pages/ContactUsPage";
import AboutUsPage from "../Pages/AboutUsPage"
import OurTeachers from "../Pages/OurTeachers";
import WhyUs from "../Pages/WhyUs";
import Faq from "../Pages/Faq";
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
        path: "/carousel",
        element: <CarouselPage/>,
      },
       {
        path: "/aboutus",
        element: <AboutUsPage/>,
      },
      {
        path: "/ourteachers",
        element: <OurTeachers/>,
      },
      {
        path:"/whyus",
        element: <WhyUs/>
      },
      {
        path:"/Faq",
        element: <Faq/>
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