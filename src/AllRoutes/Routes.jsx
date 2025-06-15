import { createBrowserRouter } from "react-router-dom";
import ContactUsPage from "../Pages/ContactUsPage";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Layout from "./Layout";
import CarouselPage from "../Pages/CarouselPage";
import AboutUsPage from "../Pages/AboutUsPage"
import OurTeachers from "../Pages/OurTeachers";
import WhyUs from "../Pages/WhyUs";
import Faq from "../Pages/Faq";
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