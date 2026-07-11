import { doctor, reviews } from '../data/doctor'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="hero-rank">
            <span className="star" aria-hidden="true">★</span>
            {doctor.accolade}
          </p>
          <p className="role">{doctor.title}</p>
          <h1>
            Dr. Rashmi <span className="accent">Chaudhary</span>
          </h1>
          <p className="tagline">{doctor.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#booking">
              Book a Consultation
            </a>
            <a className="btn btn-ghost" href="#videos">
              Watch her videos
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="num">
                {doctor.yearsExperience}
                <span className="unit">+</span>
              </div>
              <div className="lbl">Years of experience</div>
            </div>
            <div className="stat">
              <div className="num">
                {reviews.aggregateRating}
                <span className="unit">/5</span>
              </div>
              <div className="lbl">{reviews.ratingCount}+ patient ratings</div>
            </div>
            <div className="stat">
              <div className="num">{doctor.languages.length}</div>
              <div className="lbl">Languages spoken</div>
            </div>
          </div>
        </div>

        <div className="hero-figure">
          <div className="hero-arch-bg" aria-hidden="true" />
          <div className="hero-arch">
            <img
              src="/dr-rashmi.jpg"
              alt="Portrait of Dr. Rashmi Chaudhary, Obstetrician and Gynaecologist"
              width={590}
              height={640}
            />
          </div>

          <div className="hero-badge exp" aria-hidden="true">
            <span className="big">{doctor.yearsExperience}+ yrs</span>
            <span className="cap">of experience</span>
          </div>

          <div className="hero-badge rating">
            <span className="big">{reviews.aggregateRating}</span>
            <span>
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <br />
              <span className="cap">{reviews.ratingCount}+ reviews</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
