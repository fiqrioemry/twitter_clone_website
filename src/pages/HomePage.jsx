import React from "react";
import { MdVerified } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
const HomePage = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="space-y-6 h-[350vh]">
          <div className="flex text-white sticky top-0 w-full bg-transparent backdrop-blur border-white/30 border-b z-10">
            <div className="flex justify-center items-center py-4 w-1/2 hover:bg-gray-500/30">
              For You
            </div>
            <div className="flex justify-center items-center py-4 w-1/2 hover:bg-gray-500/30">
              Following
            </div>
          </div>
          <div className="flex border-t gap-x-2 border-b border-white/30 py-2 px-4  text-white">
            {/* 1. photo profile */}
            <div className=" flex justify-center">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </div>
            {/* 2. content box */}
            <div className="space-y-2">
              {/* 3. post section */}
              <div className="flex flex-row gap-x-1 items-center text-sm">
                <div className="font-semibold">Timnas Indonesia </div>
                <MdVerified className="text-blue-500" />
                <div>@timnas_indonesia</div>
                <div>Oct.2022</div>
              </div>
              <div className="font-light text-sm pb-4">
                <p>
                  PSSI akan menginstal 100 CCTV di Stadion Utama Gelora Bung
                  Karno demi meningkatkan keamanan serta kenyamanan dalam
                  menonton pertandingan{" "}
                  <span className="underline text-blue-500">
                    @TimnasIndonesia
                  </span>
                </p>
              </div>
              {/* 4. reply box */}
              <div className="flex flex-row justify-between py-2 ">
                <div className="flex flex-row items-center gap-x-2">
                  <IoChatbubbleOutline />
                  100
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <FaRetweet />
                  99K
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <MdFavoriteBorder />
                  19K
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <CiViewTimeline />
                  100K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar with sticky behavior */}
      <div className="hidden lg:flex flex-col lg:w-[40%] border-l sticky top-0 h-[150vh] py-2 px-4 border-white/30 ">
        <div className="sticky top-0 w-full mb-10">
          <input
            type="search"
            className="w-full flex justify-center items-center px-4 py-2 rounded-full outline-none bg-gray-500/50 text-white"
            placeholder="Cari trending"
          />
        </div>
        <div className="space-y-4 h-[120vh]">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
