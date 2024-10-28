import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg">
      <h1 className="text-black">Hi</h1>
    </div>
  );
};

export default Hero;
