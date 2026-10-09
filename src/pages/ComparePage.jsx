import { Link } from 'react-router-dom';
import { providers } from '../data/mockData';

function SavedPage() {
  const saved = [providers[0], providers[2], providers[4]];

  return (
    <div className="page">
      <section className="section-block">
        <div className="section-header">
          <h2>Saved providers</h2>
          <Link to="/search" className="text-link">
            Add more
          </Link>
        </div>

        <div className="provider-grid compact-grid">
          {saved.map((provider) => (
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
                <h3>{provider.name}</h3>
                <p className="muted">
                  {provider.category} · ★ {provider.rating}
                </p>
                <div className="meta-row">
                  <strong>₱{provider.startsAt.toLocaleString()}</strong>
                  <Link to={`/profile/${provider.id}`} className="small-button">
                    View
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

export default SavedPage;
