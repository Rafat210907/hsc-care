import { useState, useEffect, useRef } from "react";
import { teacherData } from "../constants/Index";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import PopCard from "./PopCard"; // Import the PopCard component

const Card = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [visibleCards, setVisibleCards] = useState(4); // Set initial visible cards to 4
  const [isSectionVisible, setIsSectionVisible] = useState(false); // To track if the section is in view
  const [isPopCardVisible, setIsPopCardVisible] = useState(false); // State for PopCard visibility
  const [selectedTeacher, setSelectedTeacher] = useState(null); // State for selected teacher data

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleShowMore = () => {
    setVisibleCards(teacherData.length);
  };

  const handleShowLess = () => {
    setVisibleCards(4);
  };

  const handlePopCardOpen = (teacher) => {
    setSelectedTeacher(teacher); // Set the selected teacher data
    setIsPopCardVisible(true); // Show the PopCard
  };

  const handlePopCardClose = () => {
    setIsPopCardVisible(false); // Hide the PopCard
    setSelectedTeacher(null); // Clear the selected teacher data
  };

  return (
    <section id="ourteachers" ref={sectionRef} className="relative pt-10">
      {/* Background content */}
      <div className={`${isPopCardVisible ? "filter blur-md" : "filter-none"}`}>
        <div className="max-width">
          <h6 className="text-2xl sm:text-3xl text-center text-blue-500">
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
            {teacherData.slice(0, visibleCards).map((data) => (
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
                {data?.Facebook && (
                  <Link to={data.Facebook}>
                    <FaFacebook className="text-lg size-10 p-2 mt-2 bg-slate-300 rounded-md text-black hover:bg-blue-900 hover:text-white duration-300" />
                  </Link>
                )}
                <button
                  onClick={() => handlePopCardOpen(data)} // Pass teacher data to open handler
                  className="p-4 mt-4 text-blue-300 border-2 rounded-xl border-blue-950 hover:bg-blue-950 hover:opacity-85"
                >
                  Click Here
                </button>
              </div>
            ))}
          </div>
          {isSectionVisible && (
            <div className="sticky bottom-4 mt-4 left-0 right-0 mx-auto text-center">
              {visibleCards < teacherData.length ? (
                <button
                  onClick={handleShowMore}
                  className="px-6 py-3 text-blue-500 hover:text-blue-700 font-bold border border-blue-500 rounded-md bg-transparent backdrop-blur-lg"
                >
                  Show More
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="px-6 py-3 text-blue-500 hover:text-blue-700 font-bold border border-blue-500 rounded-md bg-transparent backdrop-blur-md"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {/* PopCard modal */}
      {isPopCardVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <PopCard teacher={selectedTeacher} onClose={handlePopCardClose} />
        </div>
      )}
    </section>
  );
};

export default Card;
