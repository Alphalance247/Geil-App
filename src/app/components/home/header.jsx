"use client";
import Button from "../Button";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = ({ handleNavClick }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navs = [
    { id: 1, name: "About us", scrollSection: "services" },
    { id: 2, name: "CORE OFFERINGS", scrollSection: "about" },
    { id: 3, name: "SOLUTION", scrollSection: "FAQ" },
    { id: 4, name: "WHO WE SERVE", scrollSection: "contact" },
    { id: 5, name: "TECHNOLOGY", scrollSection: "contact" },
    { id: 6, name: "battery", scrollSection: "contact" },
  ];

  return (
    <header className="bg-[#141414]">
      <div className="transition-all duration-500 max-w-[1300px] mx-auto px-8 flex justify-between items-center py-[18px]">
        <Image src="/assets/icon/logo.svg" width={111} height={34} alt="logo" />

        <nav className="transition-all duration-500 max-lg:hidden">
          {navs.map((items, i) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex cursor-pointer uppercase max-lg:flex max-lg:flex-col max-lg:pt-12 max-lg:items-center max-sm:pt-4"
              >
                <li className="text-[white] cursor-pointer px-4 text-sm font-semibold font-geist max-xl:text-xs max-xl:px-2">
                  {items?.name}
                </li>
              </ul>
            );
          })}
        </nav>

        <div className="max-lg:hidden">
          <Button />
        </div>

        {/* <div className="max-lg:hidden">
          <Button onClick={() => handleNavClick(null, "contact")} />
        </div> */}

        <div className="lg:hidden transition-all duration-500 grow flex justify-end items-center h-10 gap-8">
          <button
            className="transition-all duration-500 text-white p-1 text-4xl hover:p-2"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
