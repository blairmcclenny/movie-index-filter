import type { Metadata } from "next"
import { Inter as FontSans, Limelight as FontHeader } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/themeProvider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const fontHeader = FontHeader({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-header",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Moving Pictures",
    default: "Moving Pictures",
  },
  description: "A simple app to browse movies from The Movie Database",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeader.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
