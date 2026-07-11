import { doctor, contact, contactReady } from '../data/doctor'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{doctor.name}</h4>
            <p style={{ maxWidth: '38ch' }}>
              {doctor.title}. {doctor.hospital}. {doctor.yearsExperience}+ years
              caring for women’s health.
            </p>
            <p style={{ fontSize: '0.82rem' }}>KMC Reg. No. {doctor.kmcRegistration}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#credentials">Qualifications</a>
            <a href="#reviews">Reviews</a>
            <a href="#videos">Videos</a>
            <a href="#locations">Locations</a>
          </div>

          <div>
            <h4>Appointments</h4>
            <a href="#booking">Book a consultation</a>
            {contactReady && (
              <>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a href={`tel:${contact.phoneDial}`}>Call {contact.phoneDisplay}</a>
              </>
            )}
            <a
              href={doctor.cloudnineProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudnine profile ↗
            </a>
          </div>
        </div>

        <div className="disclaimer">
          <p>
            © {year} {doctor.name}. This website provides general information and
            appointment requests only; it is not a substitute for professional
            medical advice, diagnosis or treatment. In an emergency, contact your
            nearest hospital immediately.
          </p>
        </div>
      </div>
    </footer>
  )
}
