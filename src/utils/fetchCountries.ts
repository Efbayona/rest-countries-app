import {Country} from "@/types/country";

export async function getAllCountries() {
    const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
    )
    if (!res.ok) throw new Error('Failed to fetch countries')
    return res.json()
}

const slugify = (name: string): string => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-')

export async function getCountryBySlug(slug: string): Promise<Country | null> {
    const countries: Country[] = await getAllCountries()
    return countries.find((c) => slugify(c.name.common) === slug) || null
}
