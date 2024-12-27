import { teacherData } from "../constants/Index"; // Ensure teacherData is imported correctly
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const TeacherCard = () => {
  // Initialize AOS for animations
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="ourteachers" className="relative mb-2 pt-10">
      <div className="max-width">
        <h6
          className="text-2xl sm:text-3xl text-center text-blue-500"
        >
          Teachers
        </h6>
        <h2
          data-aos="fade-up"
          data-aos-duration="300"
          className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8"
        >
          Meet Our Teachers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Map through the teacherData to dynamically render cards */}
          {teacherData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-duration="1200"
              className="p-10 bg-[#110d2ed0] rounded-xl flex flex-col justify-center items-center"
            >
              <div className="size-42 bg-dark overflow-hidden rounded-xl">
                <img src={data.img} className="w-full" alt="Team Member" />
              </div>
              <h2 className="text-xl text-center text-blue-400 font-bold mt-3">
                {data.name}
              </h2>
              <h6 className="text-xl text-dark">{data.profession}</h6>
              <h2
                dangerouslySetInnerHTML={{ __html: data.qualifications }}
                className="text-xl text-primary align-center text-center mt-2"
              />
              <h2
                dangerouslySetInnerHTML={{ __html: data.institution }}
                className="text-xl text-primary mt-2"
              />
              {/* Conditionally render the Facebook icon only if the Facebook link exists */}
              {data?.Facebook && (
                <Link to={data.Facebook}>
                  <FaFacebook className="text-lg size-10 p-2 mt-2 bg-slate-300 rounded-md text-black hover:bg-blue-900 hover:text-white duration-300" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherCard;
