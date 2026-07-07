import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <Link
          to="/"
          className="navbar-logo"
        >
          <div>

            <h2>
              New Siddhi Vinayak
            </h2>

            <span>
              Marble & Tiles
            </span>

          </div>
        </Link>

        {/* Navigation */}

        <ul className="navbar-links">

          <li>
            <NavLink
              to="/"
              end
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/collection">
              Collection
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects">
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>

        {/* WhatsApp CTA */}

        <div className="navbar-actions">

          <a
            href="https://wa.me/919331575229?text=Hello, I am interested in your marble and tile collection. I would like more information."
            target="_blank"
            rel="noreferrer"
          >
            <button className="primary-btn">
              WhatsApp
            </button>
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;