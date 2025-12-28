import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, ExternalLink } from 'lucide-react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdGQ4v0PibyvaI1nq_QHOwedd0QDADiNb4TE8eOg2Y4wEO7jw/viewform'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-navy-50/20 to-white">
      {/* Background */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-navy-100/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-mono text-navy-500 mb-4 tracking-wider">
            // CONTACT
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-900">
            <span className="text-gradient">お問い合わせ</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto leading-relaxed">
            プロジェクトのご相談、お見積もり、その他ご質問など
            <br className="hidden md:block" />
            お気軽にお問い合わせください
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold mb-6 text-navy-800">ご相談の流れ</h3>
              <ol className="space-y-4">
                {[
                  { step: '01', title: 'お問い合わせ', desc: 'フォームよりご連絡ください' },
                  { step: '02', title: '初回ヒアリング', desc: '課題やご要望をお伺いします' },
                  { step: '03', title: 'ご提案', desc: '最適なソリューションをご提案' },
                  { step: '04', title: 'プロジェクト開始', desc: '合意後、開発を開始します' },
                ].map((item, i) => (
                  <motion.li
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center text-xs font-mono text-white font-bold shadow-lg shadow-navy-500/20">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-medium text-navy-800">{item.title}</div>
                      <div className="text-sm text-navy-500">{item.desc}</div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

          </motion.div>

          {/* Right: Google Form CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center"
          >
            <div className="w-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-navy-600 to-navy-800 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">
                  お問い合わせフォーム
                </h3>
                <p className="text-navy-200 mb-8 max-w-sm mx-auto">
                  プロジェクトの概要やご要望をお聞かせください。
                  1営業日以内にご連絡いたします。
                </p>

                <motion.a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-700 font-medium rounded-full hover:bg-navy-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <span>フォームを開く</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                <p className="text-xs text-navy-300 mt-6">
                  Googleフォームが開きます
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
