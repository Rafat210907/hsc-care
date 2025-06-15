import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/* bg is displayed only on large screens */}
      <div className="bg">
        <h1 className="text-black"></h1>
      </div>
      
      {/* bgmd is displayed only on medium screens */}
      <div className="bgmd"></div>
      
      {/* bgm is displayed only on small screens */}
      <div className="bgm"></div>
    </div>
  );
};

export default Hero;

