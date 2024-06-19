import html from '/img/html.png'
import css from '/img/css.png'
import tailwind from '/img/tailwind.png'
import js from '/img/js.png'
import react from '/img/react.png'
import node from '/img/node.png'
import express from '/img/express.png'
import mongodb from '/img/mongodb.png'
import mysql from '/img/mysql.png'
import postgres from '/img/postgres.png'
import php from '/img/php.png'
import python from '/img/python.png'

function Skills({ scroll }) {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-0 items-center md:pb-16 line" id="skills">
      <div className={`w-full flex justify-center text-[23vw] opacity-40 font-phonk tracking-tight mt-24 md:mt-0 leading-none`}>SKILLS</div>
      <div className={`md:rounded-2xl z-10 md:bg-[#0008] md:backdrop-blur-sm p-4 md:p-10 md:-mt-[11.5vw] duration-1000 ${scroll >= 1700 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
        <div className='grid grid-cols-3 md:grid-cols-6'>
          {[js, mongodb].map(
            (i) => {
              return (
                <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 border-r-[1px] hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}
                  key={i}><img src={i} className='' loading='lazy' /></div>
              )
            }
          )}
          <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 md:border-r-[1px]  hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}><img src={express} className='' loading='lazy' /></div>
          {[react, node].map(
            (i) => {
              return (
                <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 border-r-[1px] border-t-[1px] md:border-t-0 hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}
                  key={i}><img src={i} className='' loading='lazy' /></div>
              )
            }
          )}
          <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 border-t-[1px] md:border-t-0 hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}><img src={tailwind} className='' loading='lazy' /></div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 border-t-[1px]'>
          {[html, css].map(
            (i) => {
              return (
                <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 border-r-[1px] hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}
                  key={i}><img src={i} className='' loading='lazy' /></div>
              )
            }
          )}
          <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 md:border-r-[1px] hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}><img src={php} className='' loading='lazy' /></div>
          {[python, mysql].map(
            (i) => {
              return (
                <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 border-r-[1px] border-t-[1px] md:border-t-0 hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}
                  key={i}><img src={i} className='' loading='lazy' /></div>
              )
            }
          )}
          <div className={`w-20 md:w-[10vw] h-20 md:h-[10vw] p-[3vw] md:p-6 border-t-[1px] md:border-t-0 hover:bg-[#fff] duration-500 flex items-center justify-center overflow-hidden`}><img src={postgres} className='' loading='lazy' /></div>
        </div>
      </div>
    </div>
  )
}

export default Skills