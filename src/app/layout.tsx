import type { Metadata } from 'next'
import { Patua_One, Open_Sans } from 'next/font/google'
import './globals.css'

const patuaOne = Patua_One({ 
  weight: "400",
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-patuaone',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})
export const metadata: Metadata = {
  title: 'Justin Medina',
  description: 'Personal website 2023',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${patuaOne.variable} font-sans`}>{children}</body>
    </html>
  )
}
