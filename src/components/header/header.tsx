'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import styles from '@/styles/components/home.module.scss'

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>Where in the world?</h1>
                {mounted && (
                    <button onClick={toggleTheme} className={styles.toggleButton}>
                        {theme === 'light' ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}
                        <span className="sr-only">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                    </button>
                )}
            </div>
        </header>
    )
}
