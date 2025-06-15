import React, { useState } from "react";
import { BorderBeam } from "@/components/magicui/BorderBeam";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AnimatedBeam } from '@/components/magicui/AnimatedBeam'
import { useEffect } from "react";

// Your PopCard component (popup detail modal)
const PopCard = ({ teacher, onClose }) => {

  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 800); // simulate loading
  return () => clearTimeout(timer);
}, []);



  if (!teacher) return null;

return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl z-50">
    <div className="h-auto w-[90%] md:w-[770px] rounded-lg p-6 relative md:backdrop-blur-xl bg-[#02020c] text-white">
      {isLoading ? (
        <div className="animate-pulse space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="size-64 bg-gray-700 rounded-3xl mx-auto md:mx-0" />
            <div className="flex-1 space-y-4 mt-6">
              <div className="h-6 w-48 bg-gray-600 rounded" />
              <div className="h-5 w-full bg-gray-700 rounded" />
              <div className="h-5 w-2/3 bg-gray-700 rounded" />
              <div className="h-5 w-1/2 bg-gray-700 rounded" />
              <div className="h-6 w-20 bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 bg-red-900 px-3 py-2 rounded-md font-bold text-white hover:text-blue-500 hover:bg-[#1c1933d0] duration-200"
          >
            Close
          </button>

          <div className="flex">
            <div className="flex flex-col md:flex-row text-blue-500 font-sans font-semibold max-md:divide-y-2 md:divide-x-2 gap-5">
              <div className="size-64 overflow-hidden rounded-3xl mt-10 md:mt-7 mx-auto md:mx-0">
                <img src={teacher.img} alt={teacher.name} className="w-full" />
              </div>

              <div className="w-full">
                <div className="ml-0 md:ml-10 mt-10 md:mt-16 gap-5">
                  <div className="flex gap-2">
                    <span className="text-white text-xl">Name :</span>
                    <h2 className="text-xl font-poppins">{teacher.name}</h2>
                  </div>

                  <div className="mt-10 flex gap-2">
                    <span className="font-semibold text-xl text-white">Education:</span>
                    <span
                      className="block whitespace-pre-line text-xl"
                      dangerouslySetInnerHTML={{ __html: teacher.qualifications }}
                    />
                  </div>
                </div>

                <div className="ml-0 md:ml-10 mt-10 flex gap-2">
                  <h1 className="text-xl text-white">Institute :</h1>
                  <span
                    className="text-xl"
                    dangerouslySetInnerHTML={{ __html: teacher.institution }}
                  ></span>
                </div>

                {/* Facebook Icon */}
                {teacher.Facebook && teacher.Facebook.trim() !== "" && (
                  <div className="ml-0 md:ml-10 mt-6 flex items-center gap-3">
                    <span className="text-white text-xl">Facebook:</span>
                    <Link
                      to={teacher.Facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                      aria-label={`${teacher.name} Facebook`}
                    >
                      <FaFacebook className="text-2xl" />
                    </Link>
                  </div>
                )}

                {/* Bottom Center Close Button for md and smaller */}
                <div className="flex justify-center mt-10 md:hidden">
                  <button
                    onClick={onClose}
                    className="bg-red-900 mb-10 px-6 py-2 rounded-md font-bold text-white hover:text-blue-500 hover:bg-[#1c1933d0] duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

};

PopCard.propTypes = {
  teacher: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    qualifications: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    Facebook: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

// Your OurTeachersPop component (list of teachers)
const OurTeachersPop = ({ onClose, teachers = [] }) => {
  // State to track which teacher is selected for detail popup
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 1000); // simulate load
  return () => clearTimeout(timer);
}, []);


  // Open popup with selected teacher
  const handleOpenPopup = (teacher) => {
    setSelectedTeacher(teacher);
  };

  // Close detail popup
  const handleClosePopup = () => {
    setSelectedTeacher(null);
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="relative w-[95vw] h-[85vh] rounded-xl shadow-2xl border border-[#5b575e] flex flex-col bg-[#02020c] text-white">
          <BorderBeam
            duration={6}
            size={800}
            className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent rounded-xl"
          />
          <BorderBeam
            duration={4}
            size={800}
            className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent rounded-xl"
          />

          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl z-20"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <h2 className="text-3xl font-bold mb-4 mt-6 text-center z-10 flex-shrink-0">
            Meet Our Teachers
          </h2>

          <div className="flex-grow overflow-y-auto px-6 pb-6 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

{isLoading ? (
  Array.from({ length: 6 }).map((_, i) => (
    <div key={i} className="relative bg-[#0c071d] p-6 rounded-xl shadow-md flex flex-col items-center">
      <div className="h-48 w-48 rounded-xl bg-gray-700 animate-pulse mb-4" />
      <div className="h-5 w-32 bg-gray-700 animate-pulse mb-2 rounded" />
      <div className="h-4 w-24 bg-gray-600 animate-pulse mb-4 rounded" />
      <div className="h-6 w-10 bg-gray-600 animate-pulse mb-4 rounded-full" />
      <div className="h-10 w-28 bg-gray-700 animate-pulse rounded-xl" />
    </div>
  ))
) : (
              teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="relative bg-[#0c071d] p-6 rounded-xl shadow-md flex flex-col items-center"
                >
                  <BorderBeam
                    duration={5}
                    size={40}
                    className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent rounded-xl"
                  />

                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <img
                      src={teacher.img}
                      alt={teacher.name}
                      className="h-48 w-48 object-cover rounded-xl border-2 border-gray-600"
                    />

                    <h3 className="text-xl font-semibold text-blue-400">{teacher.name}</h3>
                    <p className="text-gray-400">{teacher.profession}</p>

                    {teacher.Facebook && teacher.Facebook.trim() !== "" && (
                      <Link
                        to={teacher.Facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                        aria-label={`${teacher.name} Facebook`}
                      >
                        <FaFacebook className="text-2xl" />
                      </Link>
                    )}

                    <button
                      className="px-6 py-2 mt-4 text-blue-300 border-2 rounded-xl border-blue-950 hover:bg-blue-950 hover:opacity-85"
                      onClick={() => handleOpenPopup(teacher)}
                      type="button"
                    >
                      Click Here
                    </button>
                  </div>
                </div>
              ))
            )}
            </div> 
          </div>
        </div>
      </div>
      {/* Detail Popup */}
      {selectedTeacher && <PopCard teacher={selectedTeacher} onClose={handleClosePopup} />}
    </>
  );
};

export default OurTeachersPop;
