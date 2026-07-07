import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import ginoPhoto from '../assets/gino.jpg'

const { about } = content

// "hop" — the reference site's signature snap ease (GSAP CustomEase 0.9, 0, 0.1, 1)
const hop = [0.9, 0, 0.1, 1]
const rise = [0.22, 1, 0.36, 1]

// Random chip color each hover, drawn from the v3 palette
const cursorColors = [
  { bg: '#B75C3E', color: '#FFFDF8' },
  { bg: '#6E8F78', color: '#FFFDF8' },
  { bg: '#241C17', color: '#FBF6EC' },
]

// Per-character rise-from-below reveal behind an overflow mask
function SplitChars({ text, className, style, delay = 0 }) {
  // The visibility trigger must live on this (unclipped) wrapper: the chars
  // themselves start fully hidden behind the overflow mask, and a clipped
  // element never intersects, so whileInView on the chars would never fire.
  return (
    <motion.span
      className={`block overflow-hidden ${className ?? ''}`}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
            transition={{ duration: 0.9, ease: rise, delay: delay + i * 0.03 }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  )
}

// Word-by-word blur-to-sharp reveal
function BlurWords({ text, className, style }) {
  return (
    <p className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: '30%', filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.7, ease: rise, delay: i * 0.035 }}
          >
            {word}
            {' '}
          </motion.span>
        ))}
      </span>
    </p>
  )
}

export default function About() {
  const cursorRef = useRef(null)
  const [cursorOn, setCursorOn] = useState(false)
  const [cursorTheme, setCursorTheme] = useState(cursorColors[0])

  const moveCursor = (e) => {
    const el = cursorRef.current
    if (el) {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
  }

  const showCursor = () => {
    setCursorTheme(cursorColors[Math.floor(Math.random() * cursorColors.length)])
    setCursorOn(true)
  }

  const hideCursor = () => setCursorOn(false)

  return (
    <section id="about" className="mt-24 md:mt-32 py-44 md:py-64" style={{ backgroundColor: '#F4EBDC' }}>
      <div className="w-full px-6 md:px-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-20 md:gap-0">
        {/* Greeting + name */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[17.5rem] md:w-[17.5rem] shrink-0">
          <SplitChars
            text={about.greeting}
            className="text-base font-medium"
            style={{ color: '#241C17', height: '1.5em' }}
          />
          <a
            href={about.nameHref}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={moveCursor}
            onMouseEnter={showCursor}
            onMouseLeave={hideCursor}
          >
            <h2>
              <SplitChars
                text={about.name}
                className="text-lg font-extralight tracking-tight"
                style={{ color: '#241C17' }}
                delay={0.1}
              />
            </h2>
          </a>
        </div>

        {/* Portrait — center-out clip reveal */}
        <div className="w-40 md:w-44 aspect-[2/3] shrink-0">
          <motion.img
            src={ginoPhoto}
            alt={about.imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            initial={{ clipPath: 'inset(50% 50% 50% 50%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 1.2, ease: hop }}
          />
        </div>

        {/* What he does */}
        <div className="max-w-[17.5rem] md:w-[17.5rem] shrink-0">
          <BlurWords
            text={about.description}
            className="text-base font-extralight leading-relaxed text-center md:text-left"
            style={{ color: '#2A211B' }}
          />
        </div>
      </div>

      {/* What he can do — kept a full half-screen below the portrait so it
          only reveals once you scroll past the image */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-40 md:mt-[55vh] flex justify-center">
        <BlurWords
          text={about.subline}
          className="text-base font-extralight leading-relaxed text-center max-w-md"
          style={{ color: '#2A211B' }}
        />
      </div>

      {/* Floating cursor chip — follows the pointer over the name */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed pointer-events-none"
        style={{ left: 0, top: 0, zIndex: 9999, transform: 'translate(-50%, -50%)' }}
      >
        <motion.span
          className="block whitespace-nowrap text-sm"
          style={{
            padding: '0.375em 0.5em',
            borderRadius: '0.25em',
            lineHeight: '1em',
            letterSpacing: '-0.025em',
            fontWeight: 300,
            backgroundColor: cursorTheme.bg,
            color: cursorTheme.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={cursorOn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.25, ease: hop }}
        >
          {about.cursor}
        </motion.span>
      </div>
    </section>
  )
}
