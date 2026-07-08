import { doctor } from '../data/doctor'

const items = [
  {
    label: `KMC Reg. ${doctor.kmcRegistration}`,
    path: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Zm-1.2 11.4 4.6-4.6-1.2-1.2-3.4 3.4-1.6-1.6-1.2 1.2 2.8 2.8Z',
  },
  {
    label: `${doctor.yearsExperience}+ years’ experience`,
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 4 2.3-1 1.7-5-2.9V7h2v5.6Z',
  },
  {
    label: '5 languages spoken',
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.7 0 3.2 2.5 3.8 6H8.2C8.8 6.5 10.3 4 12 4Zm-6 8a6 6 0 0 1 .3-2H10c0 .7 0 1.4.1 2H6.3A6 6 0 0 1 6 12Z',
  },
  {
    label: 'Virtual & in-person visits',
    path: 'M4 5h16v10H4V5Zm2 2v6h12V7H6Zm-2 12h16v2H4v-2Z',
  },
]

export default function Trust() {
  return (
    <div className="trust">
      <div className="container trust-inner">
        {items.map((it) => (
          <div className="trust-item" key={it.label}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={it.path} />
            </svg>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
