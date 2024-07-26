"use client";

import { useState, useEffect } from "react";
import TypingAnimation from "../MagicUI Components/TypingText";
import { StartButton } from "./Buttons";
import OrbitingCircles from "../MagicUI Components/Orbiting";

const Hero = () => {
  const [width, setWidth] = useState<number>(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  // First Render Functions
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <div className="flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-Navy text-center">
        <div className="flex w-full flex-col items-center text-5xl font-bold text-white">
          <h1>Hello! My name is</h1>
          <TypingAnimation
            text="IT Solutions"
            duration={200}
            className="w-full text-5xl text-Blue"
          />
          <div className="text-5xl font-bold text-white">For Your Business</div>
          <StartButton className="mt-5 rounded-full bg-LightGreen bg-opacity-100 font-extrabold text-black" />
        </div>
        <OrbitingCircles // Inner Circle
          className="absolute size-[20px] border-none bg-black"
          duration={9}
          delay={0}
          radius={200}
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles // Inner Circle
          className="absolute size-[20px] border-none bg-black"
          duration={9}
          delay={3}
          radius={200}
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles // Inner Circle
          className="absolute size-[20px] border-none bg-black"
          duration={9}
          delay={6}
          radius={200}
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
      </div>
    );
  } // Mobile View
  else {
    return (
      <div className="flex h-[100lvh] w-full flex-col items-center justify-center overflow-hidden bg-Navy">
        <div className="btn-sm ml-[13rem] flex h-full w-full flex-col justify-center text-6xl font-bold text-white">
          <h1>Aloha! My name is</h1>
          <TypingAnimation
            text="Francis Glenn"
            duration={200}
            className="w-max text-6xl text-Blue"
          />
          <div className="text-6xl font-bold text-white">
            Your Web Developer
          </div>
          <StartButton className="btn-md mt-5 rounded-full bg-LightGreen bg-opacity-100 text-3xl font-extrabold text-black" />
        </div>

        <OrbitingCircles // Inner Circle
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={0}
          radius={500}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>

        <OrbitingCircles
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={3}
          radius={500}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={6}
          radius={500}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>

        <OrbitingCircles //Middle Circle
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={1}
          radius={750}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={4}
          radius={750}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={7}
          radius={750}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>

        <OrbitingCircles //Outer Circle
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={2}
          radius={1000}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={5}
          radius={1000}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
        <OrbitingCircles
          className="absolute left-[20.5rem] size-[20px] border-none bg-black"
          duration={9}
          delay={8}
          radius={1000}
          cx="21rem"
        >
          <div className="size-[20px] rounded-full bg-white" />
        </OrbitingCircles>
      </div>
    );
  } // Desktop View;
};

export default Hero;
