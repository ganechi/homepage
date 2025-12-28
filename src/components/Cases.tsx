import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, GraduationCap, Factory, Briefcase, ArrowUpRight } from 'lucide-react'

const cases = [
  {
    icon: Building2,
    category: 'IT・SaaS',
    title: 'AIチャットボット開発',
    description: 'カスタマーサポート向けAIチャットボットを開発。GeminiとRAGを組み合わせ、社内ナレッジベースを活用した高精度な自動応答システムを構築。',
    tags: ['Gemini', 'RAG', 'TypeScript', 'React'],
    metricLabel: '対応時間削減',
  },
  {
    icon: Factory,
    category: 'スタートアップ',
    title: '新規事業プロダクトの企画・開発',
    description: 'AIを活用した新規事業のコンセプト設計からプロダクト開発まで伴走支援。市場調査、MVP開発、ユーザー検証を経て、アイデアを素早くプロダクトとして形にし、事業化を加速。',
    tags: ['新規事業', 'MVP開発', 'AI活用'],
    metricLabel: '事業化支援',
  },
  {
    icon: GraduationCap,
    category: '教育機関',
    title: '成績処理システム自動化',
    description: '教育機関向けの成績処理・レポート生成システムを開発。Google Spreadsheetと連携し、複雑な成績計算から通知表作成までを完全自動化。教職員の業務負担を大幅に軽減。',
    tags: ['GAS', 'Google Workspace', '自動化'],
    metricLabel: '作業時間削減',
  },
  {
    icon: Briefcase,
    category: '中小企業',
    title: 'Google Workspace導入・業務自動化',
    description: 'Google Workspaceの導入支援から、GASを用いた業務自動化まで一貫サポート。スプレッドシート連携、メール自動送信、データ集計の自動化など、日々の業務を効率化するツールを構築。',
    tags: ['Google Workspace', 'GAS', '業務自動化'],
    metricLabel: '業務効率化',
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
            新規事業の立ち上げから、既存業務のDX・自動化まで、様々な業界の課題解決に取り組んできました。
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
              <span>お問い合わせ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
