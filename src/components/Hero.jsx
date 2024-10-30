import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
  <div>
     <div className="bg">
      <h1 className="text-black"></h1>
    </div>
    <div className="bgm"></div>
  </div>
   
  );
};

export default Hero;
