import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const siteUrl = 'https://varatthapa.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Varat Thapa — Frontend Developer & Product Engineer',
  description:
    'Portfolio of Varat Thapa — Frontend Developer specializing in React, Next.js, TypeScript, and building premium digital products. Based in Kathmandu, Nepal.',
  keywords: [
    'Varat Thapa',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Developer',
    'Kathmandu',
    'Nepal',
    'Portfolio',
  ],
  authors: [{ name: 'Varat Thapa' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Varat Thapa',
    title: 'Varat Thapa — Frontend Developer & Product Engineer',
    description:
      'Building premium digital products with React, Next.js, and TypeScript. Based in Kathmandu, Nepal.',
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varat Thapa — Frontend Developer & Product Engineer',
    description:
      'Building premium digital products with React, Next.js, and TypeScript.',
    images: ['/og-image.png'],
    creator: '@varatthapa',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.svg', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a0a0a',
  colorScheme: 'dark light',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Varat Thapa',
  url: siteUrl,
  image: '/varat.jpg',
  jobTitle: 'Frontend Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  sameAs: [
    'https://linkedin.com/in/varatthapa',
    'https://github.com/varatthapa',
    'https://twitter.com/varatthapa',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'Web Development',
    'Frontend Engineering',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressCountry: 'Nepal',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth dark ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
