import { Link } from 'react-router-dom';
import { providers, eventTypes, cities } from '../data/mockData';

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Plan smart. Celebrate beautifully.</p>
          <h1>Find. Customize. Book. Celebrate.</h1>
          <p>
            Discover trusted providers for photography, coordination, venues,
            equipment, and more.
          </p>
        </div>

        <div className="search-box">
          <div className="chip-row">
            {eventTypes.map((type) => (
              <button key={type} className="chip-button active">
                {type}
              </button>
            ))}
          </div>

          <div className="field-grid">
            <label>
              Location
              <select defaultValue={cities[0]}>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Date
              <input type="date" defaultValue="2026-11-14" />
            </label>

            <label>
              Budget
              <input type="number" defaultValue="100000" />
            </label>
          </div>

          <Link to="/search" className="primary-button wide-button">
            Search providers
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2>Featured providers</h2>
          <Link to="/search" className="text-link">
            View all
          </Link>
        </div>

        <div className="provider-grid">
          {providers.slice(0, 4).map((provider) => (
            <article className="provider-card" key={provider.id}>
              <div
                className="provider-visual"
                style={{
                  background: `linear-gradient(135deg, ${provider.accent[0]}, ${provider.accent[1]})`,
                }}
              >
                <span>{provider.name}</span>
              </div>

              <div className="provider-body">
                <div className="row-between">
                  <h3>{provider.name}</h3>
                  <button className="small-button ghost-button">♡</button>
                </div>

                <p className="muted">
                  {provider.category} · ★ {provider.rating} ({provider.reviews})
                </p>

                <div className="tag-group">
                  {provider.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="meta-row">
                  <div>
                    <span className="muted">Starts at</span>
                    <strong>₱{provider.startsAt.toLocaleString()}</strong>
                  </div>
                  <Link to={`/profile/${provider.id}`} className="small-button">
                    View profile
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
