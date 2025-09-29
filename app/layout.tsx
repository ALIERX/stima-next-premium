import './globals.css'
import type { Metadata } from 'next'
import SoundTapticProvider from '@/components/SoundTapticProvider'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'STIMA — Asset Intelligence',
  description: 'Deterministic valuations, trends, and tokenization for real-world assets.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ink text-slate-100">
        <SoundTapticProvider>
          <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="font-bold tracking-tight">STIMA</Link>
              <nav className="flex items-center gap-4 text-sm">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/assets" className="hover:underline">Assets</Link>
                <Link href="/mint" className="px-3 py-1.5 rounded-xl border border-white/10 hover:bg-white/5">Mint</Link>
              </nav>
            </div>
          </header>
          <main className="max-w-7xl mx-auto p-6 space-y-6">{children}</main>
          <footer className="py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} STIMA</footer>
        </SoundTapticProvider>
      </body>
    </html>
  )
}
