import atharv from "/img/atharv1.jpeg";

function About() {
  return (
    <div
      className=" w-full md:h-full flex flex-col items-center gap-8"
      id="about"
    >
      <div className={`info_title text-[22vw] mt-20 md:mt-0`}>ABOUT</div>
      <div
        className={`info_container flex flex-col items-center gap-8 p-0 md:p-4 md:-mt-[13.2vw]`}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div>
            <img
              src={atharv}
              alt="atharv"
              className="w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] rounded-xl"
            />
          </div>

          <div className="space-y-2 md:space-y-4 text-2xl md:text-[2.7vw] font-bold">
            <div>Atharv Shrikant Mahabal</div>
            <div className="text-lg md:text-xl">Mumbai/Sawantwadi</div>
          </div>
        </div>

        <div>
        Aspiring finance enthusiast pursuing management studies 
        with a technical background in computer applications,<br />
        aiming to apply analytical skills to real-world business problems and contribute to strategic initiatives.
        </div>
      </div>
    </div>
  );
}

export default About;
