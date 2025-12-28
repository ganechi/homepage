import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Lightbulb, Rocket, Users } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Cpu,
      title: '技術力',
      description: '最新のAI技術と実践的なプロンプトエンジニアリングで、革新的なソリューションを提供',
    },
    {
      icon: Lightbulb,
      title: '創造性',
      description: 'AIの可能性を最大限に引き出す、独創的なアプローチで課題を解決',
    },
    {
      icon: Rocket,
      title: 'スピード',
      description: 'アジャイルな開発手法で、アイデアから実装まで迅速に推進',
    },
    {
      icon: Users,
      title: 'パートナーシップ',
      description: 'お客様と共に歩み、長期的な成功を目指す信頼関係を構築',
    },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-mono text-navy-500 mb-4 tracking-wider">
                // ABOUT
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-navy-900">
                AIで、
                <span className="text-gradient">ビジネスの未来</span>
                を<br />共に創る
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-navy-600 leading-relaxed"
            >
              <p>
                AIプロダクト開発とプロンプトエンジニアリングに特化したフリーランスエンジニアとして、
                新規事業の立ち上げから既存業務のDX推進まで、幅広く支援しています。
              </p>
              <p>
                「AI導入は難しそう」「何から始めればいいかわからない」という企業様でも大丈夫。
                現状の業務フローを丁寧に分析し、最適なAI活用方法をご提案します。
              </p>
              <p>
                ChatGPT、Claude、Geminiなどの最新LLMを活用したプロンプト設計と、
                業務自動化ツールの導入で、御社のビジネス変革を加速させます。
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium transition-colors group"
              >
                <span>詳しく話を聞く</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-white border border-navy-100 shadow-lg shadow-navy-900/5 hover:shadow-xl hover:border-navy-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-navy-500/20">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-navy-800">
                  {value.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-16 border-t border-navy-100"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-navy-400 tracking-wider">
              TECHNOLOGIES & PLATFORMS
            </span>
          </div>

          {/* Animated tech ticker */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex gap-12"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 shrink-0">
                  {['Gemini', 'OpenAI', 'Claude', 'TypeScript', 'React', 'Google', 'AWS', 'GCP'].map((tech) => (
                    <div
                      key={`${setIndex}-${tech}`}
                      className="flex items-center gap-3 px-6 py-3 rounded-full bg-navy-50 border border-navy-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-navy-400 to-navy-600" />
                      <span className="text-sm font-medium text-navy-600 whitespace-nowrap">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
