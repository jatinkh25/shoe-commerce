import { ComponentWrapper, Footer, Header } from '@/components'
import { Urbanist } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import Providers from '@/utils/providers'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoe Commerce',
  description: 'Ecommerce for Shoes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={urbanist.className}>
        <Providers>
          <Header />
          <ComponentWrapper className="px-5 md:px-10">
            {children}
            <Footer />
          </ComponentWrapper>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  )
}
