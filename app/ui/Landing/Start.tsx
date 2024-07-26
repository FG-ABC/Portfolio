import React from "react";
import Image from "next/image";
import Ewarez from "../../../public/ewarez.svg";
import gradient from "../../../public/gradient.svg";
import {
  TransitionToLeft,
  TransitionToRight,
  TransitionUp,
} from "../Framer/FramerAnimations";
import styles from "../start.module.css";

const Start = () => {
  return (
    <>
      {/* Mobile View */}
      <section
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`z-20 flex w-full flex-col items-center justify-center gap-y-7 overflow-hidden px-7 py-20 text-black md:hidden`}
      >
        {/* Top Half */}
        <div className="">
          <TransitionUp className="">
            <div className="">
              <Image
                src={Ewarez.src}
                width={250}
                height={250}
                className="rounded-2xl"
                alt="Picture of the author"
              />
            </div>
          </TransitionUp>
        </div>

        {/* Bottom Half */}
        <div>
          <TransitionUp className="mx-5 flex items-center justify-center rounded-3xl bg-white bg-opacity-55">
            <div className="flex flex-col gap-y-3 p-5 text-center text-lg">
              <strong className="text-5xl font-extrabold">About Me</strong>{" "}
              <div className="text-md text-justify tracking-tight">
                <p className="py-3">
                  I am a Computer Engineering student at the University of the
                  Philippines with a passion for both hardware and software.
                  Currently thriving to become a full-stack web developer, I
                  enhance my technical skills and creative problem-solving
                  abilities to build dynamic and user-friendly web applications.
                  With a strong foundation in computer engineering and hands-on
                  experience in full-stack development, I am dedicated to
                  crafting innovative solutions and continuously expanding my
                  expertise in the tech industry.
                </p>
              </div>
            </div>
          </TransitionUp>
        </div>
      </section>

      {/* Desktop View */}
      <section
        className={`z-20 hidden w-full overflow-hidden text-black md:flex`}
      >
        {/* Left Half */}
        <div
          style={{
            backgroundImage: `url(${gradient.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="hidden w-5/12 bg-Grey p-20 md:block"
        >
          <TransitionToRight className="">
            <div className="">
              <Image
                src={Ewarez.src}
                width={500}
                height={500}
                className="rounded-2xl"
                alt="Picture of the author"
              />
            </div>
          </TransitionToRight>
        </div>

        {/* Right Half */}
        <div
          className={`w-7/12 items-center px-40 ${styles.gradient} hidden md:flex`}
        >
          <TransitionToLeft className="">
            <div className="flex flex-col gap-y-1 text-lg">
              <strong className="text-5xl font-extrabold">About Me</strong>
              <div className="text-justify text-xl tracking-tight">
                <p className="py-3">
                  I am a Computer Engineering student at the University of the
                  Philippines with a passion for both hardware and software.
                  Currently thriving to become a full-stack web developer, I
                  enhance my technical skills and creative problem-solving
                  abilities to build dynamic and user-friendly web applications.
                  With a strong foundation in computer engineering and hands-on
                  experience in full-stack development, I am dedicated to
                  crafting innovative solutions and continuously expanding my
                  expertise in the tech industry.
                </p>
              </div>
            </div>
          </TransitionToLeft>
          ;
        </div>
      </section>
    </>
  );
};

export default Start;
