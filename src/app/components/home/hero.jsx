const Hero = () => {
  return (
    <section className="bg-[#141414]">
      <div className="relative bg-[url('/assets/image/heroImg.png')] max-w-[1430px] h-[866px] py-[12rem] mx-auto bg-no-repeat bg-cover bg-center">
        <div className="absolute w-full opacity-70 h-full bg-black top-0 bottom-0"></div>
        <div className="w-[80%] mx-auto absolute inset-0 flex flex-col justify-center items-center text-center z-1">
          <h1 className="text-8xl text-white tracking-[-2%] mb-10 font-onest">
            <span className="text-[#ED645E] font-extrabold">
              Powering the Future
            </span>{" "}
            <span className=" font-medium">
              of Electric Tricycles & Motorcycles
            </span>
          </h1>
          <p className="text-white text-2xl font-semibold font-onest">
            Charge Faster. Move Greener.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
