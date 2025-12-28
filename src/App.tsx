import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Cases from './components/Cases'
import GoogleWorkspace from './components/GoogleWorkspace'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-navy-400 via-navy-500 to-navy-600 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back to top indicator */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a
          href="#top"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-navy-200 shadow-lg shadow-navy-900/10 hover:border-navy-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg
            className="w-5 h-5 text-navy-500 group-hover:text-navy-700 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </motion.div>

      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Cases />
        <GoogleWorkspace />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
