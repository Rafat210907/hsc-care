import  { useState, useEffect } from "react";
import image1 from "../assets/tour/image-1.jpg";
import image2 from "../assets/tour/image-2.jpg";
import image3 from "../assets/tour/image-3.jpg";
import image4 from "../assets/tour/image-4.jpg";
import image5 from "../assets/tour/image-5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";



const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(true);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [current, isSliding]);



  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <section id="carousel" className="relative" data-aos='fade-left' data-aos-duration="1400">
    <div className="flex items-center justify-center mt-20 mb-20" >
      <div
        className="relative w-[1200px] h-[550px] bg-[#0c091a] border-[#0c091a] shadow-lg overflow-hidden"
        onMouseEnter={() => setIsSliding(false)}
        onMouseLeave={() => setIsSliding(true)}
      >
        <div className="relative h-[calc(100%-40px)] overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-transform duration-500 ${
                index === current
                  ? "translate-x-0"
                  : index > current
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <span
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-3xl text-white font-bold cursor-pointer hover:bg-[#ede6d6] hover:text-gray-800 px-4 py-2 rounded"
          onClick={prevSlide}
        >
          &#10094;
        </span>
        <span
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-3xl text-white font-bold cursor-pointer hover:bg-[#ede6d6] hover:text-gray-800 px-4 py-2 rounded"
          onClick={nextSlide}
        >
          &#10095;
        </span>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full border-2 border-[#1a1336] cursor-pointer transition-all ${
                current === index ? "bg-pink-600" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </section>

  );
};

export default Carousel;
