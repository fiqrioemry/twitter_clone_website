import React from "react";

const HomePage = () => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-semibold mb-6">Home</h2>
      <div className="space-y-6">
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
  );
};

export default HomePage;
