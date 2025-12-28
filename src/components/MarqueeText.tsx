import { motion } from 'framer-motion'

interface MarqueeTextProps {
  items: string[]
  direction?: 'left' | 'right'
  speed?: number
  className?: string
}

export default function MarqueeText({
  items,
  direction = 'left',
  speed = 30,
  className = ''
}: MarqueeTextProps) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-8 text-5xl md:text-7xl font-display font-bold text-navy-100/60"
          >
            {item}
            <span className="text-navy-300/40">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
