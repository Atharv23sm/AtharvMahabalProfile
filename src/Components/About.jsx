
function About({ scroll }) {

    return (
        <div className="w-full md:pb-32 flex flex-col items-center gap-8" id="about">
            <div className={`info_title text-[23vw] mt-24 md:mt-0`}>ABOUT</div>
            <div className={`info_container p-3 md:-mt-[13.7vw] border-t border-l space-y-6 pb-0 ${scroll >= 500 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
                <div className="flex flex-wrap text-2xl md:text-[2.7vw] font-bold">Atharv Shrikant Mahabal</div>
                <div className="">Pune/Sawantwadi</div>
                <div>Currently pursuing Bachelor's degree in Computer Applications, eager to kick-start a career in full stack development. <br />A fast learner, detail-oriented, and committed to staying updated with the latest technologies. <br />Excited to contribute my skills and enthusiasm to a dynamic development team.</div>
            </div>
        </div>
    )
}

export default About