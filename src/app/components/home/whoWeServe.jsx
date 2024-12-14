const WhoWeServe = () => {
  const data = [
    {
      heading: "Urban Delivery and Logistics Companies",
      image: "/assets/image/1.png",
      subhead: "Companies using electric trikes for last-mile deliveries.",
    },
    {
      heading: "Public and Private Transport Operators",
      subhead:
        "Organizations that deploy electric trikes for city commuting or tourism.",
      image: "/assets/image/3.png",
    },
    {
      heading: "Public and Private Transport Operators",
      subhead:
        "City governments focused on building sustainable urban mobility infrastructures.",
      image: "/assets/image/2.png",
    },
    {
      heading: "Municipalities and Government Entities",
      subhead:
        "Eco-conscious urban dwellers using electric trikes for personal transportation.",
      image: "/assets/image/4.png",
    },
  ];

  return (
    <section className="bg-white border-b border-[#F0F0F0]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto">
        <div className="w-[55%] text-left mb-20">
          <h3 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-4 font-onest">
            Who We Serve
          </h3>
          <p className="text-lg text-[#454545] font-geist">
            We serve eco-conscious individuals, urban delivery businesses, and
            transport operators. Our solutions are tailored to meet their unique
            needs for efficient and sustainable mobility.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {data.map((item, i) => {
            return (
              <div
                // style={{ background: `url(${item?.image})` }}
                key={i}
                className="relative w-[596px] h-[399px] bg-center bg-cover rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <div
                  style={{ backgroundImage: `url(${item?.image})` }}
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.2]"
                ></div>
                <div
                  className="absolute bottom-0 h-[210px] w-full rounded-2xl z-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(43, 40, 43, 0.7) 73.91%)",
                  }}
                ></div>
                <div className="absolute z-20 pl-6 pt-[18rem]">
                  <p className="font-bold text-xl text-white font-onest">
                    {item?.heading}
                  </p>
                  <p className="font-medium text-lg text-[#f5f5f5] font-geist">
                    {item?.subhead}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
