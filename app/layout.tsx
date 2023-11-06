import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google'

import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'], });

export const metadata: Metadata = {
  title: 'Airbub',
  description: 'Airbub.co.in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        </body>
    </html>
  )
}
