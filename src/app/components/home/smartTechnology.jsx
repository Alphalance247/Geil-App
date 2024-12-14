import Image from "next/image";

const SmartTechnology = () => {
  const data = [
    {
      heading: "Telematics",
      image: "/assets/image/fuelmeter.png",
      subhead:
        "With Geil’s Telematics system, we track vital data like location, speed, and driving efficiency. It also sends alerts for things like speeding or accidents, helping ensure safety, reduce risks, and optimize battery use in real time.",
    },
    {
      heading: "Data-Driven",
      subhead:
        "Geil’s advanced charging system not only monitors battery health but also provides real-time data to optimize performance and extend lifespan. It ensures your battery is always running at its best, no matter how often you charge.",
      image: "/assets/image/typing.png",
    },
  ];
  return (
    <section className="bg-[#FCFCFC] border-b border-[#f0f0f0]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto">
        <div className="w-[55%] mx-auto text-center mb-20">
          <h3 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-4 font-onest">
            Driving the Future of E-Vehicles with Smart Technology
          </h3>
          <p className="text-lg text-[#454545] font-geist">
            At Geil, we’re shaping the future of electric vehicles with smarter,
            real-time technology that enhances performance and efficiency.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {data.map((items, i) => {
              return (
                <div
                  className="p-8 border border-[#f0f0f0] rounded-2xl bg-[#f5f5f5]"
                  style={{ boxShadow: "0px 2px 6px 0px #1018280F" }}
                  key={i}
                >
                  <p className="text-[#262626] text-lg font-bold font-geist">
                    {items?.heading}
                  </p>
                  <p className="text-base text-[#595959] font-normal mt-2 mb-8 font-geist">
                    {items?.subhead}
                  </p>
                  <img
                    src={items?.image}
                    alt={items?.heading}
                    width={536}
                    height={305}
                  />
                </div>
              );
            })}
          </div>

          <div
            className="bg-[#F5F5F5] grid grid-cols-2 gap-8 p-8 rounded-2xl"
            style={{ boxShadow: "0px 2px 6px 0px #1018280F" }}
          >
            <div className="font-geist">
              <p className="text-[#262626] text-lg font-bold ">
                BMS (Battery Management System)
              </p>
              <p className="text-base text-[#595959] font-normal mt-2">
                Geil batteries are equipped with an intelligent Battery
                Management System (BMS), which keeps them protected, balanced,
                and running smoothly. It monitors key metrics like temperature
                and voltage, ensuring everything works seamlessly, even when
                you're on the go.
              </p>
            </div>

            <Image
              src="/assets/image/meme.png"
              alt="crypto"
              width={568}
              height={379}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTechnology;
