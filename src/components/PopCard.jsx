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
      {/* Modal Background with Blur */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl z-50">
        {/* Modal Content */}
        <div className="h-auto w-[90%] md:w-[770px] rounded-lg p-6 relative bg-[#1c1933d0] text-blue-500 font-sans font-semibold">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-blue-900 px-3 py-2 rounded-md font-bold text-white hover:bg-[#2104ff] duration-200">
            Close
          </button>

          {/* Teacher Info Section */}
          <div className="flex flex-col md:flex-row max-md:divide-y-2 md:divide-x-2 gap-5">
            {/* Teacher Image */}
            <div className="size-64 overflow-hidden rounded-3xl mt-10 md:mt-0 mx-auto md:mx-0">
              <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
            </div>

            {/* Teacher Details */}
            <div className="ml-0 md:ml-10 mt-10 md:mt-16 gap-5">
              {/* Teacher Name */}
              <div className="flex gap-2">
                <span className="text-white text-xl">Name :</span>
                <h2 className="text-xl font-poppins">{teacher.name}</h2>
              </div>

              {/* Teacher Education */}
              <div className="mt-10 flex gap-2">
                <span className="font-semibold text-xl text-white">Education:</span>
                <span
                  className="block whitespace-pre-line text-xl"
                  dangerouslySetInnerHTML={{ __html: teacher.qualifications }}
                />
              </div>

              {/* Teacher Institute */}
              <div className="mt-10 flex gap-2">
                <h1 className="text-xl text-white">Institute :</h1>
                <span
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: teacher.institution }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Prop validation
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

export default PopCard;