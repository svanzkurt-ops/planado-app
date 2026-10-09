import { Link, useParams } from 'react-router-dom';
import { providers } from '../data/mockData';

function ProfilePage() {
  const { providerId } = useParams();
  const provider = providers.find((item) => item.id === Number(providerId));

  if (!provider) {
    return <div className="page empty-state">Provider not found.</div>;
  }

  return (
    <div className="page">
      <div className="back-link-row">
        <Link to="/search" className="text-link">
          ← Back to results
        </Link>
      </div>

      <section className="profile-banner">
        <div
          className="profile-hero"
          style={{
            background: `linear-gradient(135deg, ${provider.accent[0]}, ${provider.accent[1]})`,
          }}
        >
          <div className="profile-hero-inner">
            <span className="profile-badge">{provider.verified ? 'Verified' : 'New'}</span>
            <h1>{provider.name}</h1>
            <p>
              {provider.category} · {provider.location} · ★ {provider.rating} ({provider.reviews})
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2>About</h2>
        <p>{provider.description}</p>
      </section>

      <section className="section-block">
        <h2>Packages</h2>
        <div className="package-grid">
          {provider.packages.map((item) => (
            <div key={item.name} className="package-card">
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <strong>₱{item.price.toLocaleString()}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Reviews</h2>
        <div className="review-card">
          <p>“Made our day stress-free. Professional, calm, and detail-oriented.”</p>
          <span>— Verified customer</span>
        </div>
      </section>

      <div className="cta-row">
        <Link to="/search" className="primary-button">
          Customize package
        </Link>
        <button className="secondary-button">Message provider</button>
      </div>
    </div>
  );
}

export default ProfilePage;
