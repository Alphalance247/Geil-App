import Button from "../Button";
import Image from "next/image";

const Header = ({ handleNavClick }) => {
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

        <div>
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
