import Hero from "../components/Hero";
import OurTeachers from "../components/OurTeachers";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel /> 
      <AboutUs />
      <OurTeachers />
    </>
  );
};

export default HomePage;