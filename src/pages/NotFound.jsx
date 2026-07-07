import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page">

      <section className="notfound-section">

        <div className="container">

          <div className="notfound-content">

            <span className="section-tag">
              ERROR 404
            </span>

            <h1>
              Page Not Found
            </h1>

            <p>
              The page you're looking for doesn't
              exist or may have been moved.
              Explore our premium marble and tile
              collection instead.
            </p>

            <div className="notfound-actions">

              <Link to="/">
                <button className="primary-btn">
                  Back To Home
                </button>
              </Link>

              <Link to="/collection">
                <button className="secondary-btn">
                  Browse Collection
                </button>
              </Link>

            </div>

            <div className="notfound-decoration">

              <div className="error-number">
                404
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default NotFound;