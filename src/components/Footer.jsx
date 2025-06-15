import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-dark/20 bg-black py-4">
      <p className="text-center text-[13px] text-dark">
        Copyright © 2025 HSC CARE <br /> Developed By{" "}
        <Link
          to="https://guns.lol/zerox6968"
          target="_blank"
          className="text-blue-600"
          rel="noopener noreferrer"
        >
          Tahsan Ahmed Rafat
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
