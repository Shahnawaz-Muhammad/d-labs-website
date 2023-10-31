import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const location = useLocation(); // Get the current location from React Router
  const [activeNavItem, setActiveNavItem] = useState(location.pathname);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact Us", path: "/contact" },
  ];

  const toggleNavMobile = () => {
    setNavMobile(!navMobile);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 w-full z-20 flex justify-center ${
          scroll ? "bg-black" : "bg-opacity-0"
        } py-4 text-bgLight mx-auto px-4 md:px-8 xl:px-4`}
      >
        <div className="max-w-screen-xl w-full">
          <div className="max-w-full flex justify-between">
            <h1 className="text-2xl lg:text-5xl font-semibold text-secondary max-w-full flex items-center italic text-yellow uppercase">
              {/* <img src={logo} alt="" className="w-20 md:w-24 md:block hidden"/> */}
              DLabs
            </h1>

            <div className="max-w-full text-primary hidden md:flex gap-5 font-roboto items-center text-white uppercase">
              {navItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.path}
                  className={`relative group cursor-pointer ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveNavItem(item.path)}
                  onMouseLeave={() => setActiveNavItem(location.pathname)}
                >
                  {item.label}
                  <span
                    className={`absolute w-full h-1 bg-primary -bottom-2 left-0 transform scale-x-0 ${
                      activeNavItem === item.path ? "scale-x-100" : ""
                    } group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-gradient-to-r from-[#00e1dd] to-[#e1f339]`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="md:flex items-center hidden">
              <button className="bg-gradient-to-r from-[#00e1dd] to-[#e1f339]  text-white uppercase text-lg font-semibold py-2 px-4 ">
                Book a Tour
              </button>
            </div>

            <button
              onClick={toggleNavMobile}
              className="md:hidden items-center flex"
            >
              <GiHamburgerMenu className="text-3xl text-white" />
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 w-full h-screen transition-transform duration-300 transform ${
            navMobile ? "translate-y-0" : "-translate-y-full"
          } lg:hidden bg-gray-600`}
        >
          <div className="w-full flex justify-end absolute right-12 top-8">
            <RxCross1
              className="text-3xl text-white cursor-pointer"
              onClick={toggleNavMobile}
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col gap-10 uppercase text-xl items-center justify-center text-white">
              <p>Home</p>
              <p>Features</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Contact Us</p>
              <button className="bg-gradient-to-r from-[#00e1dd] to-[#e1f339]  text-white uppercase text-lg font-semibold py-2 px-4 ">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
