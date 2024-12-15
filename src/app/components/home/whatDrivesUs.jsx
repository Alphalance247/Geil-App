const WhatDrivesUs = () => {
  const data = [
    {
      heading: "Simple Pricing",
      subhead:
        "We believe in full transparency at Geil. Just pay the initial subscription fee, and then pay based on your usage. There's no minimum or maximum swap limit, and no daily charges required.",
    },
    {
      heading: "No Maintenance Worries",
      subhead:
        "Geil handles all battery maintenance for the entire lifespan, saving you maintenance costs and offering peace of mind. With each subscription, you’ll experience the power of advanced Li-ion batteries for 3 years.",
    },
    {
      heading: "Smart Battery Technology",
      subhead:
        "Our batteries feature a smart BMS and telematics system, providing real-time data through a cloud-connected ecosystem. This ensures smooth and reliable rides by monitoring battery and driver parameters.",
    },
    {
      heading: "Always Ready to Go",
      subhead:
        "Geil’s goal is to eliminate any downtime for EVs, achieved through battery swaps at our Electric Mobility Stations. Once you join, all your battery needs are covered with zero replacement or service hassles.",
    },
  ];

  return (
    <section className="bg-[#141414] border-t border-[#F0F0F0] rounded-tl-[56px] rounded-tr-[56px]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto max-lg:py-16 max-md:px-4">
        <h3 className="text-center text-4xl font-bold text-white mb-20 font-onest max-md:text-2xl max-md:mb-10">
          What Drives Us?
        </h3>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {data.map((item, i) => {
            return (
              <div key={i} className="rounded-2xl bg-[#262626]">
                <p className="text-lg font-bold text-white py-4 px-6 rounded-tl-[16px] rounded-tr-[16px] font-geist">
                  {item?.heading}
                </p>
                <p className="text-lg text-white px-6 pt-6  bg-[#454545] h-[200px] rounded-2xl font-geist max-lg:h-[230px] max-lg:pb-6 max-lg:text-base max-md:pb-4">
                  {item?.subhead}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
