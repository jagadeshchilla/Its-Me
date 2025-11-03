import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import PageLoader from '@/components/PageLoader'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

import { metaInfo } from '@/data/personalInfo'

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  icons: {
    icon: metaInfo.icon,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <PageLoader>
          {children}
        </PageLoader>
      </body>
    </html>
  )
}

