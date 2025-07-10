'use client'

import CountryCard from "@/components/country/countryCard"
import styles from "@/styles/components/countriesgrid.module.scss"
import { Country } from "@/types/country"

interface Props {
    countries: Country[]
}

export default function CountriesGrid({ countries }: Props) {
    return (
        <div className={styles.grid}>
            {countries.map((country) => (
                <CountryCard
                    key={country.name.common}
                    country={country}
                />
            ))}
        </div>
    )
}
