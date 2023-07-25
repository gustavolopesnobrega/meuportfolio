import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={poppins.className + ' overflow-x-hidden'}>{children}</body>
    </html>
  )
}
