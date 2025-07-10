import { notFound } from 'next/navigation'
import { getCountryBySlug } from '@/utils/fetchCountries'
import CountryDetail from '@/components/country/countryDetail'

interface Props {
	params: {
		slug: string
	}
}

export const dynamicParams = true

export default async function CountryPage({ params }: Props) {
	const country = await getCountryBySlug(params.slug)
	
	if (!country) {
		console.warn(`País no encontrado para slug: ${params.slug}`)
		return notFound()
	}
	
	return <CountryDetail country={country} />
}
