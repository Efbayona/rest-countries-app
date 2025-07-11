'use client'

import { useEffect, useState } from 'react'
import SearchAndFilter from '@/components/search/searchAndFilter'
import CountriesGrid from '@/components/country/countriesGrid'
import { getAllCountries } from '@/utils/fetchCountries'
import type { Country } from '@/types/country'
import styles from '@/styles/components/home.module.scss'

export default function HomePage() {
    const [allCountries, setAllCountries] = useState<Country[]>([])
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAllCountries()
                setAllCountries(data)
                setFilteredCountries(data)
            } catch (error) {
                console.error('Error fetching countries:', error)
            }
        }

        fetchCountries()
    }, [])

    const handleSearch = (term: string) => {
        const filtered = allCountries.filter((country) =>
            country.name.common.toLowerCase().includes(term.toLowerCase())
        )
        setFilteredCountries(filtered)
    }

    const handleFilter = (region: string) => {
        const filtered = allCountries.filter(
            (country) => region === '' || country.region === region
        )
        setFilteredCountries(filtered)
    }

    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
                <CountriesGrid countries={filteredCountries} />
            </main>
        </div>
    )
}
