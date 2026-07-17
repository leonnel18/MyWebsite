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

export default function TechIcon({ name, color, size = 20, className = 'w-9 h-9 rounded-lg' }) {
  const Logo = LOGO_MAP[name]
  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ backgroundColor: color + '18' }}
    >
      {Logo ? (
        <Logo size={size} style={{ color }} aria-hidden="true" />
      ) : (
        <span className="text-xs font-bold" style={{ color }}>
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}
