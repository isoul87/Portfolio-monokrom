import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#works"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten
      </a>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <About />
        <Services />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
