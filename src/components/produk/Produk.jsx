/* eslint-disable react/prop-types */
import ProductList from "./ProductList";

const Produk = ({ setIsModalActive }) => {
  return (
    <section
      id="produk"
      className="text-slate-200 px-[5%] sm:px-[6%] md:px-[7%] py-[85px] lg:py-[100px] xl:py-[120px]"
    >
      <h2 className="text-3xl lg:text-4xl xl:text-[45px] text-center font-bold">
        <span className="text-primary">Produk unggulan</span> kami
      </h2>
      <p className="text-center max-w-[330px] mx-auto mt-4 font-light text-sm xl:text-base xl:max-w-[400px] xl:mt-8">
        Berikut ini adalah beberapa produk unggulan di Toko Kopi Nusantara
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[50px] gap-3 md:gap-5">
        {<ProductList setIsModalActive={setIsModalActive} />}
      </div>
    </section>
  );
};

export default Produk;
