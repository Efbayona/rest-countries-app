'use client'

import styles from '@/styles/components/countrydetail.module.scss'
import { Country } from '@/types/country'

interface CountryDetailProps {
	country: Country
}

export default function CountryDetail({ country }: CountryDetailProps) {
	const nativeName = country.name.nativeName
		? Object.values(country.name.nativeName)[0]?.official
		: country.name.common

	const currencies = country.currencies
		? Object.values(country.currencies).map((c) => c.name).join(', ')
		: 'N/A'

	const languages = country.languages
		? Object.values(country.languages).join(', ')
		: 'N/A'

	const borders = country.borders || []

	return (
		<div className={styles.detailWrapper}>
			<button className={styles.backButton} onClick={() => history.back()}>
				← Back
			</button>

			<div className={styles.content}>
				{/* Flag */}
				<div className={styles.flag}>
					<img src={country.flags.svg} alt={`${country.name.common} flag`} />
				</div>

				{/* Info */}
				<div className={styles.info}>
					<h2 className={styles.name}>{country.name.common}</h2>

					<div className={styles.columns}>
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

					{/* Borders */}
					<div className={styles.borders}>
						<strong>Border Countries:</strong>
						<div className={styles.badgeContainer}>
							{borders.length > 0 ? (
								borders.map((border) => (
									<span key={border} className={styles.badge}>
                    {border}
                  </span>
								))
							) : (
								<span>No borders</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

// 'use client'
//
// import styles from '@/styles/components/countrydetail.module.scss'
// import {Country} from "@/types/country";
//
// interface CountryDetailProps {
// 	country: Country
// }
//
// export default function CountryDetail({ country }: CountryDetailProps) {
// 	const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0]?.official : country.name.common
// 	const currencies = country.currencies ? Object.values(country.currencies).map((c) => c.name).join(', ') : 'N/A'
// 	const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A'
// 	const borders = country.borders || []
//
// 	return (
// 		<div className={styles.detailWrapper}>
//
// 			<div className={styles.flagContainer}>
// 				<div className={styles.flag}>
// 					<img src={country.flags.svg} alt={`${country.name.common} flag`} />
// 				</div>
// 			</div>
//
// 			<div className={styles.info}>
// 				<h2 className={styles.countryName}>{country.name.common}</h2>
//
// 				<div className={styles.infoColumns}>
// 					<div className={styles.column}>
// 						<div><strong>Native Name:</strong> {nativeName}</div>
// 						<div><strong>Population:</strong> {country.population.toLocaleString()}</div>
// 						<div><strong>Region:</strong> {country.region}</div>
// 						<div><strong>Sub Region:</strong> {country.subregion || 'N/A'}</div>
// 						<div><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</div>
// 					</div>
//
// 					<div className={styles.column}>
// 						<div><strong>Top Level Domain:</strong> {country.tld?.[0] || 'N/A'}</div>
// 						<div><strong>Currencies:</strong> {currencies}</div>
// 						<div><strong>Languages:</strong> {languages}</div>
// 					</div>
// 				</div>
//
// 				<div className={styles.borders}>
// 					<span><strong>Border Countries:</strong></span>
// 					<div className={styles.borderList}>
// 						{borders.length > 0 ? (
// 							borders.map((b) => (
// 								<span key={b} className={styles.badge}>{b}</span>
// 							))
// 						) : (
// 							<span>No borders</span>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
