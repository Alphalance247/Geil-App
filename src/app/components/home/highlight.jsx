import Image from "next/image";

const Highlight = () => {
  const paragraph = [
    "Urban-Focused Design",
    "SPECIALIZED FOR TRICYCLYES & MOTOCYCLES",
    "Sustainability-Oriented",
  ];
  return (
    <section className="bg-[#262626]">
      <div className="max-w-[1280px] px-8 py-4 flex justify-between mx-auto gap-36">
        {paragraph.map((item, i) => {
          return (
            <div key={i} className="flex gap-x-4 items-center">
              <Image
                src="/assets/icon/mark.svg"
                width={16}
                height={16}
                alt="mark"
              />
              <p className="text-sm font-bold tracking-[0.5px] text-[#fcfcfc] uppercase font-geist">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlight;
