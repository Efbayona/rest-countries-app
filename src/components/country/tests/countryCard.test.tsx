import { render, screen } from '@testing-library/react'
import CountryCard from '@/components/country/countryCard'
import { describe, it, expect, vi } from 'vitest'
import { ComponentProps, ReactNode } from 'react'
import type { Country } from '@/types/country'

// ✅ Mocks para next/image y next/link con tipado correcto
vi.mock('next/image', () => ({
	default: (props: ComponentProps<'img'>) => <img {...props} />,
}))

vi.mock('next/link', () => ({
	default: ({ href, children }: { href: string; children: ReactNode }) => (
		<a href={href}>{children}</a>
	),
}))

// ✅ Objeto de prueba tipado correctamente
const mockCountry: Country = {
	name: { common: 'Colombia' },
	population: 50000000,
	region: 'Americas',
	capital: ['Bogotá'],
	flags: {
		svg: 'https://flagcdn.com/co.svg',
		png: 'https://flagcdn.com/w320/co.png', // requerido por el tipo
	},
}

describe('CountryCard', () => {
	it('renders country information', () => {
		render(<CountryCard country={mockCountry} />)
		
		expect(screen.getByText('Colombia')).toBeInTheDocument()
		expect(screen.getByText(/Population:/)).toHaveTextContent('Population: 50,000,000')
		expect(screen.getByText(/Region:/)).toHaveTextContent('Region: Americas')
		expect(screen.getByText(/Capital:/)).toHaveTextContent('Capital: Bogotá')
		
		const flag = screen.getByRole('img')
		expect(flag).toHaveAttribute('src', mockCountry.flags.svg)
		expect(flag).toHaveAttribute('alt', 'Colombia flag')
	})
})
