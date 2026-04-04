/**
 * 01_init_framework.js
 * Phase 4 — Step 1: Framework Stabilization & Strict SSG
 * Deterministically writes all project config files and runs npm install.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SRC  = path.join(ROOT, 'src');
const APP  = path.join(SRC, 'app');
const TMP  = path.join(ROOT, '.tmp');

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✔ wrote ${path.relative(ROOT, filePath)}`);
}

// ── 1. package.json ────────────────────────────────────────────────────────────
write(path.join(ROOT, 'package.json'), JSON.stringify({
  name: "technical-duo-website",
  version: "0.1.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "next lint"
  },
  dependencies: {
    "next": "14.2.29",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.3.31"
  },
  devDependencies: {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "eslint": "^8",
    "eslint-config-next": "14.2.29"
  }
}, null, 2));

// ── 2. next.config.ts ─────────────────────────────────────────────────────────
write(path.join(ROOT, 'next.config.ts'), `import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
`);

// ── 3. tailwind.config.ts ──────────────────────────────────────────────────────
write(path.join(ROOT, 'tailwind.config.ts'), `import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:     '#FAF7F2',
        terracotta:'#C1694F',
        sage:      '#7B9E87',
        'cream-dark': '#F0EAE0',
        'terracotta-dark': '#A8583F',
        'sage-dark': '#5E8A72',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
`);

// ── 4. postcss.config.mjs ─────────────────────────────────────────────────────
write(path.join(ROOT, 'postcss.config.mjs'), `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
`);

// ── 5. tsconfig.json ──────────────────────────────────────────────────────────
write(path.join(ROOT, 'tsconfig.json'), JSON.stringify({
  compilerOptions: {
    target: "ES2017",
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    noEmit: true,
    esModuleInterop: true,
    module: "esnext",
    moduleResolution: "bundler",
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: "preserve",
    incremental: true,
    plugins: [{ name: "next" }],
    paths: { "@/*": ["./src/*"] }
  },
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  exclude: ["node_modules"]
}, null, 2));

// ── 6. .eslintrc.json ─────────────────────────────────────────────────────────
write(path.join(ROOT, '.eslintrc.json'), JSON.stringify({
  extends: "next/core-web-vitals"
}, null, 2));

// ── 7. src/app/globals.css ────────────────────────────────────────────────────
write(path.join(APP, 'globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --color-cream:      #FAF7F2;
  --color-terracotta: #C1694F;
  --color-sage:       #7B9E87;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-cream);
  color: #1a1a1a;
  font-family: 'Inter', ui-sans-serif, system-ui;
}
`);

// ── 8. src/app/layout.tsx ─────────────────────────────────────────────────────
write(path.join(APP, 'layout.tsx'), `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Technical Duo — Complex Systems, Delivered',
  description: 'Blending deep technical expertise with strategic business insight. eCommerce, API Architecture, TPM & ADLC specialists.',
  openGraph: {
    title: 'Technical Duo — Complex Systems, Delivered',
    description: 'Blending deep technical expertise with strategic business insight.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`);

// ── 9. src/app/page.tsx (skeleton — overwritten in Step 3) ───────────────────
write(path.join(APP, 'page.tsx'), `export default function Home() {
  return (
    <main>
      <p style={{ padding: '2rem', fontFamily: 'monospace' }}>
        Framework initialized. Step 2 data hydration pending.
      </p>
    </main>
  );
}
`);

// ── 10. Write log to .tmp ──────────────────────────────────────────────────────
write(path.join(TMP, 'step1_init.json'), JSON.stringify({
  step: 1,
  status: 'files_written',
  timestamp: new Date().toISOString(),
  files: [
    'package.json', 'next.config.ts', 'tailwind.config.ts',
    'postcss.config.mjs', 'tsconfig.json', '.eslintrc.json',
    'src/app/globals.css', 'src/app/layout.tsx', 'src/app/page.tsx'
  ]
}, null, 2));

// ── 11. npm install ────────────────────────────────────────────────────────────
console.log('\n📦 Running npm install...');
try {
  execSync('npm install', { cwd: ROOT, stdio: 'inherit' });
  console.log('\n✅ Step 1 complete — framework initialized.');
} catch (err) {
  console.error('\n❌ npm install failed:', err.message);
  process.exit(1);
}
