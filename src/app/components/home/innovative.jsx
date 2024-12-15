const Innovative = () => {
  const refill = [
    {
      heading: "Time to Refill",
      subhead:
        "Why spend hours charging your vehicle? With Geil, you can swap your battery and get back on the road in under 2 minutes—fast and convenient, just like refueling.",
    },
    {
      heading: "Technology Advancement",
      subhead:
        "Every swap with Geil gives you instant access to advanced Lithium battery technology. Our platform ensures peak performance by managing all battery parameters with data-driven precision.",
    },
    {
      heading: "Range Anxiety",
      subhead:
        "Geil eliminates range anxiety with a combination of reliable batteries and an extensive swapping network, ensuring a consistent and dependable travel range.",
    },
    {
      heading: "Battery Lifespan",
      subhead:
        "Geil offers a 3-year commitment with every subscription, giving you peace of mind and eliminating worries about battery renewal or maintenance.",
    },
    {
      heading: "Battery Lifespan",
      subhead:
        "Geil offers a 3-year commitment with every subscription, giving you peace of mind and eliminating worries about battery renewal or maintenance.",
    },
  ];
  return (
    <section className="bg-[#f5f5f5] border-t border-[#F0F0F0]">
      <div className="max-w-[1280px] px-6 py-24 mx-auto max-lg:py-16 max-md:px-4 max-md:py-12">
        <div className="w-[55%] mx-auto text-center mb-20 max-xl:w-[80%] max-md:w-full max-md:mb-10">
          <h3 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-4 font-onest max-md:text-2xl">
            Innovative Solutions for Smarter Electric Mobility
          </h3>
          <p className="text-lg text-[#454545] font-geist max-md:text-base">
            Geil powers the future of electric mobility with smart charging,
            battery swapping, and innovative solutions for electric trikes and
            light vehicles.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {refill.map((item, i) => {
            return (
              <div
                className="bg-[url('/assets/image/refill.png')] w-[full] h-[418px] flex flex-col justify-between px-8 py-10 rounded-br-2xl rounded-tr-2xl bg-cover max-md:p-5"
                key={i}
              >
                <p className="text-white font-bold text-xl font-onest">
                  {item?.heading}
                </p>
                <p className="font-normal text-lg text-[#f5f5f5] font-geist">
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

export default Innovative;
