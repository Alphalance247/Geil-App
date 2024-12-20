"use client";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import Image from "next/image";

const WhatWeOffer = () => {
  const [isOpen, setIsOpen] = useState(0);
  const handleToggle = (i) => {
    if (isOpen === i) {
      setIsOpen(0);
    } else {
      setIsOpen(i);
    }
  };
  const Offerings = [
    {
      offer: "Charging Stations for Trikes",
      benefits: [
        {
          heading: "Fast charging units ",
          subhead:
            "tailored to the battery specifications of electric tricycles & motorcycles.",
        },
        {
          heading: "Space-saving ",
          subhead: "designs perfect for dense urban areas.",
        },
        {
          heading: "Compact stations ",
          subhead: "adaptable for high or low traffic locations.",
        },
      ],
    },
    {
      offer: "Battery-Swapping Solutions",
      benefits: [
        {
          heading: "Fast charging units ",
          subhead:
            "tailored to the battery specifications of electric tricycles & motorcycles.",
        },
        {
          heading: "Space-saving ",
          subhead: "designs perfect for dense urban areas.",
        },
        {
          heading: "Compact stations ",
          subhead: "adaptable for high or low traffic locations.",
        },
      ],
    },
    {
      offer: "Sustainable Energy Solutions",
      benefits: [
        {
          heading: "Fast charging units ",
          subhead:
            "tailored to the battery specifications of electric tricycles & motorcycles.",
        },
        {
          heading: "Space-saving ",
          subhead: "designs perfect for dense urban areas.",
        },
        {
          heading: "Compact stations ",
          subhead: "adaptable for high or low traffic locations.",
        },
      ],
    },
    {
      offer: "Software Solutions",
      benefits: [
        {
          heading: "Fast charging units ",
          subhead:
            "tailored to the battery specifications of electric tricycles & motorcycles.",
        },
        {
          heading: "Space-saving ",
          subhead: "designs perfect for dense urban areas.",
        },
        {
          heading: "Compact stations ",
          subhead: "adaptable for high or low traffic locations.",
        },
      ],
    },
  ];
  return (
    <section className="bg-white border-t border-[#F0F0F0]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto flex gap-8 h-auto max-lg:py-16 max-lg:flex-col max-md:px-4 max-md:py-12">
        <div className="flex-1">
          <p className="text-base font-semibold text-[#ED645E] mb-4 font-geist">
            WHAT WE OFFER
          </p>
          <h3 className="text-4xl tracking-[-2%] text-[#262626] font-bold mb-4 font-onest">
            Our Core Offerings
          </h3>
          <p className="text-[#454545] text-lg font-normal mb-8 font-geist">
            Innovative solutions for fast charging, battery swaps, smart tech,
            and sustainable energy.
          </p>

          <div className="flex flex-col gap-y-3">
            {Offerings.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`bg-[#f5f5f5] cursor-pointer  rounded-lg hover:transition-all hover:duration-700 hover:scale-[1.01] hover:bg-white ${
                    isOpen === i ? "border-none" : "border-[#d9d9d9] border"
                  }`}
                >
                  {isOpen === i && (
                    <hr className="w-[284px] h-[6px] bg-[#6BD051] rounded-tl-lg" />
                  )}
                  <div className="px-6 py-5">
                    <div
                      className="flex justify-between"
                      onClick={() => handleToggle(i)}
                    >
                      <p className="text-[#141414] text-lg font-semibold font-geist">
                        {item?.offer}
                      </p>
                      <button className="text-2xl">
                        {isOpen === i ? <HiOutlineMinus /> : <GoPlus />}
                      </button>
                    </div>
                    {isOpen === i && (
                      <div className="mt-6">
                        {item?.benefits.map((el, i) => {
                          return (
                            <p
                              className="text-[#262626] text-base text-wrap mb-1 font-geist"
                              key={i}
                            >
                              <span className="font-semibold">
                                {el?.heading}
                              </span>
                              <span className="font-normal">{el?.subhead}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 h-auto object-center object-cover">
          <Image
            src="/assets/image/panel.png"
            className="w-full h-full"
            alt="refuelingImage"
            width={687}
            height={669}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
