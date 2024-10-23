import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import TwitterIcon from "../assets/twitter_icon.png";

const MainPage = () => {
  return (
    <section className="bg-secondary text-white">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {/* 1. image section */}
        <div className="hidden lg:flex items-center justify-center lg:w-1/2">
          <img className="h-[529px]" src={TwitterIcon} alt="twitter_icon" />
        </div>

        {/* 2. signup form section */}
        <div className="flex flex-col lg:items-start justify-center items-center py-6 lg:py-0">
          <div className="lg:text-start text-center mb-8 flex gap-y-4 flex-col">
            <h1>Happening Now</h1>
            <h3>Join Today</h3>
          </div>
          <div className="text-secondary w-[300px]">
            <button className="btn flex items-center justify-center bg-white w-full mb-4">
              <FcGoogle />
              Sign Up With Google
            </button>
            <button className="btn flex items-center justify-center bg-white w-full mb-4">
              <FaApple />
              Sign Up with Apple
            </button>
            <div class="flex items-center justify-center mb-4 mx-auto">
              <hr class="border-gray-500 flex-grow" />
              <span class="text-gray-500 mx-2">or</span>
              <hr class="border-gray-500 flex-grow" />
            </div>
            <button className="btn bg-blue-500 text-white w-full mb-4">
              Create Account
            </button>
            <div className="text-white mb-8">
              <p className="text-[10px] font-light">
                By signing up, you agree to the{" "}
                <span className="text-blue-500">Terms of Service </span>
                and <span className="text-blue-500">Privacy Policy</span> ,
                including Cookie Use.
              </p>
            </div>
            <div>
              <p className="text-white mb-2">Already Have Account ?</p>
              <button className="btn bg-secondary text-blue-500 border border-white w-full mb-4">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-white mx-auto flex items-center py-6 lg:py-10 justify-center">
        &copy; X Corporation 2024
      </footer>
    </section>
  );
};

export default MainPage;
