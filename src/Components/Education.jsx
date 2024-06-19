function Education({ scroll }) {
    return (
        <div className="w-full flex flex-col items-center gap-10 pb-12 md:pb-24" id="education">
            <div className={`w-full flex justify-center text-[13.5vw] opacity-40 font-phonk tracking-tight mt-32 md:mt-10 leading-none`}>EDUCATION</div>
            <div className={`w-[100%] md:w-[95%] md:backdrop-blur-sm md:bg-[#0008] md:-mt-[9.3vw] border-b-[1px] border-l-[1px] md:border-0 md:rounded-2xl flex flex-col gap-6 p-6 pt-0 md:p-12 md:text-lg duration-1000 ${scroll >= 1000 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
                <div className="flex flex-col gap-8 md:gap-6">
                    <div className='flex flex-col gap-2'>
                        <div className="font-bold text-md">Undergraduation (2022-present)</div>
                        <div className="text-md">Bachelor of Computer Applications </div>
                        <div className='text-sm'>
                            MES's Abasaheb Garware College, Pune
                            affiliated to Savitribai Phule Pune University.
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className="font-bold text-md">HSC (2020-2022) </div>
                        <div className="text-sm">Dr. V. K. Toraskar Jr College, Banda
                            Sawantwadi, Sindhudurg
                            Passed with 86%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education