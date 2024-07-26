import React from "react";
import Image from "next/image";
import type { Service } from "@/app/lib/definitions";
import { TransitionUp } from "../../Framer/FramerAnimations";

const Card = (item: Service) => {
  return (
    <TransitionUp
      key={item.id}
      className="flex w-full items-center rounded-lg bg-white p-3 text-black shadow-lg md:m-4 md:w-5/12 md:p-3"
    >
      <Image
        src={item.icon.src}
        width={50}
        height={50}
        alt="macbook"
        className="w-15 rounded-2xl border-2 bg-Teal p-2 md:h-20 md:w-20"
      />
      <div className="flex flex-col gap-y-2 pl-6">
        <h2 className="text-xl font-extrabold md:text-3xl">{item.title}</h2>
      </div>

      {/* <div className="flex items-center gap-x-9 bg-white px-4">
        <Image
          src={item.icon}
          width={50}
          alt="macbook"
          className="h-20 w-20 rounded-2xl border-2 bg-Teal p-4"
        />
        <h2 className="text-3xl font-bold">{item.title}</h2>
      </div>
      <p className="mt-6 px-4 text-xl">{item.description}</p> */}
    </TransitionUp>
  );
};

export default Card;
