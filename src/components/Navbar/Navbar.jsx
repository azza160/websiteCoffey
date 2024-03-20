/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import ShoopingCart from "./ShoopingCart";

const Navbar = ({
  isNavActive,
  handleNav,
  isSearchBarActive,
  handleSearchBar,
  setIsSearchBarActive,
  setIsNavActive,
  isCartActive,
  setIsCartActive,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 ${
          isNavActive ? "block" : "hidden"
        } md:hidden z-[100]`}
        onClick={handleNav}
      ></div>
      <nav className="text-slate-100 flex justify-between items-center py-[1rem] md:py-[0.8rem] xl:py-[1.4rem] px-[5%] sm:px-[6%] md:px-[7%] bg-bgNavbar border-b border-b-[#271d13] fixed top-0 left-0 right-0 z-[999]">
        <a
          href="#"
          className="text-[1.5rem] lg:text-[2rem] md:text-[1.7rem] font-bold italic"
        >
          kopi<span className="text-primary">nusantara</span>
        </a>
        <div
          className={`md:static absolute top-[102%] flex flex-col md:flex-row text-slate-900 items-end md:items-start md:text-slate-100 h-screen md:h-auto  bg-slate-100 md:bg-transparent right-0 l ${
            isNavActive ? "translate-x-0" : "translate-x-full"
          } duration-300 md:translate-x-0 gap-y-10 md:gap-y-0 py-10 md:py-0 w-[300px] md:w-auto`}
        >
          <NavLinks setIsNavActive={setIsNavActive} />
        </div>
        <div className="flex">
          {isSearchBarActive && isNavActive == false ? (
            <IoClose
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.2rem] sm:text-[1.4rem] hover:scale-110"
              onClick={() => {
                handleSearchBar();
              }}
            />
          ) : (
            <FaSearch
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.2rem] sm:text-[1.4rem] hover:scale-110"
              onClick={() => {
                setIsNavActive(false);
                handleSearchBar();
                setIsCartActive(false);
              }}
            />
          )}
          {isCartActive ? (
            <IoClose
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.2rem] sm:text-[1.4rem] hover:scale-110"
              onClick={() => {
                setIsCartActive(!isCartActive);
              }}
            />
          ) : (
            <GrCart
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.2rem] sm:text-[1.4rem] hover:scale-110"
              onClick={() => {
                setIsCartActive(true);
                setIsNavActive(false);
                setIsSearchBarActive(false);
              }}
            />
          )}

          {isNavActive ? (
            <IoClose
              className="md:hidden mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.5rem] sm:text-[1.8rem] hover:scale-110"
              onClick={() => {
                handleNav();
              }}
            />
          ) : (
            <HiMiniBars3BottomRight
              className="md:hidden mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.3rem] sm:text-[1.5rem] hover:scale-110"
              onClick={() => {
                handleNav();
                setIsSearchBarActive(false);
                setIsCartActive(false);
              }}
            />
          )}
        </div>
        <SearchBar isSearchBarActive={isSearchBarActive} />
        <ShoopingCart isCartActive={isCartActive} />
      </nav>
    </>
  );
};

export default Navbar;
