import type { Metadata } from 'next';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream antialiased">{children}</body>
    </html>
  );
}
