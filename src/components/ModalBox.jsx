/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import produk2 from "../assets/produk2.jpg";
import { RiStarSLine } from "react-icons/ri";
import { GrCart } from "react-icons/gr";

function ModalBox({ isModalActive, setIsModalActive }) {
  return (
    <div
      className={`fixed ${
        isModalActive ? "block" : "hidden"
      } top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center px-5 py-3 z-[9999] duration-300`}
    >
      <div
        className="relative max-w-[380px] sm:max-w-[600px] sm:p-3 md:max-w-full md:p-5 lg:p-7 bg-white rounded-md shadow-md border-2 border-bg overflow-y-auto lg:max-w-[1000px]"
        id="myModal"
      >
        <IoClose
          className="absolute top-2 right-2 w-[25px] h-[25px] md:w-[30px] md:h-[30px] md:bg-slate-900 md:text-white bg-white rounded-full inline-flex justify-center items-center text-sm cursor-pointer"
          onClick={() => {
            setIsModalActive(!isModalActive);
          }}
        />
        <div className="flex flex-col sm:flex-row lg:items-center">
          <img
            src={produk2}
            className="sm:w-[200px] md:w-[330px] md:h-[300px] sm:rounded lg:w-[350px] lg:h-[320px] md:rounded-md md:mr-4 sm:mr-2"
          ></img>
          <div className="px-3 pb-5">
            <h2 className="text-xl font-bold mt-3 lg:text-2xl">
              Coffey strowberry pack
            </h2>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed
              voluptas odit ratione, voluptatum corporis dolore ipsum
            </p>
            <div className="flex gap-2 mb-1">
              <RiStarSLine className="text-lg" />
              <RiStarSLine className="text-lg" />
              <RiStarSLine className="text-lg" />
              <RiStarSLine className="text-lg" />
              <RiStarSLine className="text-lg" />
            </div>
            <p className="font-semibold text-sm">
              IDR 20K{" "}
              <span className="ml-2 font-light line-through">IDR 50K</span>
            </p>
            <button className="bg-primary flex text-white w-[150px] py-2 text-center justify-center rounded-md items-center mt-2">
              <GrCart className="text-xl" />
              <span>simpan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBox;
