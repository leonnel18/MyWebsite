'use client';
import { motion } from 'framer-motion';

const links = [
  { label: 'How It Works',       href: '#work' },
  { label: 'Services',           href: '#services' },
  { label: 'Tech Stack',         href: '#stack' },
  { label: "Where We\'ve Worked", href: '#worked' },
  { label: 'About',              href: '#about' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display font-black text-lg tracking-tight text-white uppercase"
        >
          Gino &amp; Steph
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="font-display text-xs font-semibold text-white/60 hover:text-white transition-colors duration-200 uppercase tracking-wide">
              {l.label}
            </a>
          ))}
          <motion.a
            href="mailto:gideon.valera@gmail.com"
            whileHover={{ boxShadow: '0 0 20px rgba(107,92,231,0.5)' }}
            className="font-display text-xs font-bold text-white px-5 py-2.5 uppercase tracking-wider"
            style={{ background: 'linear-gradient(135deg, #F97316, #6B5CE7)', border: '2px solid rgba(255,255,255,0.3)', borderRadius: 4 }}
          >
            Connect With Us
          </motion.a>
        </motion.div>
      </nav>
    </header>
  );
}
