import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <footer className="pt-16 pb-4 relative">
      <div className="absolute inset-0 -z-20 h-full w-full items-center px-5 py-24 "></div>
      <div className="max-width flex max-sm:flex-wrap md:justify-between  gap-y-12 gap-x-16 md:gap-0 mb-12">
        <div
          className="md:w-1/4 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img className="w-28 mx-auto" src={logo} alt="" />
          <h2 className="text-xl text-white font-semibold my-2">
            HSC <span className="text-primary"> CARE</span>{" "}
          </h2>
          <p className="text-dark text-md" data-aos-duration="900">
            <ion-icon name="location-sharp"></ion-icon> Dakbanglow Road,
            Balaganj, Sylhet Bangladesh
          </p>
          <br />
          <ion-icon name="mail-outline"></ion-icon>
          <p className="mb-5">hsccare.2021@gmail.com</p>
          <ion-icon name="call-outline"></ion-icon>
          <p>+880 1601-912336</p>
        </div>
        <div>
          <h4
            className="text-xl text-white font-semibold"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Quick Links
          </h4>
          <ul
            className="mt-4 space-y-3 text-[13px] sm:text-sm list-disc  px-4 text-dark"
           
          >
            <li className="hover:translate-x-3 hover:text-primary duration-200 text-[16px]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200 text-[16px]">
              <Link to="/#about">About Us</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200 text-[16px]">
              <Link to="/#why-us">Why Us</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200 text-[16px]">
              <Link to="/#ourteachers">Our Teachers</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200 text-[16px]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-xl text-white font-semibold"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Follow Us
          </h4>
          <div
            className="grid-flow-row gap-5 mt-5 "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-blue-400 duration-300"
              to="https://www.facebook.com/profile.php?id=100063636052627"
              target="_blank"
            >
              <FaFacebook className="text-3xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-red-600 duration-300"
              to="https://youtube.com/@hsccare2962"
              target="_blank"
            >
              <FaYoutube className="text-3xl mt-5" />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-green-600 duration-300"
              to="https://api.whatsapp.com/send?phone=%2B8801601912336"
              target="_blank"
            >
              <FaWhatsapp className="text-3xl mt-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t border-dark/20">
        <p className="text-center text-[13px] text-dark">
          Copyright © 2024 HSC CARE | <br /> Developed By {""}
          <Link
            to="https://guns.lol/zerox6968"
            target="_blank"
            className="text-blue-600"
          >
            Tahsan Ahmed Rafat
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
