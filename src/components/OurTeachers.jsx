import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { teacherData } from "../constants/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";




const OurTeachers = () => {
  const [typeEffect] = useTypewriter({
    words: ["eachers"],
    loop: {},
    typeSpeed: 100,
  });
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="ourteachers" className="relative mb-2 pt-14 sm:pt-20">
      <div className="max-width">
        <h6
          data-aos=""
          data-aos-duration="800"
          className="text-2xl sm:text-3xl text-center text-blue-500 "
        >
          {" "}
          T{typeEffect}{" "}
        </h6>
        <h2
          data-aos="fade-up"
          data-aos-duration="300"
          className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8"
        >
          Meet Our Teachers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teacherData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              key={data.id}
              className="p-10 bg-[#110d2ed0] rounded-xl flex flex-col justify-center items-center"
            >
              <div className="size-42 bg-dark overflow-hidden rounded-xl">
                <img src={data.img} className="w-full" alt="Team Member" />
              </div>
              <h2 className="text-xl text-center text-blue-400 font-bold mt-3">
                {data.name}
              </h2>
              <h6 className="text-xl text-dark">{data.profession}</h6>
              <h2  className="text-sm text-primary">{data.qualificaions1}</h2>
              <h2 className="text-lg text-primary">{data.qualificaions2}</h2> 
              <Link to={data?.Facebook}>
                <FaFacebook className="text-lg size-10 p-2 mt-2 bg-slate-300 rounded-md text-black hover:bg-blue-900 hover:text-white duration-300"/>
              </Link>                           
              <h2 className="text-xl text-primary">{data.qualificaions}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
