import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import ImgGIF from "../assets/Animation-about.json";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="about" className="sm:pt-32 relative mt-12">
      <h6
        className="text-3xl sm:text-4xl text-blue-400 flex relative items-start text-center justify-center"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        About Us
      </h6>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="max-width flex flex-col-reverse md:flex-row items-center justify-center mb-32 gap-10 sm:gap-6"
      >
        <div className="w-full" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
            <span className="text-primary">HSC CARE</span>
          </h2>
          <p className="text-[16px] text-dark text-justify mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            pariatur aspernatur consequatur! Possimus tempora architecto
            repudiandae praesentium et quam commodi adipisci sequi a.
          </p>
          <p className="text-[16px] text-dark text-justify mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            velit dolorem unde molestias consequuntur amet, deserunt modi,
            quibusdam cum itaque nulla fugit ea, laboriosam commodi provident
            incidunt impedit dolore quis!
          </p>
          <p className="text-[16px] text-dark text-justify mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            laborum amet porro velit, voluptas harum, hic quas quis sit dolore
            commodi aperiam. Corporis quis velit ut voluptates hic aliquam
            exercitationem, commodi autem nihil!
          </p>
          <div className="mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-secondary via-current to-primary p-0.5 rounded-[30px] inline-block py-3 hover:bg-gradient-to-l duration-500">
              <Link
                to="/contact"
                className="px-5 py-3 sm:py-[11px] bg-main rounded-[30px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Lottie className="w-4/5 mx-auto" animationData={ImgGIF} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
