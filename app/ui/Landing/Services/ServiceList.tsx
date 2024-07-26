import React from "react";
import type { Service } from "@/app/lib/definitions";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const ServiceList = ({ List }: { List: Service[] }) => {
  return (
    <div className="flex w-full flex-col flex-wrap items-center gap-y-7 md:w-10/12 md:flex-row md:justify-evenly md:gap-y-5">
      {List.map((item: Service) => (
        <ServiceCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ServiceList;
