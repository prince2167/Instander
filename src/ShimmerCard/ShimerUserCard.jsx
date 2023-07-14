import React from "react";

const ShimerUserCard = () => {
  return (
    <div className="w-1/3  mx-10 my-5 flex flex-col gap-4 border border-gray-300 shadow-lg py-2 rounded-md  ">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center flex-wrap px-2 py-2 cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="flex flex-col ">
              <div className="bg-gray-300 h-4 w-24"></div>
              <div className="bg-gray-300 h-2 w-16 mt-1"></div>
            </div>
          </div>
          <button className="bg-orange text-white px-4 py-1 rounded-lg cursor-pointer">
            <div>Follow</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export { ShimerUserCard };
