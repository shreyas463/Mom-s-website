import { videos } from '../data/doctor'

export default function Videos() {
  return (
    <section id="videos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Learn from Dr. Chaudhary</span>
          <h2 className="section-title">Educational videos</h2>
          <p className="lead">
            Dr. Chaudhary explains common women’s health topics in clear, simple
            terms. Tap any video to watch on YouTube.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((v) => (
            <a
              key={v.id}
              className="video-card"
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch on YouTube: ${v.title}`}
            >
              <div className="video-thumb">
                <img
                  className="video-img"
                  src={`/thumbs/${v.id}.jpg`}
                  alt={`Video thumbnail: ${v.title}`}
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <span className="video-topic">{v.topic}</span>
                <span className="play" aria-hidden="true" />
              </div>
              <div className="meta">
                <h4>{v.title}</h4>
                <span>Watch on YouTube ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
