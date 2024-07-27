"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "../raw_components/Particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme !== "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="absolute z-[-1] flex h-screen w-screen flex-col items-center justify-center overflow-hidden  bg-black md:shadow-xl">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span> */}
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
