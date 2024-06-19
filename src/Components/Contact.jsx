import { FaEnvelope, FaGithub, FaInstagram, FaPhone, FaLinkedin, FaYoutube } from "react-icons/fa6"

function Contact({ scroll }) {
  return (
    <div className="w-full flex flex-col items-center gap-4" id="contact">
      <div className={`w-full flex justify-center text-[17vw] opacity-40 font-phonk tracking-tight mt-10 md:mt-10 leading-none`}>CONTACT</div>
      <div className={`md:w-[95%] md:bg-[#0008] md:backdrop-blur-sm grid grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-8 items-center justify-center text-3xl md:rounded-2xl py-24 md:-mt-[9.5vw] duration-1000 ${scroll >= 3500 ? 'translate-y-0' : 'translate-y-[10vw]'}`}>
        <a className="p-3 border-[1px] rounded-full overflow-hidden relative duration-500 group flex justify-center items-center" href="mailto:atharvsm23@gmail.com">
          <div className={`absolute p-8 rounded-full bg-gradient-to-b from-[#fd3] to-[#660] translate-y-full group-hover:translate-y-0 flex justify-center items-center duration-500`}></div>
          <FaEnvelope className="z-10" /></a>
        <a className="p-3 border-[1px] rounded-full overflow-hidden relative duration-500 group flex justify-center items-center" href="tel:+919403024974">
          <div className={`absolute p-8 rounded-full bg-gradient-to-b from-[#4e0] to-[#140] translate-y-full group-hover:translate-y-0 flex justify-center items-center duration-500`}></div>
          <FaPhone className="z-10" /></a>
        <a className="p-3 border-[1px] rounded-full overflow-hidden relative duration-500 group flex justify-center items-center" href="https://www.linkedin.com/in/atharv-mahabal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <div className={`absolute p-8 rounded-full bg-gradient-to-b from-[#08e] to-[#036] translate-y-full group-hover:translate-y-0 flex justify-center items-center duration-500`}></div>
          <FaLinkedin className="z-10" /></a>
        <a className="p-3 border-[1px] rounded-full overflow-hidden relative duration-500 group flex justify-center items-center" href="https://www.instagram.com/atharv_mahabal/">
          <div className={`absolute p-8 rounded-full bg-gradient-to-b from-[#f60] to-[#f0b] translate-y-full group-hover:translate-y-0 flex justify-center items-center duration-500`}></div>
          <FaInstagram className="z-10" /></a>
        <a className="p-3 border-[1px] rounded-full overflow-hidden relative duration-500 group flex justify-center items-center" href="https://www.github.com/Atharv23sm">
          <div className={`absolute p-8 rounded-full bg-gradient-to-b from-[#456] to-[#123] translate-y-full group-hover:translate-y-0 flex justify-center items-center duration-500`}></div>
          <FaGithub className="z-10" /></a>
        <a className="p-3 border-[1px] rounded-full overflow-hidden relative duration-500 group flex justify-center items-center" href="https://www.youtube.com/channel/UCNT-OlVSpJW76JTcZ6NxEvQ">
          <div className={`absolute p-8 rounded-full bg-gradient-to-b from-[#f00] to-[#500] translate-y-full group-hover:translate-y-0 flex justify-center items-center duration-500`}></div>
          <FaYoutube className="z-10" /></a>
      </div>
      <div className="pt-32">{new Date().getFullYear()} © Atharv Mahabal</div>
    </div>
  )
}

export default Contact
