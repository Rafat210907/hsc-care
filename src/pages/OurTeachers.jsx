import React, { useState, useEffect } from "react";
import { BoxReveal } from "@/components/magicui/BoxReveal";
import { AuroraText } from "@/components/magicui/AuroraText";
import { Skeleton } from "@/components/ui/skeleton";
import { OrbitingCircles } from "@/components/magicui/OrbitingCircles";
import { File, Settings, Search } from "lucide-react";
import { BorderBeam } from "@/components/magicui/BorderBeam";
import OurTeachersPop from "@/components/OurTeachers/OurTeachersPop";
import teachersData from "@/components/OurTeachers/TeachersData";

const OurTeachers = () => {
  const [loading, setLoading] = useState(true);
  const [radiusSmall, setRadiusSmall] = useState(83);
  const [radiusLarge, setRadiusLarge] = useState(150);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadiusSmall(30);
        setRadiusLarge(60);
      } else if (width < 1024) {
        setRadiusSmall(60);
        setRadiusLarge(110);
      } else {
        setRadiusSmall(93);
        setRadiusLarge(160);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="overflow-hidden relative px-4 sm:px-8 2xl:px-80">
      {/* Background Glow */}
 <div className="absolute top-[20%] right-[-5%] w-[40rem] h-0 shadow-[0_0_900px_20px_#4D4DFF] -rotate-[30deg] -z-10" />

      {/* Heading */}
      <div className="flex flex-col items-center justify-center lg:mt-16">
        {loading ? (
          <Skeleton className="h-10 w-[200px] sm:w-[240px] md:w-[300px] lg:w-[400px] mb-4" />
        ) : (
          <BoxReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mb-2 text-center">
              <AuroraText>Tutors</AuroraText>
            </h1>
          </BoxReveal>
        )}
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-8">
        {/* Left Text Content */}
        <div className="flex-1 space-y-6">
          {loading ? (
            <div className="space-y-3 my-3">
              <Skeleton className="h-[20px] w-[200px] rounded-full" />
              <Skeleton className="h-[20px] w-[250px] rounded-full" />
            </div>
          ) : (
            <>
<BoxReveal>
  <div className="flex items-center space-x-20 relative">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider">
      <AuroraText>
        We Have <br /> Best Tutors
      </AuroraText>
    </h2>

    {/* Orbit for small screens */}
    <div className="md:hidden">
      <div className="px-5 max-sm:w-[240px] max-sm:h-[140px] h-[240px] sm:ml-96">
        <OrbitingCircles
          radius={radiusSmall}
          iconSize={20}
          reverse
          duration={12}
        >
          <File />
          <Settings />
          <Search />
        </OrbitingCircles>
        <OrbitingCircles
          radius={radiusLarge}
          iconSize={30}
          duration={18}
        >
          <File />
          <Settings />
          <Search />
          <File />
        </OrbitingCircles>
      </div>
    </div>
  </div>
</BoxReveal>
<BoxReveal> 
  <div className="flex items-end">
    <div>
      <p className="text-base sm:text-xl tracking-wider text-gray-400 max-w-[30rem]">
        <AuroraText>
          A tutor is someone who guides, motivates, and leads students toward academic success with care and expertise.
          At our coaching centre, we proudly offer the best tutors who are not only knowledgeable but also passionate about
          teaching. They ensure every student receives personal attention and achieves their full potential.
        </AuroraText>
      </p>
    </div>
  </div>
</BoxReveal>

              <BoxReveal>
                <div className="flex gap-6">
                  <button
                    onClick={() => setShowModal(true)}
                    className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2a2a2a] font-semibold tracking-wide text-sm sm:text-lg transition-colors duration-300 hover:bg-[#1a1a1a] overflow-hidden"
                  >
                    <BorderBeam
                      duration={5}
                      size={80}
                      className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent"
                      style={{ borderRadius: "9999px" }}
                    />
                    <span className="relative flex items-center gap-2 text-white z-10">
                      Teachers <i className="bx bx-link-external"></i>
                    </span>
                  </button>
                </div>
              </BoxReveal>
            </>
          )}
        </div>

        {/* Orbit for large screens */}
        {!loading && (
          <div className="hidden lg:flex relative w-full max-w-[400px] h-[400px] items-center justify-center">
            <OrbitingCircles
              radius={radiusSmall}
              iconSize={25}
              reverse
              duration={12}
            >
              <File />
              <Settings />
              <Search />
            </OrbitingCircles>
            <OrbitingCircles
              radius={radiusLarge}
              iconSize={35}
              duration={18}
            >
              <File />
              <Settings />
              <Search />
              <File />
            </OrbitingCircles>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <OurTeachersPop
          teachers={teachersData}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
};

export default OurTeachers;