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
      <div className={`${isMobileMenuActive ? "opacity-40 w-screen h-screen bg-mildMain overlay" : "hidden"}`} onClick={closeMobileActiveHandler}></div>

      <div className="mobileNavBtn">
        {!isMobileMenuActive ? 
        <span className="text-4xl text-main cursor-pointer hamburger transition duration-300 ease-in-out" onClick={openMobileActiveHandler}><GiHamburgerMenu /></span> : 
        <span className="text-4xl text-main cursor-pointer closeBtn transition duration-300 ease-in-out" onClick={closeMobileActiveHandler}><AiOutlineClose /></span>}
      </div>
      <ul className={`${isMobileMenuActive ? "w-44 flex flex-col gap-y-6 pl-8 bg-white pt-5 navLinks" : "hidden"}`}>
        {navLinks.map((link) => {
          return (
            <li key={link.navLinksRef} className={`flex justify-center rounded-xl py-2 items-center text-2xl text-center text-lowDark bg-lowWhite hover:bg-main hover:text-white lg:text-dark ${hoverLinkTransition}`}>
              <a href={`#${link.navLinksRef}`} className="flex justify-center items-center gap-x-2" onClick={closeMobileActiveHandler}>
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
