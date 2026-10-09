import { quotes, bookings } from '../data/mockData';

function DashboardPage() {
  return (
    <div className="page dashboard-page">
      <section className="stats-grid">
        <div className="stat-card">
          <span className="muted">Upcoming event</span>
          <strong>{bookings[0]?.event || 'No event yet'}</strong>
          <small>{bookings[0]?.date || '—'}</small>
        </div>

        <div className="stat-card">
          <span className="muted">Pending quotes</span>
          <strong>{quotes.filter((quote) => quote.status === 'Pending').length}</strong>
          <small>Awaiting review</small>
        </div>

        <div className="stat-card">
          <span className="muted">Active bookings</span>
          <strong>{bookings.length}</strong>
          <small>Confirmed</small>
        </div>
      </section>

      <section className="section-block">
        <h2>Quotes</h2>

        <div className="list-stack">
          {quotes.map((quote) => (
            <div className="list-row" key={quote.id}>
              <div>
                <strong>{quote.provider}</strong>
                <p>
                  {quote.event} · ₱{quote.amount.toLocaleString()}
                </p>
              </div>
              <span className="status-pill">{quote.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Bookings</h2>

        <div className="list-stack">
          {bookings.map((booking) => (
            <div className="list-row" key={booking.id}>
              <div>
                <strong>{booking.venue}</strong>
                <p>
                  {booking.event} · {booking.date}
                </p>
              </div>
              <span className="status-pill success">{booking.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
