import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/tour/group.jpg"
const Slide = () => {
  var settings = {
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="carousel-container">
      <div className="carousel mt-20" data-aos="fade-up" data-aos-duration="1200">
        <h2
          data-aos="fade-up"
          data-aos-duration="300"
          className="text-2xl sm:text-4xl text-center font-bold mb-1 sm:mb-8"
        >
          Gallery
        </h2>
        <Slider {...settings}>
          {[img1, img1, img1, img1, img1, img1, img1].map((image, index) => (
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
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={currentImage} alt="Enlarged view" />
          </div>
=======
    <div className="carousel mt-20" data-aos='fade-up' data-aos-duration="1200">
      <Slider {...settings}>
        <div className="box">
        <img src={img1} alt="Description 1" />
>>>>>>> parent of aefd09a (gallery and slide responsive)
=======
    <div className="carousel mt-20" data-aos='fade-up' data-aos-duration="1200">
       <h2  data-aos='fade-up' data-aos-duration="300" className="text-2xl sm:text-4xl text-center font-bold mb-1 sm:mb-8">
        Gallery
      </h2>
      <Slider {...settings}>
        <div className="box">
        <img src={img1} alt="Description 1" />
>>>>>>> parent of b3d4ef1 (popup image)
        </div>
        <div className="box">
        <img src={img1} alt="Description 1" />
        </div>
        <div className="box">
        <img src={img1} alt="Description 1" />
        </div>
        <div className="box">
        <img src={img1} alt="Description 1" />
        </div>
        <div className="box">
        <img src={img1} alt="Description 1" />
        </div>
        <div className="box">
        <img src={img1} alt="Description 1" />
        </div>
        <div className="box">
        <img src={img1} alt="Description 1" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
