import React, { Component } from "react";
import ServiceList from "./ServiceList";
import macbook from "../../../../public/icons/macbook-line.svg";
import eye from "../../../../public/icons/eye-2-line.svg";
import globe from "../../../../public/icons/global-line.svg";
import plug from "../../../../public/icons/plug-line.svg";
import server from "../../../../public/icons/server-line.svg";

const Services = () => {
  const CardList = [
    {
      id: "1",
      title: "Website Development",
      description:
        "We build websites that are fast, secure, and easy to manage.",
      icon: globe,
    },
    {
      id: "2",
      title: "PC and Laptop Repair",
      description: "We repair all types of Personal computers and Laptops.",
      icon: macbook,
    },
    {
      id: "3",
      title: "Security Systems",
      description: "We install CCTV and Security Systems for your business.",
      icon: eye,
    },
    {
      id: "4",
      title: "Structured Cabling ",
      description: "We install structured cabling for your home and business.",
      icon: plug,
    },
    {
      id: "5",
      title: "Server Installation",
      description: "We install and maintain servers for your business.",
      icon: server,
    },
  ];

  return (
    <div className="z-10 flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-Navy px-7 py-20">
      <h1 className="text-center text-5xl font-bold text-white">My Services</h1>
      <div className="mt-10 flex w-full justify-center">
        <ServiceList List={CardList} />
      </div>
    </div>
  );
};

export default Services;
