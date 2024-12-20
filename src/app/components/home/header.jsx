"use client";
import Button from "../Button";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavClick = (i, scrollTo) => {
    const element = document.getElementById(scrollTo);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setShowMobileMenu(false);
  };

  const navs = [
    { id: 1, name: "About us", scrollSection: "about" },
    { id: 3, name: "SOLUTION", scrollSection: "solution" },
    { id: 4, name: "WHO WE SERVE", scrollSection: "serve" },
    { id: 5, name: "TECHNOLOGY", scrollSection: "technology" },
  ];

  return (
    <header className="bg-[#ffff] border-b border-[#F0F0F0]">
      <div className="transition-all duration-500 max-w-[1300px] mx-auto px-8 flex justify-between items-center py-[18px]">
        <Link href="/">
          <Image
            src="/assets/icon/logo.svg"
            width={111}
            height={34}
            alt="logo"
          />
        </Link>

        <nav className="transition-all duration-500 max-lg:hidden">
          {navs.map((items, i) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex cursor-pointer uppercase max-lg:flex max-lg:flex-col max-lg:pt-12 max-lg:items-center max-sm:pt-4"
              >
                <li
                  className="text-[#595959] cursor-pointer px-4 text-sm font-semibold font-geist max-xl:text-xs max-xl:px-2"
                  onClick={() => handleNavClick(i, items?.scrollSection)}
                >
                  {items?.name}
                </li>
              </ul>
            );
          })}
        </nav>

        <div className="max-lg:hidden">
          <Button onClick={() => handleNavClick(null, "get-in-touch")} />
        </div>

        <div className="lg:hidden transition-all duration-500 grow flex justify-end items-center h-10 gap-8">
          <button
            className="transition-all duration-500 text-black p-1 text-4xl hover:p-2"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white ${
          showMobileMenu ? "h-auto" : "h-0"
        }`}
      >
        <nav className="justify-start items-center gap-4 flex flex-col py-8 px-3">
          {navs.map((items, i) => {
            return (
              <ul key={items?.id} className="">
                <li
                  className="text-[#4f4f4f] cursor-pointer px-4 text-sm font-semibold font-geist block"
                  onClick={() => handleNavClick(i, items?.scrollSection)}
                >
                  {items?.name}
                </li>
              </ul>
            );
          })}

          <div>
            <Button onClick={() => handleNavClick(null, "get-in-touch")} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
