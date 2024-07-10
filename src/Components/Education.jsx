function Education({ scroll }) {
    return (
        <div className="w-full md:h-full flex flex-col items-center gap-10" id="education">
            <div className={`info_title text-[13.5vw] mt-24 md:mt-4`}>EDUCATION</div>
            <div className={`info_container p-4 pt-0 md:-mt-[9.3vw] space-y-10 ${scroll >= 1000 ? 'md:translate-y-0' : 'md:translate-y-[10vw]'}`}>
                <div className='space-y-2'>
                    <div className="font-bold text-md">Undergraduation (2022-present)</div>
                    <div className="text-md">Bachelor of Computer Applications </div>
                    <div className='text-sm'>
                        MES's Abasaheb Garware College, Pune
                        affiliated to Savitribai Phule Pune University.
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className="font-bold text-md">HSC (2020-2022) </div>
                    <div className="text-sm">Dr. V. K. Toraskar Jr College, Banda
                        Sawantwadi, Sindhudurg
                        Passed with 86%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
