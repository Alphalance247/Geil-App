const Hero = () => {
  return (
    <section className="bg-[#141414]">
      <div className="relative bg-[url('/assets/image/heroImg.png')]  h-[866px] py-[12rem] mx-auto bg-no-repeat bg-cover bg-center max-xl:h-[600px] max-lg:h-[500px] max-md:h-[350px]">
        <div className="absolute w-full inset-0 opacity-70 h-full bg-black top-0 bottom-0"></div>
        <div className="w-[80%] max-w-[1430px] mx-auto absolute inset-0 flex flex-col justify-center items-center text-center z-1 max-md:w-full">
          <h1 className="text-8xl text-white tracking-[-2%] mb-10 font-onest max-xl:text-6xl max-md:text-3xl">
            <span className="text-[#ED645E] font-extrabold">
              Powering the Future
            </span>{" "}
            <span className=" font-medium">
              of Electric Tricycles & Motorcycles
            </span>
          </h1>
          <p className="text-white text-2xl font-semibold font-onest max-md:text-xl">
            Charge Faster. Move Greener.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
