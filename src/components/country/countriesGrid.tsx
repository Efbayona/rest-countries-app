import CountryCard from "@/components/country/countryCard"
import styles from "@/styles/components/countriesgrid.module.scss"

interface Country {
    name: {
        common: string
    }
    flags?: {
        svg: string
        png: string
    }
    population: number | string
    region: string
    capital: string[]
}

interface Props {
    countries: Country[]
}

export default function CountriesGrid({ countries }: Props) {
    return (
        <div className={styles.grid}>
            {countries.map((country) => (
                <CountryCard
                    key={country.name.common}
                    country={{
                        name: country.name.common,
                        flag: country.flags?.svg || "🏳️",
                        population: country.population.toLocaleString(),
                        region: country.region,
                        capital: country.capital?.[0] || "N/A",
                    }}
                />
            ))}
        </div>
    )
}
