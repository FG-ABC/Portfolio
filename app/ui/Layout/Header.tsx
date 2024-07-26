"use client";
import styles from "../header.module.css";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import ewarez from "../../../public/ewarez-white.svg";
import Image from "next/image";

function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [atHero, setatHero] = useState<boolean>(true);
  const [latestYoffset, setLatestYoffset] = useState<number[]>([0, 0]); // [latest, previous]
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  // First Render Functions
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  const Links = [
    { name: "About Us", link: "#aboutus" },
    { name: "Projects & Campaigns", link: "#projects" },
    { name: "People", link: "#people" },
    {
      name: "Shop",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    },
    {
      name: "Contact Us",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    },
  ];

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setLatestYoffset([latest, latestYoffset[0]]);
    if (latestYoffset[0] < height) {
      setatHero(true);
    } else {
      setatHero(false);
      if (latestYoffset[0] > latestYoffset[1]) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }
    }
  });

  if (isMobile) {
    return (
      <div id="navbar" className={`w-full font-semibold text-white`}>
        <div
          className={`z-50 flex w-full flex-col items-center justify-center px-5 py-1 md:hidden ${atHero ? "absolute bg-DarkBlue opacity-100" : `fixed bg-Navy opacity-100 ${isVisible ? "top-0" : "top-[-80px]"}`} ${styles.navbar}`}
        >
          {/* Hamburger */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Image src={ewarez} width={30} height={30} alt="Logo" />
              <h1>Ewarez IT Solutions</h1>
            </div>
            <div
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              className="cursor-pointer md:hidden"
            >
              <Hamburger
                color="#FFFFFF"
                size={28}
                toggled={hamburgerOpen}
                toggle={setHamburgerOpen}
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`bg-Maroon grid overflow-hidden transition-all duration-300 ease-in-out ${hamburgerOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`}`}
          >
            <ul
              className={`bg-Maroon flex w-full flex-col items-center justify-center gap-y-2 overflow-hidden ${hamburgerOpen ? "py-3" : "p-0"}`}
            >
              {Links.map((item) => {
                return (
                  <a key={item.name} href={item.link}>
                    <li className="text-lg text-white">{item.name}</li>
                  </a>
                );
              })}
              <a className="bg-LightRed rounded-2xl px-3 py-1 text-white">
                Apply Now!
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="navbar" className={`w-full font-semibold text-white`}>
        <div
          className={`z-50 hidden h-20 w-full justify-between px-12 py-7 text-2xl text-white md:flex ${atHero ? "absolute bg-black opacity-70" : `fixed bg-Navy opacity-100 ${isVisible ? "top-0" : "top-[-80px]"}`} ${styles.navbar} `}
        >
          <div className="flex items-center gap-x-3">
            <Image src={ewarez} width={40} height={40} alt="Logo" />
            <Link
              href={{
                pathname: "/",
                // query: { name: "test" },
              }}
            >
              FG Dev
            </Link>
          </div>

          <ul className="flex w-4/12 justify-between">
            <li>
              <Link
                href={{
                  pathname: "/about",
                  // query: { name: "test" },
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/services",
                  // query: { name: "test" },
                }}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/contact",
                  // query: { name: "test" },
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // return (
  //   <div id="navbar" className={`w-full font-semibold text-white`}>
  //     {/* Desktop */}
  //     <div
  //       className={`z-50 hidden h-20 w-full justify-between px-12 py-7 text-2xl md:flex ${atHero ? "absolute bg-black opacity-70" : `fixed bg-Navy opacity-100 ${isVisible ? "top-0" : "top-[-80px]"}`} ${styles.navbar} `}
  //     >
  //       <Link
  //         href={{
  //           pathname: "/",
  //           // query: { name: "test" },
  //         }}
  //       >
  //         Ewarez IT Solutions
  //       </Link>
  //       <ul className="flex w-3/12 justify-between">
  //         <li>
  //           <Link
  //             href={{
  //               pathname: "/about",
  //               // query: { name: "test" },
  //             }}
  //           >
  //             About
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             href={{
  //               pathname: "/services",
  //               // query: { name: "test" },
  //             }}
  //           >
  //             Services
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             href={{
  //               pathname: "/contact",
  //               // query: { name: "test" },
  //             }}
  //           >
  //             Contact
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //     {/* Mobile */}
  //     <div
  //       className={`z-50 flex w-full flex-col items-center justify-center px-2 py-1 md:hidden ${atHero ? "absolute bg-DarkBlue opacity-100" : `fixed bg-Navy opacity-100 ${isVisible ? "top-0" : "top-[-80px]"}`} ${styles.navbar}`}
  //     >
  //       {/* Hamburger */}
  //       <div className="flex w-full items-center justify-between">
  //         <h1>Ewarez</h1>
  //         <div
  //           onClick={() => setHamburgerOpen(!hamburgerOpen)}
  //           className="cursor-pointer md:hidden"
  //         >
  //           <Hamburger
  //             color="#FFFFFF"
  //             size={28}
  //             toggled={hamburgerOpen}
  //             toggle={setHamburgerOpen}
  //           />
  //         </div>
  //       </div>
  //       {/* Dropdown Menu */}
  //       <div
  //         className={`bg-Maroon grid overflow-hidden transition-all duration-300 ease-in-out ${hamburgerOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`}`}
  //       >
  //         <ul
  //           className={`bg-Maroon flex w-full flex-col items-center justify-center gap-y-2 overflow-hidden ${hamburgerOpen ? "py-3" : "p-0"}`}
  //         >
  //           {Links.map((item) => {
  //             return (
  //               <a key={item.name} href={item.link}>
  //                 <li className="text-lg text-white">{item.name}</li>
  //               </a>
  //             );
  //           })}
  //           <a className="bg-LightRed rounded-2xl px-3 py-1 text-white">
  //             Apply Now!
  //           </a>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Header;
