import { FaEnvelope, FaGithub, FaInstagram, FaPhone, FaLinkedin, FaYoutube } from "react-icons/fa6"

function Contact({ scroll }) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4" id="contact">
      <div className={`info_title text-[17vw] mt-20 md:mt-0`}>CONTACT</div>
      <div className={`md:w-[95%] md:bg-[#0008] md:backdrop-blur-sm grid grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-8 items-center justify-center text-3xl md:rounded-2xl py-24 md:-mt-[9.5vw] duration-1000
        ${scroll >= 3400 ? 'md:translate-y-0' : 'md:translate-y-[10vw]'}`}>
        <a className="contact_a group" href="mailto:atharvsm23@gmail.com">
          <div className={`contact_icon bg-gradient-to-b from-[#fd36] to-[#6606] translate-y-full group-hover:translate-y-0`}></div>
          <FaEnvelope className="z-10" size={20}/></a>
        <a className="contact_a group" href="tel:+919403024974">
          <div className={`contact_icon bg-gradient-to-b from-[#4e06] to-[#1406] translate-y-full group-hover:translate-y-0 `}></div>
          <FaPhone className="z-10" size={20}/></a>
        <a className="contact_a group" href="https://www.linkedin.com/in/atharv-mahabal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <div className={`contact_icon bg-gradient-to-b from-[#08e6] to-[#0366] translate-y-full group-hover:translate-y-0 `}></div>
          <FaLinkedin className="z-10" size={20}/></a>
        <a className="contact_a group" href="https://www.instagram.com/atharv_mahabal/">
          <div className={`contact_icon bg-gradient-to-b from-[#f606] to-[#f0b6] translate-y-full group-hover:translate-y-0 `}></div>
          <FaInstagram className="z-10" size={20}/></a>
        <a className="contact_a group" href="https://www.github.com/Atharv23sm">
          <div className={`contact_icon bg-gradient-to-b from-[#4566] to-[#1236] translate-y-full group-hover:translate-y-0 `}></div>
          <FaGithub className="z-10" size={20}/></a>
        <a className="contact_a group" href="https://www.youtube.com/channel/UCNT-OlVSpJW76JTcZ6NxEvQ">
          <div className={`contact_icon bg-gradient-to-b from-[#f006] to-[#5006] translate-y-full group-hover:translate-y-0 `}></div>
          <FaYoutube className="z-10" size={20}/></a>
      </div>
      <div className="pt-32">{new Date().getFullYear()} © Atharv Mahabal</div>
    </div>
  )
}

export default Contact
