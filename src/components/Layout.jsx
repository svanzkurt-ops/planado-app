import { NavLink, Link } from 'react-router-dom';

function Layout({ children }) {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/search', label: 'Search' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/saved', label: 'Saved' },
  ];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Link to="/" className="brand">
            PLANADO<span>.</span>
          </Link>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-shell">{children}</main>
    </div>
  );
}

export default Layout;
