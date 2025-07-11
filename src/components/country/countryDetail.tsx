'use client'

import styles from '@/styles/components/countrydetail.module.scss'
import {Country} from '@/types/country'

interface CountryDetailProps {
	country: Country
}

export default function CountryDetail({country}: CountryDetailProps) {
	const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0]?.official : country.name.common
	const currencies = country.currencies ? Object.values(country.currencies).map((c) => c.name).join(', ') : 'N/A'
	const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A'
	
	const borders = country.borders || []
	
	return (
		<div className={styles.detailWrapper}>
			<div className={styles.contentButtonBack}>
				<button className={styles.backButton} onClick={() => history.back()}>
					← Back
				</button>
			</div>
			
			<div className={styles.content}>
				<div className={styles.flag}>
					<img src={country.flags.svg} alt={`${country.name.common} flag`}/>
				</div>
				
				<div className={styles.contentDetails}>
					<h2 className={styles.name}>{country.name.common}</h2>
					
					<div className={styles.infoCountry}>
						<div className={styles.column}>
							<p><strong>Native Name:</strong> {nativeName}</p>
							<p><strong>Population:</strong> {country.population.toLocaleString()}</p>
							<p><strong>Region:</strong> {country.region}</p>
							<p><strong>Sub Region:</strong> {country.subregion || 'N/A'}</p>
							<p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
						</div>
						<div className={styles.column}>
							<p><strong>Top Level Domain:</strong> {country.tld?.[0] || 'N/A'}</p>
							<p><strong>Currencies:</strong> {currencies}</p>
							<p><strong>Languages:</strong> {languages}</p>
						</div>
					</div>
					
					<div className={styles.borders}>
						<strong>Border Countries:</strong>
						<div className={styles.badgeContainer}>
							{borders.length > 0 ? (
								borders.map((border) => (
									<span key={border} className={styles.badge}>
                    {border}
                  </span>))) : (<span>No borders</span>)}
						</div>
					</div>
				
				</div>
			
			</div>
		</div>
	)
}