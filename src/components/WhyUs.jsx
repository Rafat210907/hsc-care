import { useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";
import ImgGIF from "../assets/Animationwhy.json"
import Aos from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";


const WhyUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="why-us" className="pt-20 sm:pt-32 relative">
      <div className=" max-width">
        <h6  data-aos='fade-up' data-aos-duration="600" className="text-lg sm:text-2xl text-center text-secondary mb-2">
          Why Us
        </h6>
        <h2  data-aos='fade-up' data-aos-duration="600" className="text-2xl sm:text-[36px] leading-tight text-center font-bold mb-4 sm:mb-8">
          Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit, amet consectetur adipisicing.{" "}
        </h2>
        <div className="mt-10 sm:mt-20 flex flex-col md:flex-row gap-10 md:gap-6 items-center justify-center">
          <div className="w-full">
          <Lottie data-aos='fade-right' data-aos-duration="1400" className="w-4/5 mx-auto" animationData={ImgGIF}/>
        </div>
          <div data-aos='fade-up' data-aos-duration="800" className="w-full space-y-8">
            <div className="flex gap-3">
              <MdOutlineDone className="text-white translate-y-2 bg-secondary size-7 p-[1.8px] rounded-full" />
              <p className="text-dark text-[17px] w-full">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum reiciendis repellendus magnam fugit ab odio totam optio ducimus cumque deserunt.
              </p>
            </div>
            <div className="flex gap-3">
              <MdOutlineDone className="text-white translate-y-2 bg-secondary size-7 p-[1.8px] rounded-full" />
              <p className="text-dark text-[17px] w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae suscipit harum. Iure maiores numquam velit ducimus explicabo illo amet animi minus suscipit cupiditate. Assumenda.
              </p>
            </div>
            <div className="flex gap-3">
              <MdOutlineDone className="text-white translate-y-2 bg-secondary size-7 p-[1.8px] rounded-full" />
              <p className="text-dark text-[17px] w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur saepe corporis possimus sunt expedita debitis libero harum illo, modi id impedit vero autem dicta hic temporibus officiis minima? Omnis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
