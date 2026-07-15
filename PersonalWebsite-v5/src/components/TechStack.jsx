import { motion } from 'framer-motion'
import {
  SiWordpress,
  SiDrupal,
  SiGooglebigquery,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiShopify,
  SiShopee,
  SiFacebook,
  SiPandas,
  SiMysql,
  SiDocker,
  SiVercel,
  SiGithub,
} from 'react-icons/si'
import { FaMagento, FaMicrosoft, FaCode, FaCloud, FaClock } from 'react-icons/fa'
import { TbBrandAdobe } from 'react-icons/tb'
import { MdApi } from 'react-icons/md'
import { VscTerminalPowershell, VscTerminalCmd } from 'react-icons/vsc'
import { content } from '../data/content'
import ScrollCue from './ScrollCue'

const { techStack } = content

// Brand logos keyed by the exact tool name in content.js.
// Tools without a suitable icon fall back to a two-letter badge.
const LOGO_MAP = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  Shopify: SiShopify,
  WordPress: SiWordpress,
  Magento: FaMagento,
  Shopee: SiShopee,
  Drupal: SiDrupal,
  AEM: TbBrandAdobe,
  'Facebook Business Suite': SiFacebook,
  Python: SiPython,
  Pandas: SiPandas,
  'SQL / MySQL': SiMysql,
  BigQuery: SiGooglebigquery,
  'Microsoft 365': FaMicrosoft,
  Docker: SiDocker,
  Vercel: SiVercel,
  'Git / GitHub': SiGithub,
  'API Integration': MdApi,
  'Cloud Architecture': FaCloud,
  'VBA / Macros': FaCode,
  PowerShell: VscTerminalPowershell,
  'Task Scheduler': FaClock,
  'VBS / BAT Scripts': VscTerminalCmd,
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
            style={{ color: 'var(--color-ink)', fontWeight: 700 }}
          >
            {techStack.heading}
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
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
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight" style={{ color: 'var(--color-ink)' }}>
                {cat.label}
              </h3>
              {cat.description && (
                <p className="mt-2 mb-5 text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {cat.description}
                </p>
              )}
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
                    style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  >
                    <TechIcon name={item.name} color={item.color} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-14 md:mt-20">
          <ScrollCue
            href="#career-timeline"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  )
}
