import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">

      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content container">

        <span className="hero-tag">
          PREMIUM MARBLE • GRANITE • TILES
        </span>

        <h1>
          Transform Every Space
          <br />
          Into A Masterpiece
        </h1>

        <p>
          Explore our exclusive collection of luxury marble,
          granite, floor tiles, wall tiles, bathroom tiles,
          and designer surfaces crafted for elegant homes
          and modern commercial spaces.
        </p>

        <div className="hero-buttons">

          <Link to="/collection">
            <button className="primary-btn">
              Explore Collection
            </button>
          </Link>

          <Link to="/projects">
            <button className="secondary-btn">
              View Projects
            </button>
          </Link>

        </div>

        <div className="hero-stats">

          <div>
            <h3>Premium</h3>
            <p>Quality Materials</p>
          </div>

          <div>
            <h3>Luxury</h3>
            <p>Design Collection</p>
          </div>

          <div>
            <h3>Trusted</h3>
            <p>Customer Service</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;