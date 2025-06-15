import React, { useState, useEffect } from 'react'
import { BoxReveal } from "@/components/magicui/BoxReveal"
import { AuroraText } from "@/components/magicui/AuroraText"
import { Skeleton } from "@/components/ui/skeleton"

const AboutUsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="lg:justify-center lg:mt-28">
      {/* Background Glow */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#4D4DFF] -rotate-[30deg] -z-10"></div>


      {/* Main Heading */}
      <div className="2xl:mt-10">
        {loading ? (
          <div className="flex flex-col items-center space-y-3 my-3">
            <Skeleton className="h-[20px] w-[200px] rounded-full" />
            <Skeleton className="h-[20px] w-[250px] rounded-full" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <BoxReveal>
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mt-2 mb-4 text-center">
                <AuroraText>About HSC Care Coaching Centre</AuroraText>
              </h1>
            </BoxReveal>
          </div>
        )}

        {/* Description */}
        {loading ? (
          <div className="flex justify-center">
            <Skeleton className="h-[20px] w-[280px] rounded-full" />
          </div>
        ) : (
          <BoxReveal>
            <p className="text-base sm:text-xl tracking-wider text-gray-400 text-center lg:px-44">
              Welcome to HSC Care Coaching Center, your trusted partner in academic excellence. We are dedicated to empowering students to achieve academic excellence through personalized instruction and a supportive learning environment focused on their individual needs.
              Our dedicated team of experienced educators fosters a deep understanding of subjects while promoting critical thinking and problem-solving skills, ensuring students develop both academically and personally throughout their educational journey.
              We prioritize a nurturing atmosphere where students feel comfortable, providing one-on-one support and mentorship to help them navigate challenges, prepare for examinations, and achieve their full potential.
            </p>
          </BoxReveal>
        )}
      </div>
    </main>
  );
};

export default AboutUsPage;
