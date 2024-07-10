import atharv from "/img/atharv2.jpg";

function About({ scroll }) {
  return (
    <div className=" w-full md:h-full flex flex-col items-center gap-8" id="about">
      <div className={`info_title text-[22vw] mt-20 md:mt-0`}>ABOUT</div>
      <div
        className={`info_container flex flex-col items-center gap-8 p-0 md:p-4 md:-mt-[13.2vw] ${
          scroll >= 500 ? "md:translate-y-0" : "md:translate-y-[10vw]"
        }`}
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
            <div className="text-lg md:text-xl">Pune/Sawantwadi</div>
          </div>
        </div>

        <div>
          Currently pursuing Bachelor's degree in Computer Applications, eager
          to kick-start a career in full stack development. <br />A fast
          learner, detail-oriented, and committed to staying updated with the
          latest technologies. <br />
          Excited to contribute my skills and enthusiasm to a dynamic
          development team.
        </div>
      </div>
    </div>
  );
}

export default About;
