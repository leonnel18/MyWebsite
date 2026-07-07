import { motion } from 'framer-motion'
import { content } from '../data/content'
import heroIllustration from '../assets/hero-illustration.png'

const { about } = content

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: '#F4EBDC' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        {/* Portrait — layered paper frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center"
        >
          <div
            className="absolute w-full max-w-sm aspect-square rounded-[2rem] rotate-6"
            style={{ backgroundColor: '#EFE4D2', border: '1px solid #E4D8C6' }}
          />
          <div
            className="relative w-full max-w-sm aspect-square rounded-[2rem] overflow-hidden"
            style={{
              backgroundColor: '#EDE5D5',
              border: '1px solid #D8C7AF',
              boxShadow: '0 30px 60px -30px rgba(36,28,23,0.45)',
            }}
          >
            <img
              src={heroIllustration}
              alt="Illustration of Gideon Valera, Technical Project Manager"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating accent chip */}
          <div
            className="absolute -bottom-4 -left-2 md:-left-4 px-4 py-3 rounded-2xl flex items-center gap-3"
            style={{ backgroundColor: '#FFFDF8', border: '1px solid #E4D8C6', boxShadow: '0 16px 32px -18px rgba(36,28,23,0.4)' }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#6E8F78' }} />
            <span className="text-sm font-semibold" style={{ color: '#241C17' }}>
              10+ yrs · ADLC &amp; API
            </span>
          </div>
        </motion.div>

        {/* Intro copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {about.sectionLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 mb-6 text-5xl md:text-6xl font-bold tracking-tight"
            style={{ color: '#241C17' }}
          >
            {about.greeting}
          </motion.h2>

          {about.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="text-lg leading-relaxed mb-5 max-w-xl"
              style={{ color: '#6B5D51' }}
            >
              {para}
            </motion.p>
          ))}

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            href={about.ctaHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white mt-2"
            style={{ backgroundColor: '#B75C3E', boxShadow: '0 10px 24px -10px rgba(183,92,62,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#94472E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B75C3E')}
          >
            {about.cta} →
          </motion.a>
        </div>
      </div>
    </section>
  )
}
