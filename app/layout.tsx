import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gustavo Nobrega',
  description: 'Gustavo Nobrega Front end Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="48x48" />
      <body className={inter.className + ' overflow-x-hidden'}>{children}</body>
    </html>
  )
}
