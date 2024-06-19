import { useState } from "react"

import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Education from "./Components/Education"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Activity from "./Components/Activity"
import Contact from "./Components/Contact"
import Home from "./Components/Home"

function App() {

  const [scroll, setScroll] = useState(0)

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center md:gap-4 md:pt-4 md:pb-12 md:px-12 text-white font-[poppins] select-none">
      <Navbar />
      <div className="w-full bg-bg1 bg-cover md:rounded-3xl overflow-y-scroll overflow-x-hidden gap-16 p-4 flex flex-col items-center scroll-smooth"
        onScroll={(e) => setScroll(Math.trunc(e.target.scrollTop))}>
        <Home />
        <About scroll={scroll} />
        <Education scroll={scroll} />
        <Skills scroll={scroll} />
        <Projects scroll={scroll} />
        <Activity scroll={scroll} />
        <Contact scroll={scroll} />
      </div>
    </div>
  )
}

export default App