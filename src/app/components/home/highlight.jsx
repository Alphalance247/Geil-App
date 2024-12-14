const Highlight = () => {
  const paragraph = [
    "Urban-Focused Design",
    "SPECIALIZED FOR TRICYCLYES & MOTOCYCLES",
    "Sustainability-Oriented",
  ];
  return (
    <section className="bg-[#0f0f0f]">
      <div className="max-w-[1280px] px-8 py-4 flex justify-between mx-auto gap-36">
        {paragraph.map((item, i) => {
          return (
            <p
              key={i}
              className="text-sm font-bold tracking-[0.5px] text-[#fcfcfc] uppercase font-geist"
            >
              {item}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Highlight;
