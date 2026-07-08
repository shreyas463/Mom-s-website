import { qualifications, experience } from '../data/doctor'

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Training &amp; background</span>
          <h2 className="section-title">Qualifications &amp; career</h2>
        </div>

        <div className="creds-grid">
          <div>
            <h3 style={{ marginBottom: '0.8rem' }}>Education &amp; qualifications</h3>
            {qualifications.map((q) => (
              <div className="qual-item" key={q.degree}>
                <div className="qual-badge" aria-hidden="true">
                  {q.degree.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4>{q.degree}</h4>
                  <p>{q.institution}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ marginBottom: '0.8rem' }}>Professional experience</h3>
            <div className="timeline">
              {experience.map((x) => (
                <div className="timeline-item" key={x.role}>
                  <h4>{x.role}</h4>
                  <div className="place">{x.place}</div>
                  <p>{x.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
