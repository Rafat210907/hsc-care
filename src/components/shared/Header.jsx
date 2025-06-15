import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="max-w-[100%] fixed backdrop-blur-lg bg-transparent  border-b border-white/5 top-0 z-50 w-full">
      <div className="max-width flex h-16 sm:h-20 w-full justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="h-10 sm:h-14 hsc" src={logo} alt="Logo" />
            <h1 className="text-lg sm:text-2xl font-semibold">
              HSC <span className="text-white">CARE</span>
            </h1>
          </div>
        </Link>

        <nav>
          <ul
            className={
              isOpen ? "side-nav" : "nav-links  md:flex gap-x-10 text-[15px]"
            }
          >
            <NavLink to="/">
              <li
                className="md:hover:text-primary duration-300 mt-6 md:mt-0 text-[16px]"
                onClick={handleClose}
              >
                Home
              </li>
            </NavLink>

            <NavLink to="/#about">
              <li
                className="md:hover:text-primary duration-300 text-[16px]"
                onClick={handleClose}
              >
                About Us
              </li>
            </NavLink>
            <li
              className="md:hover:text-primary duration-300 text-[16px]"
              onClick={handleClose}
            >
              <NavLink to="/#why-us">Why Us</NavLink>
            </li>
            <li
              className="md:hover:text-primary duration-300 text-[16px]"
              onClick={handleClose}
            >
              <NavLink to="/#ourteachers">Our Teachers</NavLink>
            </li>

            <li
              className="md:hover:text-primary duration-300 text-[16px]"
              onClick={handleClose}
            >
              <NavLink to="/#ourteachers">
                <div className="min-[888px]:hidden">
                  <Link
                    to="/contact"
                    className="px-4 py-2 border-2 border-secondary hover:border-transparent hover:bg-blue-950 rounded-[30px] font-semibold  duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="max-[888px]:hidden">
        <Link to='/contact' className="px-4 py-2 border-2 border-secondary hover:border-transparent hover:bg-blue-950 rounded-[30px] font-semibold  duration-300 text-purple-800 ">Contact Us</Link>

        </div>
        <div
          className="md:hidden w-10 h-[35px] p-2  rounded-[4px] cursor-pointer flex justify-center items-center z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-navbar" : "navbar"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
