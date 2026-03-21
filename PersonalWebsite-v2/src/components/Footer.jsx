import { content } from '../data/content'

const { footer } = content

export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid #1A1A1A', backgroundColor: '#050505' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: tagline + copyright */}
        <div>
          <p className="text-xs font-mono mb-1" style={{ color: '#4ADE80' }}>
            {footer.tagline}
          </p>
          <p className="text-xs" style={{ color: '#555555' }}>
            {footer.copyright}
          </p>
        </div>

        {/* Right: links */}
        <div className="flex gap-6">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs transition-colors duration-200"
              style={{ color: '#555555' }}
              onMouseEnter={e => (e.target.style.color = '#F5F5F5')}
              onMouseLeave={e => (e.target.style.color = '#555555')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
