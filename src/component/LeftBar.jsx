import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const LeftBar = () => {
  const navmenu = [
    {
      icon: <FaHome />,
      title: "Home",
    },
    {
      icon: <FaHome />,
      title: "Home",
    },
    {
      icon: <FaHome />,
      title: "Home",
    },
    {
      icon: <FaHome />,
      title: "Home",
    },
    {
      icon: <FaHome />,
      title: "Home",
    },
  ];
  return (
    <section>
      <div className="fixed top-0 bottom-0 left-0 w-[350px] bg-blue-500">
        <div className="">
          <Link to="/">
            <div>
              <FaHome />
            </div>
            <div>Home</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
