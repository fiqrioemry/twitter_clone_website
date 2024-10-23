import React from "react";

const TestPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-black p-4">
        <div className="text-2xl mb-4">
          <i className="fab fa-twitter"></i>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-hashtag"></i>
            <span>Explore</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
            <span className="bg-blue-500 text-white rounded-full px-2">3</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <span>Messages</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-robot"></i>
            <span>Grok</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-ellipsis-h"></i>
            <span>More</span>
          </li>
        </ul>
        <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4">
          Post
        </button>
      </div>

      {/* Main Content */}
      <div className="flex w-[80%] h-screen overflow-y-scroll">
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
  );
};

export default TestPage;
