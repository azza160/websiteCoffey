import { navLinkss } from "../../utils/constant";

function FooterLinks() {
  return (
    <>
      {navLinkss.map((e, i) => {
        return (
          <a
            href={e.link}
            key={i}
            className="hover:text-bg duration-300 cursor-pointer xl:text-lg"
          >
            {e.name}
          </a>
        );
      })}
    </>
  );
}

export default FooterLinks;
