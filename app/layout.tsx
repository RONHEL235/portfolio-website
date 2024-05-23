import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ronee Helepi | Portfolio",
  description: "Front-End Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}
      bg-gray-200 text-gray-950 relative dark:bg-neutral-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] relative top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1b1818]"></div>
        <div className="bg-[#d3d2da] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#191717]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header /> 
              {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
