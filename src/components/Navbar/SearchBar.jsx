/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ isSearchBarActive }) => {
  return (
    <div
      className={`absolute top-full bg-slate-100 left-[5%] sm:left-[6%] md:left-[7%] right-[5%] sm:right-[6%] md:right-[7%] text-slate-800 flex items-center gap-3 py-1 lg:py-2 px-4 shadow duration-300 origin-top ${
        isSearchBarActive ? "scale-y-100" : "scale-y-0"
      }`}
      id="se"
    >
      <input
        type="search"
        placeholder="cari..."
        className="w-full py-2 bg-transparent focus:outline-none"
      ></input>
      <div>
        <FaSearch className="text-lg lg:text-xl" />
      </div>
    </div>
  );
};

export default SearchBar;
