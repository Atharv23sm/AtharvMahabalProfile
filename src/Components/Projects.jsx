import { FaArrowUp } from 'react-icons/fa'
import bright from '/img/bright.png'
import score from '/img/score.png'
import { FaGithubAlt } from 'react-icons/fa6'

function Projects({ scroll }) {
    return (
        <div className="w-full flex flex-col items-center md:pb-20" id="projects">
            <div className={`info_title text-[14vw] mt-24 md:mt-0`}>PROJECTS</div>
            <div className={`info_container space-y-4 p-0 md:-mt-[7vw] ${scroll >= 2250 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
                <div className='project_container border-l p-4'>
                    <div className='project_img_container'>
                        <a href="https://bright-career.vercel.app"><img src={bright} className='w-32 md:w-72 border md:border-0' />
                            <div className='mask size-32 bg-[#ff0]' />
                        </a>
                        <FaArrowUp className='arrow' size={24} />
                    </div>
                    <div className='w-full group'>
                        <a href="https://bright-career.vercel.app" className='project_link md:text-2xl group-hover:text-[#ff0]'>Bright
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
                <div className='project_container border-r p-4 items-end'>
                    <div className='project_img_container'>
                        <a href="https://score-football.vercel.app"><img src={score} className='w-48 md:w-72 border md:border-0' />
                            <div className='mask size-32 bg-[#0f9]' />
                        </a>
                        <FaArrowUp className='arrow' size={24} />
                    </div>
                    <div className='text-end md:text-start w-full group'>
                        <a href="https://scroll-football.vercel.app" className='project_link justify-end md:text-2xl md:justify-start group-hover:text-[#0f9]'>Score
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