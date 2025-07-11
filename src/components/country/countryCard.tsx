'use client'

import Link from 'next/link'
import styles from '@/styles/components/countrycard.module.scss'
import Image from "next/image"
import {Country} from "@/types/country";

interface CountryCardProps {
    country: Country
}

export default function CountryCard({ country }: CountryCardProps) {
    const slug = country.name.common.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-')
    
    return (
        <Link href={`/country/${slug}`} className={styles.link}>
            <div className={styles.contentCard}>
                <div className={styles.flag}>
                    <Image
                        src={country.flags?.svg || ""}
                        alt={`${country.name.common} flag`}
                        fill
                        style={{objectFit: "cover"}}
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{country.name.common}</h3>
                    <div className={styles.meta}>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
