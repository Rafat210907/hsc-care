import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css"; // Importing AOS library for animations
import { useEffect } from "react";

const PopCard = ({ teacher, onClose }) => {
  // Initialize AOS (Animation On Scroll) on component mount
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* Modal Background */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl z-50">
        {/* Modal Content */}
        <div className="h-auto w-[90%] md:w-[770px] rounded-lg p-6 relative md:backdrop-blur-xl">
          {/* Close Button - top right for md and up */}
          <button
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 bg-red-900 px-3 py-2 rounded-md font-bold text-white hover:text-blue-500 hover:bg-[#1c1933d0] duration-200"
          >
            Close
          </button>

          {/* Teacher Info Section */}
          <div className="flex flex-col md:flex-row text-blue-500 font-sans font-semibold max-md:divide-y-2 md:divide-x-2 gap-5">
            {/* Teacher Image */}
            <div className="size-64 overflow-hidden rounded-3xl mt-10 md:mt-7 mx-auto md:mx-0">
              <img src={teacher.img} alt={teacher.name} className="w-full" />
            </div>

            {/* Teacher Details */}
            <div className="w-full">
              {/* Name and Education */}
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

              {/* Institute */}
              <div className="ml-0 md:ml-10 mt-10 flex gap-2">
                <h1 className="text-xl text-white">Institute :</h1>
                <span
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: teacher.institution }}
                ></span>
              </div>

              {/* Bottom Center Close Button for md and smaller */}
              <div className="flex justify-center mt-10 md:hidden">
                <button
                  onClick={onClose}
                  className="bg-red-900 px-6 py-2 rounded-md font-bold text-white hover:text-blue-500 hover:bg-[#1c1933d0] duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Prop validation to ensure proper data is passed to the component
PopCard.propTypes = {
  teacher: PropTypes.shape({
    img: PropTypes.string.isRequired, // Teacher image URL
    name: PropTypes.string.isRequired, // Teacher's name
    profession: PropTypes.string.isRequired, // Teacher's profession
    qualifications: PropTypes.string.isRequired, // Teacher's qualifications in HTML format
    institution: PropTypes.string.isRequired, // Teacher's institution
    Facebook: PropTypes.string, // Optional link to Facebook profile
  }).isRequired,
  onClose: PropTypes.func.isRequired, // Function to close the modal
};

export default PopCard;
