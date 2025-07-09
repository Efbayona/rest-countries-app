'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import styles from '@/styles/components/modetoggle.module.scss'

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button onClick={toggleTheme} className={styles.toggleButton}>
            <Sun className={styles.sunIcon} />
            <Moon className={styles.moonIcon} />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
