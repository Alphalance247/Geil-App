import Image from "next/image";

const Investment = () => {
  const data = [
    {
      heading: "Expanded Network",
      image: "/assets/icon/1.svg",
      subhead: "Grow your reach and connect with more opportunities.",
    },
    {
      heading: "Simplified Operations",
      subhead: "Stay in control with real-time updates & transparency.",
      image: "/assets/icon/3.svg",
    },
    {
      heading: "Steady Income",
      subhead: "Enjoy consistent earnings you can count on.",
      image: "/assets/icon/2.svg",
    },
    {
      heading: "Join the EV Movement",
      subhead:
        "Be part of the future and drive the shift to electric mobility.",
      image: "/assets/icon/4.svg",
    },
  ];
  return (
    <section className="bg-white border-b-1 border-[#F0F0F0]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto">
        <div className="flex justify-between mb-20">
          <div className="w-[80%]">
            <p className="text-base font-semibold text-[#ED645E] mb-2">
              BENEFITS FOR PLATFORM PARTNERS
            </p>
            <h3 className="text-4xl tracking-[-2%] text-[#262626] font-bold">
              Unlock Exclusive Investment Advantages
            </h3>
          </div>

          <div className="w-[70%]">
            <p className="text-[#454545] text-lg font-normal mb-6">
              Discover the benefits of partnering with us, designed to enhance
              your business, drive growth, and keep you ahead in the EV
              revolution. Here’s what you gain:
            </p>
            <button className="px-6 py-[10px] text-[#1F1F1F] font-bold text-sm bg-[#6BD051] rounded-[30px]">
              Register Your Interest
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="border border-[#f0f0f0] bg-white rounded-2xl p-6"
              >
                <Image src={item?.image} width={40} height={40} alt="icons" />
                <p className="text-[#262626] text-lg font-bold mt-4 mb-2">
                  {item?.heading}
                </p>
                <p className="text-base text-[#454545] font-normal">
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

export default Investment;
