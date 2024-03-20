/* eslint-disable react/prop-types */
import { navLinkss } from "../../utils/constant";

const NavLinks = ({ setIsNavActive }) => {
  return (
    <>
      {navLinkss.map((e) => {
        return (
          <a
            href={e.link}
            key={e.id}
            className="group inline-block text-[1rem] md:text-[1rem] lg:text-[1.2rem] my-0 mx-[1rem] hover:text-primary duration-300 relative"
            onClick={() => {
              setIsNavActive(false);
            }}
          >
            {e.name}
            <span className="absolute left-0 w-full -bottom-2 h-[0.1rem] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-primary"></span>
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;
