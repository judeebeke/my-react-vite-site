import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../localstore/LocalData";
import { hoverLinkTransition } from "../../style";

const MobileNav = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const openMobileActiveHandler = () => {
    setIsMobileMenuActive(true);
  };

  const closeMobileActiveHandler = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <nav className="mobileNav transition-opacity duration-300">
      <div className="mobileNavBtn">
        {!isMobileMenuActive ? 
        <span className="text-4xl text-main cursor-pointer" onClick={openMobileActiveHandler}><GiHamburgerMenu /></span> : 
        <span className="text-4xl text-main cursor-pointer" onClick={closeMobileActiveHandler}><AiOutlineClose /></span>}
      </div>
      <ul className={`${isMobileMenuActive ? "w-44 flex flex-col gap-y-6 pl-8 bg-white pt-5" : "hidden"}`}>
        {navLinks.map((link) => {
          return (
            <li key={link.navLinksRef} onClick={closeMobileActiveHandler} className={`flex justify-center rounded-xl py-2 items-center text-2xl text-center   text-main hover:bg-mildMain hover:text-white md:text-dark md:hover:text-main ${hoverLinkTransition}`}>
              <a href={`#${link.navLinksRef}`} className="flex justify-center items-center gap-x-2">
                {link.navLinksIcons} {link.navLinkText}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
