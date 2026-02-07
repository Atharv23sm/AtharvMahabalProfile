function Education() {
    return (
        <div className="w-full md:h-full flex flex-col items-center gap-10" id="education">
            <div className={`info_title text-[13.5vw] mt-24 md:mt-4`}>EDUCATION</div>
            <div className={`info_container p-4 pt-0 md:-mt-[9.3vw] space-y-10`}>
            <div className='space-y-2'>
                    <div className="font-bold text-md">Post-graduation (2025-2027)</div>
                    <div className="text-md">Masters in Management Studies </div>
                    <div className='text-sm'>
                        Sydenham Institute of Management Studies (SIMSREE), Mumbai
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className="font-bold text-md">Under-graduation (2022-2025)</div>
                    <div className="text-md">Bachelor of Computer Applications </div>
                    <div className='text-sm'>
                        MES's Abasaheb Garware College, Pune
                        Passed with 90.40%
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
