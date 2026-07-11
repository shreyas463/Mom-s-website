import { doctor } from '../data/doctor'

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">About Dr. Chaudhary</span>
          <h2>Care that stays with you, every step of the way</h2>
          <p>
            <strong>{doctor.name}</strong> is the{' '}
            <strong>Head of the Obstetrics &amp; Gynaecology department</strong>{' '}
            at the <strong>Cloudnine Group of Hospitals</strong> in Bangalore,
            with over <strong>{doctor.yearsExperience} years</strong> of
            experience caring for women and families.
          </p>
          <p className="pullquote">
            “She explains every detail clearly and patiently — you always feel
            safe, informed and genuinely looked after.”
          </p>
          <p>
            She trained at Tata Main Hospital, a tertiary referral centre, in
            high-risk pregnancy management, fetal medicine and complex
            gynaecological surgery — and is skilled in minimally invasive
            laparoscopy and hysteroscopy. From planning a pregnancy through
            delivery and beyond, she is with you at every step.
          </p>
        </div>

        <div className="info-card">
          <div className="info-head">At a glance</div>
          <ul className="info-list" aria-label="Key details">
            <li>
              <span className="k">Speciality</span>
              <span className="v">Obstetrics &amp; Gynaecology</span>
            </li>
            <li>
              <span className="k">Experience</span>
              <span className="v">{doctor.yearsExperience} years</span>
            </li>
            <li>
              <span className="k">Currently at</span>
              <span className="v">{doctor.hospital}</span>
            </li>
            <li>
              <span className="k">Consultation fee</span>
              <span className="v">₹{doctor.consultationFeeINR}</span>
            </li>
            <li>
              <span className="k">Languages</span>
              <span className="v">{doctor.languages.join(', ')}</span>
            </li>
            <li>
              <span className="k">KMC Registration</span>
              <span className="v">{doctor.kmcRegistration}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
