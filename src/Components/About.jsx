
function About({ scroll }) {

    return (
        <div className="w-full md:pb-24 flex flex-col items-center gap-8 relative" id="about">
            <div className={`w-full flex justify-center text-[23vw] opacity-40 font-phonk tracking-tight mt-24 md:mt-0 leading-none`}>ABOUT</div>
            <div className={`w-[100%] md:w-[95%] md:backdrop-blur-sm md:bg-[#0008] md:-mt-[13.7vw] border-t-[1px] border-l-[1px] md:border-0 md:rounded-2xl flex flex-col gap-6 p-3 pb-0 md:p-10 md:text-lg duration-1000 ${scroll >= 500 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
                <div className="flex flex-wrap text-2xl md:text-[2.7vw] font-bold">Atharv Shrikant Mahabal</div>
                <div className="">Pune/Sawantwadi</div>
                <div>Currently pursuing Bachelor's degree in Computer Applications, eager to kick-start a career in full stack development. <br />A fast learner, detail-oriented, and committed to staying updated with the latest technologies. <br />Excited to contribute my skills and enthusiasm to a dynamic development team.</div>
            </div>
        </div>
    )
}

export default About