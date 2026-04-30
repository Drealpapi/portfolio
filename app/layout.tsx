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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-chi-gules-53.vercel.app'),
  title: 'Lawal A. Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast',
  description:
    'Full Stack Developer & Cybersecurity Enthusiast building exceptional web and mobile experiences. Specializing in React, Next.js, Node.js, and security-focused development.',
  keywords: [
    'full stack developer',
    'cybersecurity',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'Lawal Oluwaseun',
    'Lagos Nigeria',
  ],
  authors: [{ name: 'Lawal Abdulrahman Oluwaseun' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Lawal A. Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast',
    description:
      'Full Stack Developer & Cybersecurity Enthusiast building exceptional digital products.',
    siteName: 'Lawal A. Oluwaseun Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawal A. Oluwaseun — Full Stack Developer & Cybersecurity Enthusiast',
    description:
      'Full Stack Developer & Cybersecurity Enthusiast building exceptional digital products.',
  },
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
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-poppins), var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
