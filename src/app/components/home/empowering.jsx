import Image from "next/image";

const Empowering = () => {
  const data = [
    {
      heading: "Our Vision",
      subhead:
        "To create a sustainable future where electric tricycles and motorcycles have a seamless and accessible charging network, enabling efficient and eco-friendly urban mobility.",
    },
    {
      heading: "Our Mission",
      subhead:
        "To develop innovative, reliable, and user-friendly charging  infrastructure that supports the growth of electric tricycles and motorcycles, advancing urban sustainability and helping cities meet their carbon reduction targets.",
    },
  ];
  return (
    <section className="bg-white" id="about">
      <div className="max-w-[1280px] px-8 py-24 mx-auto max-lg:py-16 max-md:px-4 max-sm:py-12">
        <div className="grid grid-cols-[50%auto] gap-[63px] mb-12 max-lg:gap-8 max-sm:grid-cols-1">
          <div>
            <h1 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-6 font-onest max-lg:text-2xl">
              Empowering Sustainable Urban Mobility
            </h1>
            <p className="text-xl font-normal text-[#454545] font-onest max-lg:text-sm">
              GEIL is a forward-thinking technology and infrastructure company
              dedicated to building the next generation of charging solutions
              for electric tricycles and motorcycles. As cities globally move
              toward greener, more sustainable transportation options, electric
              tricycles and motorcycles are becoming a popular choice for both
              personal and commercial transport due to their efficiency and
              versatility.
              <br />
              <br />
              Our mission is to empower this transition by providing robust,
              accessible, and innovative charging infrastructure that meets the
              unique requirements of tricycles and motorcycles, helping to build
              a clean and sustainable future.
            </p>
          </div>

          <div>
            <img
              src="/assets/image/charge.gif"
              width={564}
              height={432}
              alt="recharging gif"
              className=" rounded-2xl h-fit w-[564px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {data.map((item, i) => {
            return (
              <div
                className="p-8 rounded-2xl border border-[#D9D9D9] max-lg:p-4"
                key={i}
              >
                <p className="text-[#262626] text-2xl font-bold mb-2 font-onest max-lg:text-base">
                  {item?.heading}
                </p>
                <p className="font-normal text-base text-[#454545] font-geist max-lg:text-sm">
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

export default Empowering;
