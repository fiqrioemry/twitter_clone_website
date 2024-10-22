import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const LeftBar = () => {
  return (
    <section>
      <div className="fixed top-0 bottom-0 left-0 w-[350px]">
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <div>Home</div>
        </Link>
      </div>
    </section>
  );
};

export default LeftBar;
