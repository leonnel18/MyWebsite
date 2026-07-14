import { useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '../data/content'

const { contact } = content

const Label = ({ children }) => (
  <span
    className="block text-xs font-semibold tracking-[0.2em] uppercase"
    style={{ color: '#D8C7AF' }}
  >
    {children} <span style={{ color: '#B75C3E' }}>*</span>
  </span>
)

export default function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', reason: '', message: '' })
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // Static site: submitting composes an email in the visitor's mail client
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.reason}] ${form.name} — portfolio inquiry`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason}\n\n${form.message}`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden px-6 py-14 md:px-16 md:py-20"
          style={{ backgroundColor: '#241C17' }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: '#B75C3E' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-15 pointer-events-none"
            style={{ backgroundColor: '#6E8F78' }}
          />

          <div className="relative z-10 max-w-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <p className="text-xs font-mono font-semibold tracking-[0.3em] uppercase" style={{ color: '#C1694F' }}>
                {contact.sectionLabel}
              </p>
              <h2 className="font-display mt-3 text-4xl md:text-5xl text-white" style={{ fontWeight: 700 }}>
                {contact.heading}
              </h2>
              <div className="w-12 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#B75C3E' }} />
              <p className="mt-6 text-base md:text-lg" style={{ color: '#E4D8C6' }}>
                {contact.subheading}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label>
                  <Label>{contact.nameLabel}</Label>
                  <input
                    type="text"
                    required
                    className="contact-input"
                    placeholder={contact.namePlaceholder}
                    value={form.name}
                    onChange={update('name')}
                  />
                </label>
                <label>
                  <Label>{contact.emailLabel}</Label>
                  <input
                    type="email"
                    required
                    className="contact-input"
                    placeholder={contact.emailPlaceholder}
                    value={form.email}
                    onChange={update('email')}
                  />
                </label>
              </div>

              <label className="block mt-4">
                <Label>{contact.reasonLabel}</Label>
                <select required className="contact-input" value={form.reason} onChange={update('reason')}>
                  <option value="" disabled>
                    {contact.reasonPlaceholder}
                  </option>
                  {contact.reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mt-4">
                <Label>{contact.messageLabel}</Label>
                <textarea
                  required
                  rows={5}
                  className="contact-input resize-y"
                  placeholder={contact.messagePlaceholder}
                  value={form.message}
                  onChange={update('message')}
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-4 rounded-xl text-base font-semibold text-white cursor-pointer"
                style={{ backgroundColor: '#B75C3E', boxShadow: '0 14px 30px -12px rgba(183,92,62,0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#94472E')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B75C3E')}
              >
                {contact.submit}
              </motion.button>
            </form>

            <p className="mt-8 text-center text-sm" style={{ color: '#A8968A' }}>
              {contact.directPrefix}{' '}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium underline-offset-4 hover:underline"
                style={{ color: '#C1694F' }}
              >
                {contact.email}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
