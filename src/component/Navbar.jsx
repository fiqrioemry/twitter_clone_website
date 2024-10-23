import React from "react";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
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
      <div className="flex flex-col w-1/4 h-full p-4 bg-red-500 border-r">
        <h1 className="text-2xl font-bold mb-6">Twitter</h1>

        <nav className="space-y-4">
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            🏠 Home
          </a>
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            🔍 Explore
          </a>
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            🔔 Notifications
          </a>
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            ✉️ Messages
          </a>
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            💾 Bookmarks
          </a>
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            📁 Lists
          </a>
          <a
            href="#"
            className="block text-lg text-gray-800 hover:text-blue-500"
          >
            👤 Profile
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
