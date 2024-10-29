import Hero from "../components/Hero";
import OurTeachers from "../components/OurTeachers";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel /> 
      <AboutUs />
       <WhyUs />
      <OurTeachers />
    </>
  );
};

export default HomePage;
