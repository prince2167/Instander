import { useState } from "react";
import { MdOutlineTune } from "../../asset/icons";
function Filter() {
  const [sortBy, setSortBy] = useState("Latest");
  const [showSortOptions, setShowSortOptions] = useState(false);
  return (
    <div className="my-6 flex justify-between items-center px-2">
      <h1 className="text-xl font-semibold">Latest Post</h1>
      <div>
        <button className="cursor-pointer relative">
          <MdOutlineTune
            size={28}
            onClick={() => setShowSortOptions(!showSortOptions)}
          />
          {showSortOptions && (
            <ul className="absolute bg-white w-[7rem]  rounded-lg p-2   top-8 z-10 right-5 border-2 shadow-xl  font-semibold ">
              <li
                className={`options hover:bg-isactiveColor hover:text-orange  rounded-lg  px-6 py-1 flex justify-center items-center ${
                  sortBy === "Trending" ? "bg-isactiveColor text-orange " : ""
                }`}
              >
                Trending
              </li>
              <li
                className={`options hover:bg-isactiveColor hover:text-orange  rounded-lg  px-6 py-1 flex justify-center items-center ${
                  sortBy === "Latest" ? "bg-isactiveColor text-orange" : ""
                }`}
              >
                Latest
              </li>
              <li
                className={`options hover:bg-isactiveColor hover:text-orange rounded-lg  px-6 py-1 flex justify-center items-center ${
                  sortBy === "Oldest" ? "bg-isactiveColor text-orange" : ""
                }`}
              >
                Oldest
              </li>
            </ul>
          )}
        </button>
      </div>
    </div>
  );
}

export default Filter;
