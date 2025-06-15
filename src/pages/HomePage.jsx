import Hero from "../components/Hero";
import OurTeachers from "../components/OurTeachers";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
import Slide from "../components/Slide";

const HomePage = () => {
  return (
    <>
    <div className="font-sans">
       <Hero />
      <Slide />
      <AboutUs />
       <WhyUs />
      <OurTeachers />
    </div>
    </>
  );
};

export default HomePage;
