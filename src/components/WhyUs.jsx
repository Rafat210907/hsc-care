import { useEffect } from "react";
//import { MdOutlineDone } from "react-icons/md";
import ImgGIF from "../assets/Animationwhy.json";
import Aos from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";

const WhyUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="why-us" className="relative pt-5 mb-5">
      <div className=" max-width"
      data-aos="fade-up"
            data-aos-duration="1200"
      >
        <h6
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-lg sm:text-2xl text-center text-blue-400 mb-2"
        >
          Why Us
        </h6>
        <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-2xl sm:text-[36px] leading-tight text-center font-bold mb-4 sm:mb-8"
        >
         Why Choose HSC Care Coaching?{" "}
        </h2>
        <div className="mt-10 sm:mt-20 flex flex-col md:flex-row gap-10 md:gap-6 items-center justify-center">
          <div className="w-full">
            <Lottie
              className="w-4/5 mx-auto"
              animationData={ImgGIF}
            />
          </div>
          <div
              className="w-full space-y-8"
          >
            <div className="flex gap-3">
              <p className="text-dark text-[17px] w-full">
              We offer flexible scheduling and tailored study plans, accommodating individual learning styles and paces. With our supportive community and proven track record, students achieve their goals and excel in their academic journeys.Our experienced educators utilize innovative teaching methods and comprehensive resources, ensuring students grasp challenging concepts while building confidence and critical thinking skills essential for future success.
              </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
