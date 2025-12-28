import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 bg-navy-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-400 to-navy-600 rounded-lg rotate-45" />
              <span className="relative text-white font-display font-bold text-lg">g</span>
            </div>
            <div>
              <span className="font-display text-xl font-semibold tracking-tight">ganechi</span>
              <p className="text-xs text-navy-300">AI × New Business Development</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {['About', 'Services', 'Cases', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-navy-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-navy-400"
          >
            &copy; {currentYear} ganechi. All rights reserved.
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-navy-700/50"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-navy-500">
            <span>AI Product Development</span>
            <span className="text-navy-700">•</span>
            <span>Prompt Engineering</span>
            <span className="text-navy-700">•</span>
            <span>Business Automation</span>
            <span className="text-navy-700">•</span>
            <span>New Business Consulting</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
