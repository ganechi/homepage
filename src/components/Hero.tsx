import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import TechOrbit from './TechOrbit'
import MarqueeText from './MarqueeText'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-50" />

        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-navy-200/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-navy-100/40 rounded-full blur-[120px]" />
      </div>

      {/* Marquee background */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-30 overflow-hidden">
        <MarqueeText
          items={['AI DEVELOPMENT', 'PROMPT ENGINEERING', 'BUSINESS AUTOMATION']}
          direction="left"
          speed={40}
          className="mb-8"
        />
        <MarqueeText
          items={['NEW BUSINESS', 'DIGITAL TRANSFORMATION', 'INNOVATION']}
          direction="right"
          speed={35}
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 border border-navy-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-navy-500" />
              <span className="text-sm font-medium text-navy-600">AI-Powered Solutions</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block text-navy-900">AIの力で、</span>
              <span className="block mt-2">
                <span className="text-gradient">新規事業</span>
                <span className="text-navy-900">を加速する</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-navy-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              プロンプトエンジニアリングからAIプロダクト開発まで。
              <br className="hidden md:block" />
              企業・個人・教育機関の課題を、最先端のAI技術で解決します。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy-500/30 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  お問い合わせ
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-500 to-navy-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 font-medium text-navy-700 rounded-full border-2 border-navy-200 hover:border-navy-400 hover:bg-navy-50 transition-all duration-300"
              >
                サービスを見る
              </a>
            </motion.div>

          </div>

          {/* Right: Tech Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center mt-12 lg:mt-0 scale-75 md:scale-90 lg:scale-100"
          >
            <TechOrbit />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-navy-400 font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-navy-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
