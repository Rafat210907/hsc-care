import React from "react";
//import { MdOutlineDone } from "react-icons/md";
import ImgGIF from "../assets/Animationwhy.json";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BoxReveal } from "@/components/magicui/BoxReveal";
import { BorderBeam } from "@/components/magicui/BorderBeam";
import 'boxicons/css/boxicons.min.css';


const WhyUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="why-us" className="relative ">
      <div className=" max-width pb-10"
      >
        <h2
          className="text-2xl sm:text-[36px] leading-tight text-center font-bold mb-4 "
        >
         "Why Will You Choose HSC Care Coaching?"{" "}
        </h2>
        <div className=" ml-3 lg:ml-24 lg:mr-24 flex flex-col md:flex-row  items-center justify-center">
          <div className="w-full">
            <Lottie
              className="w-3/4 mx-auto"
              animationData={ImgGIF}
            />
          </div>
          <div
              className="w-full space-y-2"
          >
            <div className="flex gap-3">
              <p className="text-dark text-[17px] w-full">
              We offer flexible scheduling and tailored study plans, accommodating individual learning styles and paces. With our supportive community and proven track record, students achieve their goals and excel in their academic journeys.Our experienced educators utilize innovative teaching methods and comprehensive resources, ensuring students grasp challenging concepts while building confidence and critical thinking skills essential for future success.
              </p>
              </div>
              {/* Buttons */}
{loading ? (
  <div className="flex gap-4 mt-12">
    <Skeleton className="h-[40px] w-[160px] rounded-full" />
  </div>
) : (
  <BoxReveal>
    <div className="flex gap-6">
      {/* Documentation Button with Beam */}
      <a
        href="/"
        className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2a2a2a] font-semibold tracking-wide text-sm sm:text-lg transition-colors duration-300 hover:bg-[#1a1a1a] overflow-hidden"
      >
        {/* Beam container */}
        <BorderBeam
          duration={5}
          size={80}
          className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent"
          style={{ borderRadius: '9999px' }}
        />
        <span className="relative flex items-center gap-2 text-white z-10">
          Home <i className="bx bx-link-external"></i>
        </span>
      </a>

    </div>
  </BoxReveal>
)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;


      // <a
      //   href="/contact"
      //   className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2a2a2a] font-semibold tracking-wide text-sm sm:text-lg transition-colors duration-300 hover:bg-[#1a1a1a] overflow-hidden"
      // >
      //   {/* Beam container */}
      //   <BorderBeam
      //     duration={5}
      //     size={80}
      //     className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent"
      //     style={{ borderRadius: '9999px' }}
      //   />
      //   <span className="relative flex items-center gap-2 text-white z-10">
      //     FAQ <i className="bx bx-link-external"></i>
      //   </span>
      // </a>