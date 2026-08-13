import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seunlawal.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lawal Abdulrahman Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  description:
    'Lawal Abdulrahman Oluwaseun (Lawal A. Oluwaseun) — Full Stack Developer & Cybersecurity Enthusiast based in Lagos, Nigeria. Building exceptional web and mobile experiences. Specializing in React, Next.js, Node.js, and security-focused development.',
  keywords: [
    'Lawal Abdulrahman Oluwaseun',
    'Lawal A. Oluwaseun',
    'Lawal Oluwaseun',
    'Oluwaseun Lawal',
    'Seun Lawal',
    'seunlawal',
    'full stack developer Nigeria',
    'cybersecurity enthusiast Lagos',
    'web developer Lagos Nigeria',
    'React developer Nigeria',
    'Next.js developer',
    'TypeScript developer',
    'blockchain security',
    'seunlawal.dev',
  ],
  authors: [{ name: 'Lawal Abdulrahman Oluwaseun', url: siteUrl }],
  creator: 'Lawal Abdulrahman Oluwaseun',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: 'Lawal Abdulrahman Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast',
    description:
      'Lawal Abdulrahman Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast based in Lagos, Nigeria.',
    siteName: 'Lawal Abdulrahman Oluwaseun',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 800,
        alt: 'Lawal Abdulrahman Oluwaseun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawal Abdulrahman Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast',
    description:
      'Full Stack Developer & Cybersecurity Enthusiast based in Lagos, Nigeria.',
    images: ['/profile.png'],
  },
}

// JSON-LD structured data — tells Google who you are with photo
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lawal Abdulrahman Oluwaseun',
  alternateName: ['Lawal A. Oluwaseun', 'Lawal Oluwaseun', 'Oluwaseun Lawal', 'Seun Lawal'],
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  jobTitle: 'Full Stack Developer & Cybersecurity Enthusiast',
  worksFor: {
    '@type': 'Organization',
    name: 'Eleaders Network',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'Nigeria',
  },
  email: 'seunlawal18@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/lawal-oluwaseun-370a42268',
    'https://github.com/Drealpapi',
    'https://www.tiktok.com/@drealpapie',
    'https://medium.com/@seunlawal18',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Courier New', Consolas, monospace" }}
      >
        {children}
      </body>
    </html>
  )
}
