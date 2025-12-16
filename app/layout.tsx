import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, VT323 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
})

export const metadata: Metadata = {
  title: "Cengizhan Dogan ~ Personal Website",
  description: "Full-stack developer portfolio showcasing projects, blog posts, and publications",
  generator: 'v0.app',
  icons: {
    icon: '/images/pixelcengo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} ${vt323.variable} font-sans antialiased`}>
        <div
          className="fixed bottom-0 left-0 right-0 h-[300px] pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: "url('/images/pixelist.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
