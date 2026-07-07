import { content } from '../data/content'

const { footer, profile } = content

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#241C17', color: '#E4D8C6' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="font-brand text-2xl mb-3 text-white" style={{ fontWeight: 600 }}>
              <span style={{ color: '#B75C3E' }}>⬡</span> {profile.nameShort}
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#A8998A' }}>
              {footer.tagline}
            </p>
            {/* Contact details */}
            <div className="space-y-2">
              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: '#A8998A' }}
              >
                <EmailIcon /> {footer.contact.email}
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#A8998A' }}>
                <PinIcon /> {footer.contact.location}
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              <a
                href={footer.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: '#34281F', color: '#E4D8C6' }}
              >
                <LinkedInIcon />
              </a>
              <a
                href={footer.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: '#34281F', color: '#E4D8C6' }}
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footer.navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm tracking-wide uppercase mb-4 text-white">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: '#A8998A' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: '#34281F', color: '#8A7C6E' }}
        >
          <p>{footer.copyright}</p>
          <p>Built with the <span style={{ color: '#B75C3E' }}>B.L.A.S.T. + ADLC</span> Protocol</p>
        </div>
      </div>
    </footer>
  )
}
