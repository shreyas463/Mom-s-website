import { reviews } from '../data/doctor'

export default function Reviews() {
  return (
    <section id="reviews" className="section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Patient feedback</span>
          <h2 className="section-title">What patients say</h2>
        </div>

        <div className="rating-hero">
          <div className="big">{reviews.aggregateRating}</div>
          <div className="stars" aria-hidden="true">
            ★★★★★
          </div>
          <p style={{ color: 'var(--ink-soft)', margin: '6px 0 0' }}>
            Average of <strong>{reviews.ratingCount}+</strong> verified patient
            ratings across public platforms
          </p>
        </div>

        <div className="review-cards">
          {reviews.themes.map((t, i) => (
            <blockquote className="review" key={i}>
              <p>“{t.quote}”</p>
              <cite className="attr">— {t.attribution}</cite>
            </blockquote>
          ))}
        </div>

        <p className="lead" style={{ marginBottom: '1rem' }}>
          Read genuine, verified reviews from Dr. Chaudhary’s patients on these
          platforms:
        </p>
        <div className="platform-links">
          {reviews.platforms.map((p) => (
            <a
              key={p.name}
              className="btn btn-ghost"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Reviews on {p.name} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
