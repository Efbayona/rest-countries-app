'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps as NextThemeProps } from 'next-themes'
import type { ReactNode } from 'react'

interface ThemeProviderProps extends Partial<NextThemeProps> {
    children: ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
