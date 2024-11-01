import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/tour/group.jpg";
import img2 from "../assets/batch.jpg";
import img3 from "../assets/batch-2.jpg";
import img4 from "../assets/hsc-care-hsc-23-batch.jpg";
import img5 from "../assets/hsc-care-banner.jpg";

const Slide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div className="carousel" data-aos="fade-up" data-aos-duration="1200">  
      <h6
        className="text-3xl sm:text-4xl text-blue-400 flex relative items-start text-center justify-center mb-10 poppins"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Carousel
      </h6>
        <Slider {...settings}>
          {[img5, img2, img3, img4, img1].map((image, index) => (
            <div className="box" key={index} onClick={() => openModal(image)}>
              <img src={image} alt={`Description ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={currentImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
