import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.scss"
import styles from "@/styles/components/layout.module.scss"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle/modeToggle"
import React from "react";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Where in the world?",
    description: "Explore countries around the world",
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className={styles.root}>
                <div className={styles.toggleWrapper}>
                    <ModeToggle />
                </div>
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
