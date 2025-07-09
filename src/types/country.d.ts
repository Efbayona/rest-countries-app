export interface Country {
    name: {
        common: string
    }
    flags: {
        png: string
        svg: string
        alt?: string
    }
    population: number | string
    region: string
    capital: string[]
}