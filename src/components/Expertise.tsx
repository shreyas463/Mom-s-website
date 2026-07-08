import { expertise } from '../data/doctor'
import Icon from './Icon'

export default function Expertise() {
  return (
    <section id="expertise" className="section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What she treats</span>
          <h2 className="section-title">Areas of expertise</h2>
          <p className="lead">
            Comprehensive obstetric and gynaecological care, backed by decades of
            experience in some of the region’s leading hospitals.
          </p>
        </div>

        <div className="grid grid-3">
          {expertise.map((e) => (
            <article className="card" key={e.title}>
              <div className="ico">
                <Icon name={e.icon} />
              </div>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
