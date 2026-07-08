import { doctor, reviews, qualifications, locations } from '../data/doctor'

/**
 * Schema.org JSON-LD so search engines understand this is a physician's page.
 * Improves how the site appears in Google (name, speciality, rating, etc.).
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    medicalSpecialty: 'Gynecologic',
    description: doctor.tagline,
    url: 'https://drrashmichaudhary.com/',
    sameAs: [doctor.cloudnineProfile, ...reviews.platforms.map((p) => p.url)],
    memberOf: { '@type': 'Organization', name: doctor.hospital },
    knowsLanguage: doctor.languages,
    hasCredential: qualifications.map((q) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: q.degree,
      recognizedBy: { '@type': 'Organization', name: q.institution },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.aggregateRating,
      reviewCount: reviews.ratingCount,
      bestRating: 5,
    },
    address: locations.map((l) => ({
      '@type': 'PostalAddress',
      name: l.name,
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    })),
  }

  return (
    <script
      type="application/ld+json"
      // JSON-LD is data, not executable script; safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
