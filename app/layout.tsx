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
  title: 'Lawal Abdulrahman Oluwaseun — Top Software Developer in Lagos, Nigeria',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  description:
    'Lawal Abdulrahman Oluwaseun — Senior Software Developer & Cybersecurity Enthusiast based in Lagos, Nigeria. One of the top software developers in Lagos building exceptional web, mobile, and security-focused applications. Specializing in React, Next.js, Node.js, React Native, and cybersecurity research.',
  keywords: [
    'Lawal Abdulrahman Oluwaseun',
    'Lawal A. Oluwaseun',
    'Lawal Oluwaseun',
    'Oluwaseun Lawal',
    'Seun Lawal',
    'seunlawal',
    'top software developer in Lagos',
    'best software developer in Lagos',
    'top software developer Nigeria',
    'best software developer Nigeria',
    'senior software developer Lagos Nigeria',
    'software developer Lagos',
    'cybersecurity expert Lagos Nigeria',
    'cybersecurity enthusiast Lagos',
    'React developer Lagos Nigeria',
    'Next.js developer Nigeria',
    'TypeScript developer Nigeria',
    'cybersecurity researcher Nigeria',
    'React Native developer Nigeria',
    'full stack developer Lagos',
    'web developer Lagos Nigeria',
    'mobile app developer Lagos',
    'blockchain security Nigeria',
    'seunlawal.dev',
  ],
  authors: [{ name: 'Lawal Abdulrahman Oluwaseun', url: siteUrl }],
  creator: 'Lawal Abdulrahman Oluwaseun',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: 'Lawal Abdulrahman Oluwaseun — Top Software Developer in Lagos, Nigeria',
    description:
      'Senior Software Developer & Cybersecurity Enthusiast based in Lagos, Nigeria. Building exceptional web, mobile, and security-focused applications.',
    siteName: 'Lawal Abdulrahman Oluwaseun',
    images: [
      {
        url: `${siteUrl}/profile.png`,
        width: 1254,
        height: 1254,
        alt: 'Lawal Abdulrahman Oluwaseun — Senior Software Developer Lagos Nigeria',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawal Abdulrahman Oluwaseun — Top Software Developer in Lagos, Nigeria',
    description:
      'Senior Software Developer & Cybersecurity Enthusiast based in Lagos, Nigeria.',
    images: [`${siteUrl}/profile.png`],
    creator: '@drealpapie',
  },
}

// JSON-LD structured data — tells Google who you are with photo
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lawal Abdulrahman Oluwaseun',
  alternateName: ['Lawal A. Oluwaseun', 'Lawal Oluwaseun', 'Oluwaseun Lawal', 'Seun Lawal', 'Drealpapi'],
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  jobTitle: 'Senior Software Developer & Cybersecurity Enthusiast',
  description: 'Top software developer in Lagos, Nigeria specializing in web, mobile, and cybersecurity. Building React, Next.js, Node.js, and React Native applications.',
  knowsAbout: [
    'Software Development', 'Cybersecurity', 'React', 'Next.js',
    'Node.js', 'React Native', 'TypeScript', 'Blockchain Security',
    'Web Development', 'Mobile Development',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Eleaders Network',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
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
