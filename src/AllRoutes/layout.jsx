import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Layout = () => {
  return (
    <>
      <div className="h-20 mb-10">
        <Header />
      </div>
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;
