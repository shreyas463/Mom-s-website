import { locations } from '../data/doctor'

export default function Locations() {
  return (
    <section id="locations" className="section-sand">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Where to find her</span>
          <h2 className="section-title">Consultation locations</h2>
          <p className="lead">
            Dr. Chaudhary consults at two Cloudnine Hospital units in Bangalore.
            Virtual (online) consultations are also available.
          </p>
        </div>

        <div className="loc-grid">
          {locations.map((l) => (
            <article className="loc-card" key={l.name}>
              <div className="loc-pin" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </div>
              <div>
                <h3>{l.name}</h3>
                <p className="area">{l.area}</p>
                <a
                  className="btn btn-ghost"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    l.mapsQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
