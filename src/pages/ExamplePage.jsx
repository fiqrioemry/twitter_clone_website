import React from "react";

const ExamplePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {" "}
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
      <div className="flex-1 p-4 in-h-screen overflow-y-scroll">
        <h2 className="text-2xl font-semibold mb-6">Home</h2>
        <div className="space-y-6 min-h-[3000px]">
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <p className="text-gray-800">This is a tweet!</p>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <p className="text-gray-800">Another tweet here!</p>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <p className="text-gray-800">What's happening?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
