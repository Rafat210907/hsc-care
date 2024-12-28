import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopCard = ({ teacher, onClose }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-60 z-50">
        {/* Modal Content */}
        <div className="h-auto w-[90%] md:w-[770px] rounded-lg p-6 relative md:backdrop-blur-xl ">
          {/* Close Button */}
          <button
            onClick={onClose} // Close PopCard
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full"
          >
            X
          </button>
          {/* Teacher Info */}
          <div className="flex flex-col md:flex-row text-blue-500 font-sans font-semibold max-md:divide-y-2 md:divide-x-2 gap-5">
            {/* Image */}
            <div className="size-64 overflow-hidden rounded-xl mt-10 md:mt-0 mx-auto md:mx-0">
              <img src={teacher.img} alt={teacher.name} className="w-full" />
            </div>
            {/* Info */}
            <div>
              <div className="ml-0 md:ml-10 mt-10 md:mt-16 gap-5">
                <div className="flex gap-2">
                  <span className="text-white text-xl">Name:</span>
                  <h2 className="text-xl font-poppins">{teacher.name}</h2>
                </div>
                <div className="mt-10 flex">
                  <span className="font-semibold text-xl">Education:</span>
                  <span
                    className="block whitespace-pre-line ml-2 text-xl"
                    dangerouslySetInnerHTML={{ __html: teacher.qualifications }}
                  />
                </div>
              </div>
              <div className="ml-0 md:ml-10 mt-10 flex gap-2">
                <h1 className="text-xl">Institute:</h1>
                <span
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: teacher.institution }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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

export default PopCard;
