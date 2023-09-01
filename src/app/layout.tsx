import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import React from 'react'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Barber - Barbers & Hair Cutting',
  description: 'Barber - Barbers & Hair Cutting',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  globalStyles()
  return (
    <html lang="pt-BR">
      <head>
        <style>{getCssText()}</style>
      </head>
      <body className={`${inter.className} ${oswald.className}`}>
        {children}
      </body>
    </html>
  )
}
