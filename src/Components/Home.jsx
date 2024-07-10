import atharv from "/img/atharv1.jpg"

function Home() {

    return (
        <div className="w-full h-full flex items-center justify-center">

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 relative">

                <img src={atharv} alt="Atharv img" className={`w-60 lg:w-72 left-20 z-10 duration-100 rounded-full md:rounded-3xl md:animate-[slide_3s]`} />

                <div className="overflow-hidden font-phonk text-[10vw] md:text-[6vw] text-center md:text-start leading-[9vw] md:leading-[5vw] pl-[2vw]">
                    <div className="md:animate-[wipe_3s]">
                        <div>ATHARV</div>
                        <div>MAHABAL</div>
                        <div className="text-lg md:text-3xl pt-4 md:pt-8">Tech Enthusiast</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
