import { content } from '../data/content'

const { footer } = content

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#241C17', color: '#8A7C6E' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 text-center">
        <p className="text-xs">{footer.copyright}</p>
      </div>
    </footer>
  )
}
