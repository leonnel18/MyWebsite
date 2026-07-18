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
  SiClaude,
  SiDeepseek,
  SiOllama,
  SiPuppeteer,
  SiGithubactions,
} from 'react-icons/si'
import { FaMagento, FaMicrosoft, FaCode, FaCloud, FaClock, FaRobot, FaTerminal } from 'react-icons/fa'
import { TbBrandAdobe } from 'react-icons/tb'
import { MdApi } from 'react-icons/md'
import { VscTerminalPowershell, VscTerminalCmd } from 'react-icons/vsc'

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
  Claude: SiClaude,
  DeepSeek: SiDeepseek,
  'Ollama (Local)': SiOllama,
  'Playwright / Puppeteer': SiPuppeteer,
  'CI / CD Pipelines': SiGithubactions,
  'Agentic Workflows': FaRobot,
  'Prompt Engineering': FaTerminal,
}

// Tools with no icon in the react-icons set — served as raster logos instead.
const IMAGE_LOGO_MAP = {
  Lazada: '/logos/lazada.jpg',
  OpenClaw: '/logos/openclaw.jpg',
  BigSeller: '/logos/bigseller.jpg',
  'Power BI': '/logos/powerbi.jpg',
  'Power Query': '/logos/powerquery.png',
}

export default function TechIcon({ name, color, size = 20, className = 'w-9 h-9 rounded-lg' }) {
  const Logo = LOGO_MAP[name]
  const imageLogo = IMAGE_LOGO_MAP[name]

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 overflow-hidden ${className}`}
      style={{ backgroundColor: color + '18' }}
    >
      {imageLogo ? (
        <img src={imageLogo} alt={`${name} logo`} loading="lazy" className="w-full h-full object-cover" />
      ) : Logo ? (
        <Logo size={size} style={{ color }} aria-hidden="true" />
      ) : (
        <span className="text-xs font-bold" style={{ color }}>
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}
