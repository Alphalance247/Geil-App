const BatteryEfficiency = () => {
  const data = [
    {
      figure: "01",
      valueprop: "Battery Energy Density ",
      properties:
        "Geil batteries offer superior energy density, providing greater efficiency and longer-lasting power compared to standard Li-ion and lead-acid batteries. Not only are they more affordable, but their advanced design makes them the smart, powerful choice for all e-vehicles.",
    },
    {
      figure: "02",
      valueprop: "Zero Maintenance",
      properties:
        "Say goodbye to the hassle of constant upkeep. Unlike lead-acid batteries that need water checks and cleaning, Geil’s lightweight Li-Ion batteries are maintenance-free and easy on your wallet. Swap it, forget it, and let us take care of the rest.",
    },
    {
      figure: "03",
      valueprop: "Battery Renewal",
      properties:
        "With Geil, you’ll have unlimited battery swaps for three years without worrying about downtime. Forget replacing lead-acid batteries every few months or basic Li-ion batteries every two years—Geil saves you time and money effortlessly.",
    },
    {
      figure: "04",
      valueprop: "Lightweight",
      properties:
        "Carrying heavy batteries is a thing of the past. Geil’s smart Li-Ion batteries weigh just 12 kg, making your ride lighter and smarter. Travel without the burden and enjoy real-time updates every step of the way.",
    },
  ];
  return (
    <section className="bg-white border-b border-t border-[#F0F0F0]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto max-lg:py-16">
        <div className="w-[55%] text-left mb-16 max-xl:w-[75%] max-lg:w-[85%]">
          <h3 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-4 font-onest">
            Smart Geil Lithium-Ion Batteries Designed for Efficient and Reliable
            Electric Mobility
          </h3>
          <p className="text-lg text-[#454545] font-geist">
            Why settle for standard Li-ion or lead-acid batteries when you can
            have a smarter, more powerful, and efficient solution with Geil
            batteries?
          </p>
        </div>

        <div className="flex flex-col">
          {data.map((item, i) => {
            return (
              <div
                className={`${
                  i === 3 ? "border-none" : " border-b"
                } border-[#d9d9d9] flex justify-between py-8`}
                key={i}
              >
                <div className="flex items-start gap-x-11 w-[47%] max-lg:gap-x-4">
                  <p className="font-geist font-medium text-sm text-[#595959]">
                    {item?.figure}
                  </p>
                  <p className="font-bold text-[#262626] text-lg font-geist">
                    {item?.valueprop}
                  </p>
                </div>
                <p className="text-base font-normal text-[#8C8C8C] font-geist w-[53%] max-lg:w-[65%]">
                  {item?.properties}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BatteryEfficiency;
