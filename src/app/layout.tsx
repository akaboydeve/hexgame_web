import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hexgame Minecraft Server',
  description: 'Join the best Minecraft server experience with unique features, an active community, and endless adventures!',
  keywords: 'Minecraft, Minecraft server, Hexgame, Minecraft SMP, Minecraft survival, Hexgame server, Minecraft PvP',
  openGraph: {
    title: 'Hexgame Minecraft Server',
    description: 'Join the best Minecraft server experience with unique features, an active community, and endless adventures!',
    url: 'https://hexgame.in', 
    siteName: 'Hexgame Minecraft Server',
    images: [
      {
        url: '/hexgame.png',
        width: 600,
        height: 600,
        alt: 'Hexgame Minecraft Server'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexgame Minecraft Server',
    description: 'Join the best Minecraft server experience with unique features, an active community, and endless adventures!',
    images: [
      {
        url: '/hexgame.png',
        width: 600,
        height: 600,
        alt: 'Hexgame Minecraft Server'
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
            <Analytics />
            <Toaster />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

