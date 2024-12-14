import Image from "next/image";

const Empowering = () => {
  const data = [
    {
      heading: "Our Vision",
      subhead:
        "To create a sustainable future where electric tricycles & motorcycles have a seamless and accessible charging network, enabling efficient and eco-friendly urban mobility.",
    },
    {
      heading: "Our Mission",
      subhead:
        "To develop innovative, reliable, and user-friendly charging infrastructure that supports the growth of electric tricycles & motorcycles, advancing urban sustainability and helping cities meet their carbon reduction targets.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] px-8 py-24 mx-auto">
        <div className="grid grid-cols-[49%auto] gap-[63px] mb-12">
          <div>
            <h1 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-6 font-onest">
              Empowering Sustainable Urban Mobility
            </h1>
            <p className="text-xl font-normal text-[#454545] font-onest">
              At Green Energy Infrastructure Limited (GEIL), we are shaping the
              future of urban mobility with innovative charging solutions for
              electric trikes and light electric vehicles. As cities transition
              to sustainable transportation, our mission is clear: to empower
              this transformation with cutting-edge charging infrastructure that
              ensures seamless and eco-friendly mobility.
              <br />
              <br />
              We are more than just a technology company; we are catalysts for
              sustainable change, helping municipalities, businesses, and
              individuals embrace cleaner transportation solutions.
            </p>
          </div>

          <img
            src="/assets/image/charge.png"
            width={564}
            height={432}
            alt="recharging gif"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {data.map((item, i) => {
            return (
              <div className="p-8 rounded-2xl border border-[#D9D9D9]" key={i}>
                <p className="text-[#262626] text-2xl font-bold mb-2 font-onest">
                  {item?.heading}
                </p>
                <p className="font-normal text-base text-[#454545] font-geist">
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
