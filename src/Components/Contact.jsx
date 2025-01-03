import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

function Contact() {
  return (
    <div
      className="w-full h-full flex flex-col items-center gap-4"
      id="contact"
    >
      <div className={`info_title text-[17vw] mt-20 md:mt-0`}>CONTACT</div>
      <div
        className={`md:w-[95%] md:bg-[#0008] md:backdrop-blur-sm grid grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-8 items-center justify-center md:rounded-2xl py-24 md:-mt-[9.5vw] duration-1000`}
      >
        <a className="contact_a group" href="mailto:atharvsm23@gmail.com">
          <div
            className={`contact_icon bg-gradient-to-b from-[#ffcb21] to-[#ff6f00e5]  opacity-0 group-hover:opacity-100 group-hover:duration-500 `}
          ></div>
          <FaEnvelope className="z-10" size={28} />
        </a>
        <a className="contact_a group" href="tel:+919403024974">
          <div
            className={`contact_icon bg-gradient-to-b from-[#43ee00] to-[#0f9600e7]  opacity-0 group-hover:opacity-100 group-hover:duration-500  `}
          ></div>
          <FaPhone className="z-10" size={28} />
        </a>
        <a
          className="contact_a group"
          href="https://www.linkedin.com/in/atharv-mahabal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <div
            className={`contact_icon bg-gradient-to-b from-[#586bff] to-[#004183]  opacity-0 group-hover:opacity-100 group-hover:duration-500 `}
          ></div>
          <FaLinkedin className="z-10" size={28} />
        </a>
        <a
          className="contact_a group"
          href="https://www.instagram.com/atharv_mahabal/"
        >
          <div
            className={`contact_icon bg-gradient-to-b from-[#f60] to-[#f0b]  opacity-0 group-hover:opacity-100 group-hover:duration-500 `}
          ></div>
          <FaInstagram className="z-10" size={28} />
        </a>
        <a className="contact_a group" href="https://www.github.com/Atharv23sm">
          <div
            className={`contact_icon bg-gradient-to-b from-[#456] to-[#123]  opacity-0 group-hover:opacity-100 group-hover:duration-500 `}
          ></div>
          <FaGithub className="z-10" size={28} />
        </a>
        <a
          className="contact_a group"
          href="https://www.youtube.com/channel/UCNT-OlVSpJW76JTcZ6NxEvQ"
        >
          <div
            className={`contact_icon bg-gradient-to-b from-[#f00] to-[#e61135] opacity-0 group-hover:opacity-100 group-hover:duration-500 `}
          ></div>
          <FaYoutube className="z-10" size={28} />
        </a>
      </div>
      <div className="pt-32">{new Date().getFullYear()} © Atharv Mahabal</div>
    </div>
  );
}

export default Contact;
