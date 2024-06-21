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
    <div className="w-full h-full flex flex-col gap-4 md:gap-0 items-center" id="skills">
      <div className={`info_title text-[23vw] mt-20 md:mt-0`}>SKILLS</div>
      <div className={`info_container flex flex-col items-center md:-mt-[11.5vw] ${scroll >= 1700 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
        <div className='w-max grid grid-cols-4'>
          {[[[mongodb, express, react], [node], false], [[tailwind, python, mysql], [postgres], true]].map(
            (i) => {
              return <>{
                i[0].map((j) => {
                  return (
                    <div className={`skill_box md:size-[10vw] md:p-6 border-r border-[#666] ${i[2] && 'border-t'}`}
                      key={j}><img src={j} className='' loading='lazy' /></div>
                  )
                })
              }
                <div className={`skill_box md:size-[10vw] md:p-6 ${i[2] && 'border-t border-[#666]'}`} >
                  <img src={i[1]} className='' loading='lazy' /></div>
              </>
            })}
        </div>
      </div>
    </div >
  )
}

export default Skills