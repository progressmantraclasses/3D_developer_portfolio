import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Mobile: < 640px
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5 sm:gap-10">
      {technologies.map((technology) => (
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          key={technology.name}
        >
          {!isMobile ? <BallCanvas icon={technology.icon} /> : <img src={technology.icon} alt={technology.name} className="w-full h-full" />}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
