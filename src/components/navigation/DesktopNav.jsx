import { useState } from "react";
import { navLinks } from "../localstore/LocalData";
import { Link } from "react-scroll";

const DesktopNav = () => {
  const [currentNav, setCurrentNav] = useState(null);
  const [isNavFull, setIsNavFull] = useState(false);

  const openNavFullHandler = (linkId) => {
    setCurrentNav(linkId);
    setIsNavFull(true);
  };

  const closeNavFullHandler = () => {
    setCurrentNav(null);
    setIsNavFull(false);
  };

  return (
    <nav className="desktopNav">
      <ul className="list-none flex flex-col gap-y-6 ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.navLinkText}
              onMouseEnter={() => {
                openNavFullHandler(link.navLinkText);
              }}
              onMouseLeave={closeNavFullHandler}
            >
              <Link
                className={`${
                  currentNav === link.navLinkText && isNavFull
                    ? "w-auto"
                    : "w-14"
                } desktopNavList flex justify-center cursor-pointer items-center h-14 p-4 text-center text-2xl text-dark bg-lowWhite hover:bg-main hover:text-white rounded-full`}
                activeClass="active"
                to={link.navLinksRef}
                spy={true}
                smooth={true}
                duration={500}
              >
                <p>{link.navLinksIcons}</p>
                <span
                  className={`${
                    currentNav === link.navLinkText && isNavFull
                      ? "flex ml-2"
                      : "hidden ml-6 "
                  }`}
                >
                  {link.navLinkText}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
