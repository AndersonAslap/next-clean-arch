import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { Cart } from '@/components/Cart';
import { Providers } from '@/providers';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-COMMERCE'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header>
            <h1>
              <Link href='/'>
                E-COMMERCE BIG
              </Link>
            </h1>
            <Cart />
          </header>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
