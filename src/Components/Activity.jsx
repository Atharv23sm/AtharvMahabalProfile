import py_cert from "/img/python_cert.jpg";
import webdev from "/img/webdev.jpg"

import { FaArrowUp } from "react-icons/fa6";

function Activity({ scroll }) {
  return (
    <div
      className="w-full md:h-full flex flex-col items-center gap-4"
      id="activity"
    >
      <div className={`info_title text-[17vw] mt-20 md:mt-0`}>ACTIVITY</div>
      <div
        className={`md:w-[95%] md:backdrop-blur-sm md:bg-[#0008] md:-mt-[9.6vw] md:rounded-2xl
                flex flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-10 md:text-lg duration-1000
                ${scroll >= 2900 ? "md:translate-y-0" : "md:translate-y-[10vw]"}`}
      >
        <div className="space-y-4">
          <div className="w-48 md:w-72 h-max flex justify-center">
            <a href="" className="activity_container md:w-72 md:h-52">
              <img src={webdev} className="object-cover" />
              <div className="mask w-36 h-28 bg-[#a0f]" />
              <FaArrowUp className="arrow" size={24} />
            </a>
          </div>
          <div
            className={`p-2 md:p-4 md:pb-0 md:pl-0`}
          >
            <a
              href="https://www.udemy.com/certificate/UC-e3a91b6c-397f-4d27-b7bc-7218b7fe9968/"
              className="text-sm flex items-center gap-2 hover:text-[#a0f] duration-300"
            >
              Udemy- Web Developer
              <FaArrowUp className="rotate-45" size={16} />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-48 md:w-72 h-max flex justify-center">
            <a href="" className="activity_container md:w-72 md:h-52">
              <img src={py_cert} className="object-cover" />
              <div className="mask w-36 h-28 bg-[#a0f]" />
              <FaArrowUp className="arrow" size={24} />
            </a>
          </div>
          <div
            className={`p-2 md:p-4 md:pb-0 md:pl-0`}
          >
            <a
              href=""
              className="text-sm flex items-center gap-2 hover:text-[#a0f] duration-300"
            >
              Udemy- Python
              <FaArrowUp className="rotate-45" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
