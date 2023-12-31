import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNavigationBar from '@/components/top_navigation_bar/TopNavigationBar'
import BottomAudioControlBar from '@/components/bottom_audio_control_bar/BottomAudioControlBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unstable',
  description: 'Unstable.',
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
        <BottomAudioControlBar></BottomAudioControlBar>
        {children}</body>
    </html>
  )
}
