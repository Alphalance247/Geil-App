import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navs = [
    {
      id: 1,
      name: "About us",
      scrollSection: "services",
      img: "/assets/icon/facebook.svg",
      url: "#",
    },
    {
      id: 2,
      name: "CORE OFFERINGS",
      scrollSection: "about",
      img: "/assets/icon/linkedin.svg",
      url: "#",
    },
    {
      id: 3,
      name: "SOLUTION",
      scrollSection: "FAQ",
      img: "/assets/icon/x.svg",
      url: "#",
    },
    { id: 4, name: "WHO WE SERVE", scrollSection: "contact" },
    { id: 5, name: "TECHNOLOGY", scrollSection: "contact" },
    { id: 6, name: "battery", scrollSection: "contact" },
  ];

  const socialData = navs.slice(0, 3);
  return (
    <footer className="bg-[#141414]">
      <div className="transition-all duration-500 max-w-[1350px] mx-auto px-8 py-[5rem] max-lg:py-16 max-md:py-12 max-md:px-4">
        <div className="flex justify-between items-center mb-20 max-md:flex-col max-md:justify-center max-md:gap-y-6 max-md:mb-10">
          <Image
            src="/assets/icon/logo.svg"
            width={111}
            height={34}
            alt="logo"
          />

          <nav className="">
            {navs.map((items, i) => {
              return (
                <ul
                  key={items?.id}
                  className="inline-flex cursor-pointer uppercase  max-lg:flex max-md:flex-col max-md:justify-center max-md:text-center"
                >
                  <li className="text-[white] cursor-pointer px-4 text-sm font-semibold font-geist max-xl:text-xs max-xl:px-2 max-lg:text-center max-lg:mb-4">
                    {items?.name}
                  </li>
                </ul>
              );
            })}
          </nav>

          <div>
            {socialData.map((items, i) => {
              return (
                <div className="inline-flex" key={i}>
                  <a
                    href={items?.url}
                    className={`${i === 0 ? "pl-0" : "pl-6"}`}
                  >
                    <Image
                      src={items?.img}
                      width={32}
                      height={32}
                      alt="social links"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#373737] pt-10 flex justify-between max-md:justify-center max-md:text-center max-md:flex-col max-md:gap-y-4">
          <p className="text-sm font-medium font-geist text-[#BFBFBF]">
            © {new Date().getFullYear()} Green Energy Infrastructure Limited.
            All rights reserved.
          </p>

          <div className="flex gap-x-2 max-md:justify-center max-md:text-center max-md:flex-col max-md:gap-y-4">
            <div className="px-3 flex items-center gap-x-3 max-md:flex-col">
              <a
                href="#"
                aria-label="Terms-Condition"
                className="font-medium text-sm font-geist text-[#BFBFBF]"
              >
                Terms & Conditions{" "}
              </a>
              <span className="w-[2px] h-[2px] bg-[#BFBFBF] rounded-full inline-block"></span>
            </div>

            <div className="px-3 ">
              <a
                href="#"
                aria-label="privacy-policy"
                className="font-medium text-sm font-geist text-[#BFBFBF]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
