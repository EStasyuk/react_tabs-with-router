import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import React from 'react';

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path ? 'is-active' : '';
    }

    return pathname.startsWith(path) ? 'is-active' : '';
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1 className="title is-4">MyApp</h1>
          </Link>
        </div>

        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className={`navbar-item ${isActive('/')}`} data-cy="NavLink">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </div>

            <div
              className={`navbar-item ${isActive('/tabs')}`}
              data-cy="NavLink"
            >
              <Link to="/tabs" className="navbar-link">
                Tabs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const App: React.FC = () => (
  <>
    <Nav />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);