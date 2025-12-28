import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Bot, MessageSquareCode, Workflow, Lightbulb, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Bot,
    number: '01',
    title: 'AIプロダクト開発',
    subtitle: 'AI Product Development',
    description: 'ChatGPT、Claude、Geminiなどの最新LLMを活用したAIプロダクトの企画・設計・開発。チャットボット、RAGシステム、AI分析ツールなど、ビジネス課題に最適なソリューションを構築します。',
    features: ['LLMアプリケーション開発', 'RAGシステム構築', 'AIチャットボット', 'カスタムAIツール'],
  },
  {
    icon: MessageSquareCode,
    number: '02',
    title: 'プロンプトエンジニアリング',
    subtitle: 'Prompt Engineering',
    description: 'AIの性能を最大限に引き出すプロンプト設計。業務効率化、コンテンツ生成、データ分析など、目的に応じた最適なプロンプトを開発し、即座に成果を出せる仕組みを構築します。',
    features: ['プロンプト設計・最適化', 'プロンプトテンプレート開発', 'AIワークフロー構築', 'プロンプト研修'],
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'DX・新規事業支援',
    subtitle: 'DX & Business Development',
    description: '既存業務のデジタル変革から、AIを活用した新規事業の立ち上げまで一貫サポート。現状分析、PoC開発、本格導入まで伴走し、確実な成果創出を支援します。',
    features: ['DX戦略コンサルティング', '業務プロセス改善', 'PoC/MVP開発', '技術ロードマップ策定'],
  },
  {
    icon: Workflow,
    number: '04',
    title: '業務自動化・効率化',
    subtitle: 'Business Automation',
    description: '既存の業務システムとAIを連携させ、日々の業務を自動化。ルーティンワークの削減、データ処理の効率化、レポート自動生成で、現場の生産性を大幅に向上させます。',
    features: ['既存システム連携', 'ワークフロー自動化', 'データ処理自動化', 'Google Workspace活用'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-navy-50/30 to-white">
      {/* Background */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-navy-100/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-mono text-navy-500 mb-4 tracking-wider">
            // SERVICES
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-900">
            <span className="text-gradient">AI技術</span>で、
            <br className="md:hidden" />
            課題を解決する
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto leading-relaxed">
            新規事業の立ち上げから既存業務のDX推進まで、
            <br className="hidden md:block" />
            最新のAI技術で御社のビジネス変革を支援します。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-3xl bg-white border border-navy-100 shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:border-navy-200 transition-all duration-500"
            >
              {/* Number */}
              <motion.span
                animate={{
                  scale: hoveredIndex === i ? 1.1 : 1,
                  opacity: hoveredIndex === i ? 0.15 : 0.08,
                }}
                className="absolute top-8 right-8 text-7xl font-display font-bold text-navy-600 transition-all"
              >
                {service.number}
              </motion.span>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center mb-6 shadow-lg shadow-navy-500/25"
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative">
                <span className="text-xs font-mono text-navy-400 tracking-wider">
                  {service.subtitle}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold mt-1 mb-4 text-navy-800 group-hover:text-navy-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, fi) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + fi * 0.05 }}
                      className="flex items-center gap-2 text-xs text-navy-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-navy-400 to-navy-600" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors group/link"
                >
                  <span>詳細を相談</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-navy-500 mb-6">
            お客様の課題に合わせて、最適なサービスをご提案いたします
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 text-white font-medium rounded-full hover:from-navy-500 hover:to-navy-600 transition-all duration-300 hover:shadow-xl hover:shadow-navy-500/30 hover:-translate-y-1"
          >
            <span>お問い合わせ</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
