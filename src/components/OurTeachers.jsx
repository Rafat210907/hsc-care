import { useEffect } from "react";

import { teamData } from "../constants/Index";

import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="team" className="pt-20 sm:pt-32 relative">
        
      <div className="max-width">
      <h6  data-aos='fade-up' data-aos-duration="600" className="text-lg sm:text-2xl text-center text-secondary mb-2">
        Teachers
      </h6>
      <h2  data-aos='fade-up' data-aos-duration="600" className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        Meet Our Teachers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {teamData.map((data) => (
          <div data-aos='fade-down' data-aos-duration="800" key={data.id} className="p-10 bg-[#110d2ed0] rounded-xl flex flex-col justify-center items-center">
            <div className="size-42 bg-dark overflow-hidden rounded-xl">
              <img src={data.img} className="w-full" alt="Team Member" />
            </div>
            <h2 className="text-xl text-center text-secondary font-bold mt-3">{data.name}</h2>
            <h6 className="text-xl text-dark">{data.profession}</h6>          
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Team;
