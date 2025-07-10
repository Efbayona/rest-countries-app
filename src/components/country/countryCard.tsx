'use client'

import Link from 'next/link'
import styles from '@/styles/components/countrycard.module.scss'
import Image from "next/image"

interface Country {
    name: string
    flag: string
    population: string
    region: string
    capital: string
}

interface CountryCardProps {
    country: Country
}

export default function CountryCard({ country }: CountryCardProps) {
    const slug = country.name.toLowerCase().replace(/\s+/g, '-')

    return (
        <Link href={`/country/${slug}`} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.flag}>
                    <Image
                        src={country.flag}
                        alt={`${country.name} flag`}
                        width={320}
                        height={213}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{country.name}</h3>
                    <div className={styles.meta}>
                        <p><strong>Population:</strong> {country.population}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
