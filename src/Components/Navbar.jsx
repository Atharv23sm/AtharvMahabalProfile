import { useEffect, useState } from "react"

import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa6"

function Navbar() {

  const [isBar, setIsBar] = useState(true)
  const [isWide, setIsWide] = useState()

  useEffect(() => {
    setIsWide(window.innerWidth > 768 ? true : false)
    addEventListener('resize', () => setIsWide(window.innerWidth > 768 ? true : false))
  }, [])

  return (
    <>
      <div className="corner-projection w-80 md:h-40 bg-[#40f] -left-48 md:-left-20 animate-[motion_9s_infinite]" />
      <div className="corner-projection w-64 md:h-40 bg-[#0fb] -left-40 md:-left-8 animate-[motion_7s_infinite]" />
      <div className="corner-projection w-40 md:h-24 bg-[#0f9] -left-24 md:-left-16 animate-[motion_5s_infinite]" />

      <div className={`w-full h-max p-4 bg-white md:bg-transparent flex ${!isBar ? 'items-start' : 'items-center'} fixed md:relative z-40 top-0 left-0`}>
        <a href="/" className="font-phonk text-xl">ATHARV</a>
        <div className={`absolute bg-white right-4 md:right-0 md:bg-transparent md:p-0 md:mt-0 md:mr-0 ${!isBar && '-mt-4 -mr-4 p-4'}`}>
          {(isBar && !isWide) ? <FaBars onClick={() => setIsBar(false)} /> :
            <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-[0.6vw] duration-500">
              {(!isBar && !isWide) && <FaTimes onClick={() => setIsBar(true)} />}
              {[['#about', 'About'], ['#education', 'Education'], ['#skills', 'Skills'], ['#projects', 'Projects'], ['#activity', 'Activity'], ['#contact', 'Contact']].map(
                (i) => {
                  return (
                    <a href={i[0]} onClick={() => setIsBar(true)}
                      className="w-full md:w-max p-2 px-3 md:rounded-full relative overflow-hidden flex justify-end md:justify-center items-center group" key={i[0]}>
                      <div className="z-30">{i[1]}</div>
                      <div className={`absolute w-64 md:w-28 h-52 left-0 rounded-full blur-sm bg-gradient-to-r from-[#6f9] to-[#97f] translate-y-36 group-hover:translate-y-0 duration-1000`}/>
                    </a>
                  )
                }
              )}
            </div>}
        </div>
      </div>
    </>
  )
}

export default Navbar