import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, GraduationCap, Factory, Briefcase, ArrowUpRight, TrendingUp } from 'lucide-react'

const cases = [
  {
    icon: Building2,
    category: 'IT・SaaS',
    title: 'AIチャットボット開発',
    description: 'カスタマーサポート向けAIチャットボットを開発。GPT-4とRAGを組み合わせ、社内ナレッジベースを活用した高精度な自動応答システムを構築。問い合わせ対応時間を70%削減。',
    results: ['対応時間 70%削減', '顧客満足度 +15%', '24時間対応実現'],
    tags: ['ChatGPT', 'RAG', 'Python'],
    metric: '70%',
    metricLabel: '対応時間削減',
  },
  {
    icon: GraduationCap,
    category: '教育機関',
    title: '成績処理システム自動化',
    description: '教育機関向けの成績処理・レポート生成システムを開発。Google Spreadsheetと連携し、複雑な成績計算から通知表作成までを完全自動化。教職員の業務負担を大幅に軽減。',
    results: ['作業時間 80%削減', '計算ミス 0件', '年間200時間節約'],
    tags: ['GAS', 'Google Workspace', '自動化'],
    metric: '80%',
    metricLabel: '作業時間削減',
  },
  {
    icon: Factory,
    category: '製造業',
    title: 'AI議事録・レポート生成',
    description: '会議音声からAIで議事録を自動生成し、アクションアイテムを抽出するシステムを開発。Claude APIを活用し、高品質な要約と構造化されたレポートを数分で作成。',
    results: ['議事録作成 95%効率化', '週10時間の時間創出', '情報共有の迅速化'],
    tags: ['Claude', 'AI音声処理', 'Automation'],
    metric: '95%',
    metricLabel: '効率化達成',
  },
  {
    icon: Briefcase,
    category: 'コンサルティング',
    title: 'プロンプトエンジニアリング研修',
    description: '企業向けのAI活用研修プログラムを設計・実施。実務で使えるプロンプトテンプレートの作成方法から、業務へのAI導入戦略まで、実践的なスキルを習得できる研修を提供。',
    results: ['参加者満足度 98%', '業務効率 +40%', '社内AI活用 3倍増'],
    tags: ['研修', 'プロンプト設計', 'ChatGPT'],
    metric: '98%',
    metricLabel: '満足度',
  },
]

export default function Cases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cases" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-navy-100/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-mono text-navy-500 mb-4 tracking-wider">
            // CASE STUDIES
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-900">
            <span className="text-gradient">実績</span>が語る、
            <br className="md:hidden" />
            確かな成果
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto leading-relaxed">
            様々な業界のお客様と共に、AIを活用した課題解決に取り組んできました。
            <br className="hidden md:block" />
            以下は代表的なプロジェクト事例です。
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, i) => (
            <motion.article
              key={caseItem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white border border-navy-100 shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:border-navy-200 transition-all duration-500"
            >
              {/* Metric badge */}
              <div className="absolute top-8 right-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-navy-500 to-navy-600 text-white"
                >
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-sm font-bold">{caseItem.metric}</span>
                </motion.div>
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-navy-500 group-hover:to-navy-700 transition-all duration-300">
                  <caseItem.icon className="w-6 h-6 text-navy-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-mono text-navy-400 tracking-wider">
                    {caseItem.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-800">
                    {caseItem.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                {caseItem.description}
              </p>

              {/* Results */}
              <div className="flex flex-wrap gap-2 mb-6">
                {caseItem.results.map((result) => (
                  <span
                    key={result}
                    className="px-3 py-1.5 text-xs font-medium bg-navy-50 text-navy-600 rounded-full border border-navy-100"
                  >
                    {result}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-navy-100">
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-navy-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-navy-600 to-navy-800 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">
              あなたのプロジェクトも
              <span className="text-navy-200">成功事例</span>に
            </h3>
            <p className="text-navy-200 mb-8 max-w-xl mx-auto">
              まずは無料相談で、お客様の課題とAI活用の可能性についてお話しましょう
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-700 font-medium rounded-full hover:bg-navy-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span>無料相談を予約する</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
