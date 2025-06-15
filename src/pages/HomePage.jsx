import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
console.log("Rendering from HomePage.jsx");
    return (
    <main>
      {/* Gradient Image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-1"
        src="gradient.png"
        alt="Gradient-img"
      />

      {/* Blur Effect */}
      <div
        className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#4D4DFF] -rotate-[30deg] -z-10"
      ></div>
      <Hero />
    </main>
  );
};

export default HomePage;
