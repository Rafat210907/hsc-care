import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="pt-48 pb-4 relative">
      <div className="absolute inset-0 -z-20 h-full w-full items-center px-5 py-24 [background:radial-gradient(155%_125%_at_50%_10%,#030014_40%,#2b0331_100%)]"></div>
      <div className="max-width flex flex-wrap md:justify-between  gap-y-10 gap-x-6 md:gap-0 mb-12">
        <div className="md:w-1/4 text-center">
          <img className="w-28 mx-auto" src={logo} alt="" />
          <h2 className="text-xl text-white font-semibold my-2">
            HSC <span className="text-primary"> CARE</span>{" "}
          </h2>
          <p className="text-dark text-sm">
            Crypto Wave is committed to guiding our clients through the
            complexities of the crypto landscape with clarity and precision.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-white font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-[13px] sm:text-sm list-disc  px-4 text-dark">
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/">About Us</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/">Why Us</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/">Our Teachers</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl text-white font-semibold">Follow Us</h4>
          <div className="flex gap-4 mt-6">
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-black duration-300 p-2"
              to="https://www.facebook.com/profile.php?id=100063636052627"
              target="_blank"
            >
              <FaFacebook className="text-2xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-black duration-300 p-2"
              to="https://t.me/crypto_wave_ann"
              target="_blank"
            >
              <FaYoutube className="text-2xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-black duration-300 p-2"
              to="https://api.whatsapp.com/send?phone=%2B8801601912336"
              target="_blank"
            >
              <FaWhatsapp className="text-2xl " />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t border-dark/20">
        <p className="text-center text-[13px] text-dark">
          Copyright © 2024 HSC CARE | Developed By {""}
          <Link
            to="https://rafat-ahmed-portfolio.netlify.app/"
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
