import React from "react";
// import { AiFillBank } from "react-icons/ai";
export default function LearnMore() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-xl w-full pt-10 px-8 xl:px-0">
        <div className="flex justify-between">
          <h1>02 WHY CHOOSE US</h1>
          <button>FOLLOW US</button>
        </div>
        <div className="flex flex-col items-center text-center pt-10 lg:pt-28 ">
          <h1>LEARN AND GROW</h1>
          <h1 className="pt-6 text-4xl font-bold lg:text-7xl">Our Amenities</h1>
          <div className="flex justify-center pt-10">
            <div className="w-2 h-2  rounded-full bg-green-500"></div>
            <div className="w-2 h-2 ml-4 rounded-full bg-green-500"></div>
            <div className="w-2 h-2  ml-4 rounded-full bg-green-500"></div>
          </div>
          <p className="pt-10  max-w-lg">
            A 2007 survey showed that many employees worry about feeling
            isolated and losing human interaction if they were to telecommute.
          </p>
          
        </div>
        <div class="grid grid-cols-4 gap-4 mt-10">
            <div className="bg-red-400">
              {/* <AiFillBank /> */}
            </div>
            <div className="bg-red-400">02</div>
            <div className="bg-red-400">03</div>
            <div className="bg-red-400">04</div>
            <div className="bg-red-400">05</div>
            <div className="bg-red-400">06</div>
            <div className="bg-red-400">07</div>
            <div className="bg-red-400">08</div>
            <div className="bg-red-400">09</div>
          </div>
          <button className="px-10 py-4 bg-red-400 mt-10 lg:mt-14">
            More About Us
          </button>
      </div>
    </div>
  );
}
