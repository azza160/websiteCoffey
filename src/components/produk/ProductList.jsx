/* eslint-disable react/prop-types */
import { products } from "../../utils/constant";
import { GrCart } from "react-icons/gr";
import { FaEye } from "react-icons/fa";

import RatingComp from "./RatingComp";

function ProductList({ setIsModalActive }) {
  return (
    <>
      {products.map((e) => {
        return (
          <div
            className="text-center border border-[#666] px-3 py-5 rounded"
            key={e.id}
          >
            <div className="flex justify-center gap-3">
              <a className="flex w-[40px] h-[40px] border border-[#666] items-center justify-center rounded-full duration-300 hover:bg-primary">
                <GrCart className="text-lg font-medium duration-300" />
              </a>
              <a
                className="flex w-[40px] h-[40px] border border-[#666] items-center justify-center rounded-full duration-300 hover:bg-primary cursor-pointer"
                onClick={() => {
                  setIsModalActive(true);
                }}
              >
                <FaEye className="text-lg font-medium" />
              </a>
            </div>
            <div className="">
              <img
                src={e.gambar}
                className="rounded w-full my-5 h-[320px] md:h-[300px] xl:h-[320px] object-cover"
              ></img>
            </div>
            <h2 className="text-2xl font-bold">{e.nama}</h2>
            <div className="flex justify-center my-2">
              {<RatingComp rating={e.bintang} />}
            </div>
            <p className="font-semibold">
              IDR {e.hargaDiskon}K{" "}
              <span className="ml-2 font-light line-through">
                IDR {e.hargaReal}K
              </span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;
