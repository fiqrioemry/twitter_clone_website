import React from "react";
import { FaHome, FaSearch, FaBell, FaMailBulk } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

const ExamplePage = () => {
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
    <div className="h-screen bg-secondary">
      <div className="flex container mx-auto">
        {/* sidebar */}
        <div className="flex flex-col w-[25%] h-full px-6 md:px-10 lg:px-12 py-8 bg-secondary  border-r text-white">
          <nav className="space-y-2 bg-red-500 flex flex-col items-center justify-center">
            {navMenu.map((nav, index) => {
              return (
                <button
                  to={nav.path}
                  className="flex items-center px-3 py-3 rounded-full text-2xl hover:bg-gray-500/30"
                >
                  {nav.icon}
                  {!nav.title ? (
                    ""
                  ) : (
                    <div className=" hidden md:flex">{nav.title}</div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Konten Utama & Rightbar */}
        <div className="w-[75%] flex flex-row h-screen overflow-y-auto">
          {/* Feed */}
          <div className="flex-1 p-4">
            <div className="space-y-6 h-[350vh]">
              <h2 className="text-2xl font-semibold mb-6">Home</h2>
              {/* Tambahkan lebih banyak konten agar bisa di-scroll panjang */}
              <div className="p-4 bg-white shadow-sm rounded-lg">
                <p className="text-gray-800">This is a tweet!</p>
              </div>

              <div className="p-4 h-[200px] bg-white shadow-sm rounded-lg">
                <p className="text-gray-800">Keep scrolling...</p>
              </div>
              <div className="p-4 h-[200px] bg-white shadow-sm rounded-lg">
                <p className="text-gray-800">Keep scrolling...</p>
              </div>
              <div className="p-4 h-[200px] bg-white shadow-sm rounded-lg">
                <p className="text-gray-800">Keep scrolling...</p>
              </div>

              {/* Tambah lebih banyak konten untuk membuat scroll yang panjang */}
            </div>
          </div>

          {/* Right Sidebar with sticky behavior */}
          <div className="hidden lg:flex lg:w-1/4 border-l sticky top-0 bottom-0 h-[150vh] bg-yellow-500">
            <div className="space-y-4 h-[120vh] bg-blue-500">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #1</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #2</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #3</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #3</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #3</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #3</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #3</h3>
                <p className="text-sm text-gray-600">
                  Description of trending topic...
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Trending #4</h3>
                <p className="text-sm text-gray-600">OTHERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
