/* eslint-disable react/no-unknown-property */
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-slate-200 px-[5%] sm:px-[6%] md:px-[7%] py-[85px] lg:py-[100px] xl:py-[120px]"
    >
      <h2 className="text-3xl lg:text-4xl xl:text-[45px] text-center font-bold">
        <span className="text-primary">Contact</span> kami
      </h2>
      <p className="text-center max-w-[290px] mx-auto mt-4 font-light text-sm xl:text-base xl:mt-6">
        Berikut ini adalah contact dan maps toko kopi Nusantara
      </p>
      <div className="flex flex-col md:flex-row md:items-center mt-10 bg-[#222] p-5 md:p-0 md:pe-7 lg:pe-9 xl:pe-11 gap-5 md:gap-7 lg:gap-9 xl:gap-11 rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965018193!2d107.5607556805953!3d-6.903271953467887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd8b43fb4d7d%3A0x401e8f1fc28c730!2sCimenyan!5e0!3m2!1sid!2sid!4v1710320399957!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          className="rounded h-[200px] sm:h-[250px] md:h-[350px] md:w-[50%] md:rounded-e-none lg:h-[450px] xl:h-[550px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form className="flex flex-col gap-3 md:gap-5 xl:gap-7 h-full md:w-[50%]">
          <div className="w-full py-3 md:py-4 lg:py-5 xl:py-6 bg-[#010101] border border-slate-100 flex gap-3 items-center px-5 rounded">
            <FaRegUser />
            <input
              type="text"
              placeholder="masukan nama..."
              className="w-full h-full bg-transparent rounded focus:outline-none"
            ></input>
          </div>
          <div className="w-full py-3 md:py-4 lg:py-5 xl:py-6 bg-[#010101] border border-slate-100 flex gap-3 items-center px-5 rounded">
            <MdOutlineEmail />
            <input
              type="email"
              placeholder="masukan email..."
              className="w-full h-full bg-transparent rounded focus:outline-none"
            ></input>
          </div>
          <div className="w-full py-3 md:py-4 lg:py-5 xl:py-6 bg-[#010101] border border-slate-100 flex gap-3 items-center px-5 rounded">
            <FiPhone />
            <input
              type="number"
              placeholder="masukan nomor..."
              className="w-full h-full bg-transparent rounded focus:outline-none"
            ></input>
          </div>
          <button className="bg-primary py-3 md:py-4 lg:py-5 xl:py-6 w-full text-center rounded">
            kirim pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
