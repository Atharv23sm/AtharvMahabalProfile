import { FaArrowUp } from 'react-icons/fa'
import bright from '/img/bright.png'
import score from '/img/score.png'
import { FaGithubAlt } from 'react-icons/fa6'

function Projects({ scroll }) {
    return (
        <div className="w-full flex flex-col gap-4 md:gap-0 items-center md:pb-8 line" id="projects">
            <div className={`w-full flex justify-center text-[14vw] opacity-40 font-phonk tracking-tight mt-24 md:mt-0 leading-none`}>PROJECTS</div>
            <div className={`w-full md:w-[95%] flex flex-col gap-4 md:gap-10 md:rounded-2xl md:bg-[#0008] md:backdrop-blur-sm md:p-8 md:-mt-[7vw] duration-1000 ${scroll >= 2250 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
                <div className='w-full flex flex-col md:flex-row gap-4 md:items-center border-b-[1px] border-l-[1px] md:border-0 p-4 pt-0 md:p-0'>
                    <div className='w-32 md:w-60 h-max relative flex justify-center overflow-hidden'>
                        <a href="https://bright-career.vercel.app"><img src={bright} className='w-32 md:w-72 border-[1px] md:border-0' />
                            <div className='absolute w-32 h-32 -right-16 -bottom-20 blur-xl bg-[#ff0] flex justify-start items-start' />
                        </a>
                        <FaArrowUp className='absolute z-30 right-1 bottom-1 text-black rotate-45' size={24} />
                    </div>
                    <div>
                        <a href="https://bright-career.vercel.app" className='text-lg md:text-2xl flex items-center gap-2 hover:text-[#ff0] duration-300'>Bright
                            <FaArrowUp className='rotate-45' size={16} />
                        </a>
                        <div className='text-xs md:text-sm'>Discover your next career move with Bright.</div>
                        <div className='text-xs md:text-sm'>
                            A job search platform built with
                            React, Tailwind CSS,
                            Node.js, Express and MongoDB.
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4 items-end md:items-center border-t-[1px] border-r-[1px] md:border-0 p-4 pb-0 md:p-0'>
                    <div className='w-32 md:w-60 h-max relative flex justify-center overflow-hidden'>
                        <a href="https://score-football.vercel.app"><img src={score} className='w-48 md:w-72 border-[1px] md:border-0' />
                            <div className='absolute w-32 h-32 -right-16 -bottom-20 blur-xl bg-[#0f9] flex justify-start items-start' />
                        </a>
                        <FaArrowUp className='absolute z-30 right-1 bottom-1 text-black rotate-45' size={24} />
                    </div>
                    <div className='text-end md:text-start'>
                        <a href="https://scroll-football.vercel.app" className='text-lg md:text-2xl flex justify-end md:justify-start items-center gap-2 hover:text-[#0f9] duration-300'>Score
                            <FaArrowUp className='rotate-45' size={16} />
                        </a>
                        <div className='text-xs md:text-sm'>Never miss a game with Score Web-App</div>
                        <div className='text-xs md:text-sm'>
                            Get Football Fixtures and News. Built with Next.js, Tailwind CSS, Third Party API.
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-2 items-center justify-center md:justify-start text-xs  md:text-lg'>
                    More projects are showcased on the github.
                    <a href="https://github.com/Atharv23sm" className="p-2 px-10 rounded-full relative overflow-hidden flex justify-center items-center group bg-[#123]">
                        <div className={`absolute p-16 rounded-full bg-gradient-to-r from-[#246] to-[#67f] translate-x-10 md:translate-x-12 blur-[1px] group-hover:translate-x-0 group-hover:blur-0 flex justify-center items-center duration-1000`}><FaGithubAlt size={32} /></div>
                        <div className='z-20 group-hover:opacity-0 duration-500'>GitHub</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects