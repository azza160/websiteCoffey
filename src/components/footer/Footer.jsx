import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="text-slate-200 bg-primary mt-5 py-5 md:py-7 flex flex-col gap-[18px] items-center">
      <div className="flex gap-4 md:gap-5 xl:gap-8">
        <FiFacebook className="text-2xl xl:text-3xl cursor-pointer font-medium hover:text-bg duration-300" />
        <FiInstagram className="text-2xl xl:text-3xl cursor-pointer font-medium hover:text-bg duration-300" />
        <FiTwitter className="text-2xl xl:text-3xl cursor-pointer font-medium hover:text-bg duration-300" />
        <RiTiktokLine className="text-2xl xl:text-3xl cursor-pointer font-medium hover:text-bg duration-300" />
      </div>
      <div className="flex gap-2 md:gap-5 xl:gap-6">{<FooterLinks />}</div>
      <div>
        <p className="xl:text-lg">
          created by <a className="text-bg font-medium">azzairul</a>. | &copy;
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
