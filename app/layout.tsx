import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import ScrollToTopButton from '@/components/scrollUpBtn'
import FooterBar from '@/components/footer/footer'
import ScrollToTop from '@/components/scrollUpBtn'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Gustavo Nobrega<Web Developer/>',
  description: 'Gustavo Nobrega Front end Web Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" >
      <link rel="icon" href="/favicon.png" sizes="48x48" />
      <body className={poppins.className + ' overflow-x-hidden'} id='bodyId'>{children}
        <ScrollToTopButton></ScrollToTopButton>
        <FooterBar></FooterBar>
      </body>
    </html>
  )
}
