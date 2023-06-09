import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../localstore/LocalData";
import { hoverLinkTransition } from "../../style";
import { Link } from "react-scroll";
import portfolioContext from "../../store/AppContext";

const MobileNav = () => {

  const {isMobileMenuActive, closeMobileActiveHandler, openMobileActiveHandler} = useContext(portfolioContext)
  
  return (
    <nav className="mobileNav transition-opacity duration-300">
      <div
        className={`${
          isMobileMenuActive
            ? "opacity-40 w-screen h-screen bg-mildMain dark:bg-lowWhite overlay"
            : "hidden"
        }`}
        onClick={closeMobileActiveHandler}
      ></div>

      <div className="mobileNavBtn">
        {!isMobileMenuActive ? (
          <span
            className="text-4xl text-main cursor-pointer hamburger transition duration-300 ease-in-out"
            onClick={openMobileActiveHandler}
          >
            <GiHamburgerMenu />
          </span>
        ) : (
          <span
            className="text-4xl text-main cursor-pointer closeBtn transition duration-300 ease-in-out"
            onClick={closeMobileActiveHandler}
          >
            <AiOutlineClose />
          </span>
        )}
      </div>
      <ul
        className={`${
          isMobileMenuActive
            ? "w-44 flex flex-col gap-y-6 pl-8 bg-white dark:bg-lowDark pt-5 navLinks"
            : "hidden"
        }`}
      >
        {navLinks.map((link) => {
          return (
            <li
              key={link.navLinksRef}
            >
              <Link
              className={`flex justify-center gap-x-2 rounded-xl py-2 items-center text-2xl text-center text-lowDark bg-lowWhite hover:bg-main hover:text-white lg:text-dark ${hoverLinkTransition}`}
                onClick={closeMobileActiveHandler}
                activeClass="active"
                to={link.navLinksRef}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link.navLinksIcons} {link.navLinkText}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
