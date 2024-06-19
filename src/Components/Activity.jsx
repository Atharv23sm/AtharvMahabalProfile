import py_cert from '/img/python_cert.jpg'
import scaler_react from '/img/scaler-react.png'

import { FaArrowUp } from 'react-icons/fa6'

function Activity({ scroll }) {
    return (
        <div className="w-full flex flex-col items-center gap-4 md:pb-10" id="activity">
            <div className={`w-full flex justify-center text-[17vw] opacity-40 font-phonk tracking-tight mt-28 md:mt-10 leading-none`}>ACTIVITY</div>
            <div className={`w-[100%] md:w-[95%] md:backdrop-blur-sm md:bg-[#0008] md:-mt-[9.4vw] md:rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-10 md:text-lg duration-1000 ${scroll >= 3000 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-48 md:w-72 h-max flex justify-center'>
                        <a href="" className='relative flex justify-center items-center md:w-72 md:h-52 border-[4px] overflow-hidden'>
                            <img src={scaler_react} className='object-cover' />
                            <div className='absolute w-36 h-28 -right-16 -bottom-20 blur-xl bg-[#05f]' />
                            <FaArrowUp className='absolute z-30 right-1 bottom-1 rotate-45' size={24} />
                        </a>
                    </div>
                    <div className={`border-t-[1px] border-l-[1px] md:border-0 p-2 md:p-4 md:pb-0`}>
                        <a href="" className='text-sm flex items-center gap-2 hover:text-[#05f] duration-300'>
                            Scaler- React JS
                            <FaArrowUp className='rotate-45' size={16} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-48 md:w-72 h-max flex justify-center'>
                        <a href="" className='relative flex justify-center items-center md:w-72 md:h-52 border-[4px] overflow-hidden'>
                            <img src={py_cert} className='object-cover' />
                            <div className='absolute w-36 h-28 -right-16 -bottom-20 blur-xl bg-[#a0f]' />
                            <FaArrowUp className='absolute z-30 right-1 bottom-1 rotate-45' size={24} />
                        </a>
                    </div>
                    <div className={`border-b-[1px] border-r-[1px] md:border-0 p-2 md:p-4 md:pb-0`}>
                        <a href="" className='text-sm flex items-center gap-2 hover:text-[#a0f] duration-300'>
                            Udemy- Python
                            <FaArrowUp className='rotate-45' size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity