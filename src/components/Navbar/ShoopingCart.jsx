/* eslint-disable react/prop-types */
import ShoopingCartList from "./ShoopingCartList";

function ShoopingCart({ isCartActive }) {
  return (
    <div
      className={`absolute top-full right-0 bg-white h-screen overflow-y-auto w-[330px] sm:w-[550px] text-slate-800 py-5 px-5 pb-[120px] border-l-[3px] shadow-xl border-l-primary ${
        isCartActive ? "translate-x-0" : "translate-x-full"
      } duration-300`}
    >
      <h2 className="text-2xl font-bold mb-[30px] mt-2 ">
        Keranjang <span className="text-primary">produk</span>
      </h2>
      <div className="flex flex-col gap-5">
        <ShoopingCartList />
      </div>
    </div>
  );
}

export default ShoopingCart;
