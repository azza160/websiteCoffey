import aboutImg from "../assets/tentang.jpg";

function About() {
  return (
    <section
      id="about"
      className="text-slate-200 px-[5%] sm:px-[6%] md:px-[7%] py-[85px] lg:py-[100px] xl:py-[120px]"
    >
      <h2 className="text-3xl lg:text-4xl xl:text-[45px] text-center font-bold">
        <span className="text-primary">Tentang</span> kami
      </h2>
      <div className="flex flex-col mt-[25px] md:mt-[40px] md:flex-row md:gap-6 lg:mt-[50px] 2xl:mt-[60px]">
        <div className="w-full mx-auto md:w-[50%] lg:w-[45%]">
          <img src={aboutImg} className="w-full rounded-md shadow-md"></img>
        </div>
        <div className="mt-[20px] md:mt-0 md:w-[55%]">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 md:text-2xl lg:text-3xl xl:text-4xl lg:mb-5 xl:mb-7 2xl:mb-8">
            kenapa memilih kopi kami?
          </h2>
          <p className="text-sm font-light xl:text-base 2xl:text-lg">
            Kami menghadirkan pengalaman kopi yang istimewa dengan biji kopi
            terbaik dari seluruh dunia, diproses dengan teliti untuk memberikan
            cita rasa yang memuaskan.
          </p>
          <p className="text-sm font-light mt-5 xl:text-base 2xl:text-lg">
            Dengan setiap tegukan, Anda tidak hanya menikmati kelezatan kopi
            yang unik, tetapi juga turut mendukung upaya keberlanjutan dan
            kesejahteraan petani kopi serta komunitas lokal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
