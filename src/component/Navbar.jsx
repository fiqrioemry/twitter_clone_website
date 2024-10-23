import React from "react";
import { FaHome, FaSearch, FaBell, FaMailBulk } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

const Navbar = () => {
  const navMenu = [
    {
      icon: <BsTwitterX />,
      path: "/",
      title: "",
    },
    {
      icon: <FaHome />,
      path: "/",
      title: "Home",
    },
    {
      icon: <FaSearch />,
      path: "/",
      title: "Explore",
    },
    {
      icon: <FaBell />,
      path: "/",
      title: "Notification",
    },
    {
      icon: <FaMailBulk />,
      path: "/",
      title: "Message",
    },
    {
      icon: <CgProfile />,
      path: "/",
      title: "Profile",
    },
    {
      icon: <CiCircleMore />,
      path: "/",
      title: "More",
    },
  ];
  return (
    <div className="flex justify-center md:justify-end lg:justify-center  w-[15%] md:w-[20%] lg:w-[25%]  h-full px-8 py-8 bg-secondary  border-r border-white/30  text-white">
      <nav className="space-y-2">
        {navMenu.map((nav, index) => {
          return (
            <button
              to={nav.path}
              className="flex items-center px-3 py-3  rounded-full text-2xl hover:bg-gray-500/30"
              key={index}
            >
              {nav.icon}
              {!nav.title ? (
                ""
              ) : (
                <div className=" pl-4 hidden lg:flex">{nav.title}</div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
