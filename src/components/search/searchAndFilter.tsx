'use client'

import React, { useState } from 'react'
import styles from '@/styles/components/searchandfilter.module.scss'
import { Search , ChevronDown } from 'lucide-react'

type Props = {
    onSearch: (term: string) => void
    onFilter: (region: string) => void
}

export default function SearchAndFilter({ onSearch, onFilter }: Props) {
    const [term, setTerm] = useState('')
    const [region, setRegion] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setTerm(value)
        onSearch(value)
    }

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setRegion(value)
        onFilter(value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchContainer}>
                <Search className={styles.icon} size={20}/>
                <input type="text"
                       placeholder="Search for a country..."
                       value={term}
                       onChange={handleSearch}
                       className={styles.input}
                />
            </div>

            <div className={styles.selectWrapper}>
                <select value={region} onChange={handleFilter} className={styles.select}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <ChevronDown className={styles.arrow} size={18}/>
            </div>
        </div>
    )
}
