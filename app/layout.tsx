import { ComponentWrapper, Footer, Header } from '@/components'
import './globals.css'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoe Commerce',
  description: 'Ecommerce for Shoes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <ComponentWrapper className="px-5 md:px-10">
          {children}
          <Footer />
        </ComponentWrapper>
      </body>
    </html>
  )
}
