import 'boxicons/css/boxicons.min.css';
import { useState, useEffect } from "react";

// UI 
import { AuroraText } from "@/components/magicui/AuroraText";
import { BoxReveal } from "@/components/magicui/BoxReveal";
import { Skeleton } from "@/components/ui/skeleton";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import { ShimmerButton } from "@/components/magicui/ShimmerButton";
import { BorderBeam } from "@/components/magicui/BorderBeam";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col md:flex-row lg:flex-row md:mr-10 md:items-center justify-between min-h-[calc(90vh-7rem)] lg:mt-20 bottom-3 2xl:ml-72">

      {/* Logo on top for sm/md */}
      <div className="block lg:hidden w-80 mx-auto">
        {loading ? (
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        ) : (
          <img src="/src/assets/logo.png" alt="Logo" />
        )}
      </div>

      {/* Text Content */}
      <div className="max-w-xl ml-[2%] z-10 sm:mt-[15%] md:mt-[10%] lg:mt-0">
        {/* Tag box */}
        {loading ? (
          <Skeleton className="h-[40px] w-[120px] rounded-full" />
        ) : (
          
            <div className="relative w-[95%] sm:w-48 h-10  rounded-full overflow-hidden">
                {/* Border Beams */}
                <BorderBeam
                  duration={6}
                  size={100}
                  className="from-transparent via-[#4D4DFF] to-transparent"
                />
                <BorderBeam
                beamHeight={300}
                  duration={6}
                  delay={3}
                  size={100}
                  className="from-transparent via-purple-500 to-transparent"
                />
                {/* Inner text container */}
                <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white z-10">
                  <i className="bx bxs-graduation"></i> INTRODUCING
                </div>
              </div>
        )}

        {/* Heading */}
        {loading ? (
          <div className="space-y-3 my-3">
            <Skeleton className="h-[20px] w-[200px] rounded-full" />
            <Skeleton className="h-[20px] w-[250px] rounded-full" />
          </div>
        ) : (
          <BoxReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mt-2 mb-2">
              <AuroraText>Best Academic <br /> Coaching Centre</AuroraText>
            </h1>
          </BoxReveal>
        )}

        {/* Description */}
        {loading ? (
          <Skeleton className="h-[20px] w-[280px] rounded-full" />
        ) : (
          <BoxReveal>
            <p className="text-base sm:text-xl tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
              <AuroraText>Welcome To HSC Care Website. <br />Copyright © 2025 HSC CARE  </AuroraText>
            </p>
          </BoxReveal>
        )}

{/* Buttons */}
{loading ? (
  <div className="flex gap-4 mt-12">
    <Skeleton className="h-[40px] w-[160px] rounded-full" />
  </div>
) : (
  <BoxReveal>
    <div className="flex gap-6 mt-6">
      
      {/* Documentation Button with Beam */}
      <a
        href="/carousel"
        className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2a2a2a] font-semibold tracking-wide text-sm sm:text-lg transition-colors duration-300 hover:bg-[#1a1a1a] overflow-hidden"
      >
        {/* Beam container */}
        <BorderBeam
          duration={5}
          size={80}
          className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent"
          style={{ borderRadius: '9999px' }}
        />
        <span className="relative flex items-center gap-2 text-white z-10">
          Get Started <i className="bx bx-link-external"></i>
        </span>
      </a>
    </div>
  </BoxReveal>
)}

      </div>
      {/* Logo on right side for lg+ */}
      <div className="hidden lg:block relative lg:mr-[5%] 2xl:mr-64">
        {loading ? (
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        ) : (
          <img className="w-60 lg:w-96 xl:w-96" src="/src/assets/logo.png" alt="Logo" />
        )}
      </div>
    </main>
  );
};

export default Hero; 