export interface Country {
    name: {
        common: string
    }
    flags: {
        png: string
        svg: string
        alt?: string
    }
    population: number
    region: string
    capital: string[]
}