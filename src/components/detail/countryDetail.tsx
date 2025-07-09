// import styles from '@/styles/components/countrydetail.module.scss'
//
// interface CountryDetailProps {
//     slug: string
// }
//
// const countryData = {
//     name: 'Belgium',
//     flag: '🇧🇪',
//     nativeName: 'België',
//     population: '11,319,511',
//     region: 'Europe',
//     subRegion: 'Western Europe',
//     capital: 'Brussels',
//     topLevelDomain: '.be',
//     currencies: 'Euro',
//     languages: 'Dutch, French, German',
//     borderCountries: ['France', 'Germany', 'Netherlands'],
// }
//
// export default function CountryDetail({ slug }: CountryDetailProps) {
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.flagContainer}>
//                 <div className={styles.flag}>{countryData.flag}</div>
//             </div>
//
//             <div className={styles.info}>
//                 <h1 className={styles.title}>{countryData.name}</h1>
//
//                 <div className={styles.columns}>
//                     <div className={styles.column}>
//                         <p><strong>Native Name:</strong> {countryData.nativeName}</p>
//                         <p><strong>Population:</strong> {countryData.population}</p>
//                         <p><strong>Region:</strong> {countryData.region}</p>
//                         <p><strong>Sub Region:</strong> {countryData.subRegion}</p>
//                         <p><strong>Capital:</strong> {countryData.capital}</p>
//                     </div>
//                     <div className={styles.column}>
//                         <p><strong>Top Level Domain:</strong> {countryData.topLevelDomain}</p>
//                         <p><strong>Currencies:</strong> {countryData.currencies}</p>
//                         <p><strong>Languages:</strong> {countryData.languages}</p>
//                     </div>
//                 </div>
//
//                 <div className={styles.borders}>
//                     <p><strong>Border Countries:</strong></p>
//                     <div className={styles.borderList}>
//                         {countryData.borderCountries.map((country) => (
//                             <span key={country} className={styles.borderButton}>
//                 {country}
//               </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
