export async function getAllCountries() {
    const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
    )
    if (!res.ok) throw new Error('Failed to fetch countries')
    return res.json()
}