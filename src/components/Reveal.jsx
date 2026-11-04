import { motion } from 'motion/react'

// Reveal sekali saat masuk viewport. Dinonaktifkan otomatis oleh
// <MotionConfig reducedMotion="user"> di App bila pengguna meminta gerak minimal.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
