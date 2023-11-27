import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNavigationBar from '@/components/top_navigation_bar/TopNavigationBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavigationBar></TopNavigationBar>
        {children}</body>
    </html>
  )
}
