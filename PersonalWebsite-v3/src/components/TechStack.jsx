import { motion } from 'framer-motion'
import {
  SiWordpress,
  SiDrupal,
  SiGooglecloud,
  SiGooglebigquery,
  SiLooker,
  SiGoogle,
  SiGooglegemini,
  SiZoho,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRuby,
} from 'react-icons/si'
import { FaMagento, FaMicrosoft, FaDatabase, FaCode } from 'react-icons/fa'
import { TbBrandAdobe } from 'react-icons/tb'
import { MdApi } from 'react-icons/md'
import { content } from '../data/content'

const { techStack } = content

// Brand logos keyed by the exact tool name in content.js.
// Only Antigravity has no suitable icon and falls back to a two-letter badge.
const LOGO_MAP = {
  WordPress: SiWordpress,
  Drupal: SiDrupal,
  Magento: FaMagento,
  AEM: TbBrandAdobe,
  'Google Cloud': SiGooglecloud,
  BigQuery: SiGooglebigquery,
  'Looker Studio': SiLooker,
  'Google Workspace': SiGoogle,
  'Microsoft 365': FaMicrosoft,
  Gemini: SiGooglegemini,
  Zoho: SiZoho,
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Ruby: SiRuby,
  SQL: FaDatabase,
  VBA: FaCode,
  'REST APIs': MdApi,
}

const TechIcon = ({ name, color }) => {
  const Logo = LOGO_MAP[name]
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: color + '18' }}
    >
      {Logo ? (
        <Logo size={20} style={{ color }} aria-hidden="true" />
      ) : (
        <span className="text-xs font-bold" style={{ color }}>
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header — left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow">{techStack.sectionLabel}</span>
          <h2
            className="font-display mt-5 mb-4 text-4xl md:text-5xl leading-[1.05]"
            style={{ color: '#241C17', fontWeight: 700 }}
          >
            {techStack.heading}
          </h2>
          <p className="text-lg" style={{ color: '#6B5D51' }}>
            {techStack.subheading}
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="paper-card rounded-2xl p-6"
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#B75C3E' }}>
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + itemIdx * 0.05 }}
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                      borderColor: item.color,
                      boxShadow: `0 0 0 1px ${item.color}, 0 0 18px -2px ${item.color}80`,
                      transition: { duration: 0.25 },
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-default"
                    style={{ backgroundColor: '#FFFDF8', borderColor: '#E4D8C6' }}
                  >
                    <TechIcon name={item.name} color={item.color} />
                    <span className="text-sm font-medium" style={{ color: '#2A211B' }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
