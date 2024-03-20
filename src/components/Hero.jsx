import heroimg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="text-slate-100 min-h-screen flex flex-col justify-center  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <main className="px-[5%] sm:px-[6%] md:px-[7%] max-w-[60rem] 2xl:max-w-[65rem]">
        <h1 className="sm:text-4xl lg:text-5xl xl:text-[50px] 2xl:text-[55px] text-3xl font-bold text-shadow ">
          Sajikan Kehangatan dan Rasakan{" "}
          <span className="text-primary">Ketenangan</span>
        </h1>
        <p className="max-w-[400px] text-sm md:text-base my-5 md:mt-3 xl:text-lg xl:my-8 mix-blend-difference font-light">
          Selamat datang di Kopinusantara, tempat di mana aroma kopi segar
          memikat indera dan rasa.
        </p>
        <a className="inline-block bg-primary py-2 xl:py-3 xl:px-7 px-5 rounded-md shadow hover:opacity-50 duration-300 cursor-pointer">
          beli sekarang
        </a>
      </main>
      <span
        className="block absolute w-full h-[40%] bottom-0"
        id="sudo-home"
      ></span>
    </section>
  );
};

export default Hero;
