import MenuList from "./menuList";

const Menu = () => {
  return (
    <section
      id="menu"
      className="text-slate-200 px-[5%] sm:px-[6%] md:px-[7%] py-[85px] lg:py-[100px] xl:py-[120px]"
    >
      <h2 className="text-3xl lg:text-4xl xl:text-[45px] text-center font-bold">
        <span className="text-primary">Menu</span> kami
      </h2>
      <p className="text-center max-w-[330px] mx-auto mt-4 font-light text-sm xl:text-base xl:mt-6">
        Berikut ini adalah beberapa menu yang tersedia di Toko Kopi Nusantara
      </p>
      <div className="flex flex-wrap mt-[60px] justify-center gap-[50px]">
        {<MenuList />}
      </div>
    </section>
  );
};

export default Menu;
