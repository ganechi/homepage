import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gift, CheckCircle, ExternalLink } from 'lucide-react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeOwsbUD-64xxEIYRmE2rFDjJammikqvNigNXUbRp1rsWmtjw/viewform'

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

export default function GoogleWorkspace() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    '初年度10%割引クーポン',
    'Business Starter / Standard / Plus 対応',
    '導入サポート相談OK',
    '既存ドメインからの移行もOK',
  ]

  return (
    <section id="google-workspace" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-mono text-navy-500 mb-4 tracking-wider">
            // SPECIAL OFFER
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-900">
            <span className="text-gradient">Google Workspace</span>
            <br />
            割引クーポン配布中
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Google Workspace の導入をご検討中の方へ
            <br className="hidden md:block" />
            初年度10%割引のクーポンコードを無料でお渡しします
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-3xl bg-white border border-navy-100 shadow-2xl shadow-navy-900/10"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-full shadow-lg">
                <Gift className="w-4 h-4" />
                <span>無料クーポン</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mt-4">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center">
                    <GoogleIcon />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-800">Google Workspace</h3>
                    <p className="text-navy-500 text-sm">ビジネス向けクラウドツール</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-navy-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <p className="text-sm text-navy-500">
                  ※ クーポンは新規契約時のみ有効です
                </p>
              </div>

              {/* Right: CTA */}
              <div className="text-center md:text-left">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-50 to-blue-50 border border-navy-100">
                  <div className="text-4xl md:text-5xl font-display font-bold text-navy-800 mb-2">
                    10<span className="text-2xl md:text-3xl">%</span> OFF
                  </div>
                  <p className="text-navy-600 mb-6">初年度の利用料金から割引</p>

                  <motion.a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 w-full justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <span>クーポンを受け取る</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <p className="text-xs text-navy-400 mt-4">
                    Googleフォームが開きます
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
