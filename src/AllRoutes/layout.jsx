import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => {
  return (
    <>
      <div className="h-20 mb-10">
        <Header />
        </div>
         <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;