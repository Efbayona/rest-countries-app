export interface Country {
	name: {
		common: string
		nativeName?: Record<string, { official: string }>
	}
	flags: {
		svg: string
		png: string
	}
	population: number
	region: string
	subregion?: string
	capital?: string[]
	tld?: string[]
	currencies?: Record<string, { name: string }>
	languages?: Record<string, string>
	borders?: string[]
}
