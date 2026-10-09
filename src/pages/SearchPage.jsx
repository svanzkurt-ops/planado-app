import { Link } from 'react-router-dom';
import { cities, providers, eventTypes } from '../data/mockData';

function SearchPage() {
  const filteredProviders = providers.filter((provider) => provider.location === cities[0]);

  return (
    <div className="page">
      <section className="toolbar-card">
        <div className="field-grid two-col">
          <label>
            Event
            <select defaultValue={eventTypes[0]}>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Date
            <input type="date" defaultValue="2026-11-14" />
          </label>

          <label>
            Category
            <select defaultValue="All">
              <option value="All">All</option>
              <option value="Photography + Video">Photography + Video</option>
              <option value="Event Organizer">Event Organizer</option>
              <option value="Venue">Venue</option>
            </select>
          </label>

          <label>
            Budget
            <input type="number" defaultValue="100000" />
          </label>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2>Available providers</h2>
          <Link to="/compare" className="text-link">
            Compare selected
          </Link>
        </div>

        <div className="provider-grid">
          {filteredProviders.map((provider) => (
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

                <p className="provider-description">{provider.description}</p>

                <div className="meta-row">
                  <div>
                    <span className="muted">Starts at</span>
                    <strong>₱{provider.startsAt.toLocaleString()}</strong>
                  </div>
                  <div className="inline-actions">
                    <button className="small-button ghost-button">Compare</button>
                    <Link to={`/profile/${provider.id}`} className="small-button">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
