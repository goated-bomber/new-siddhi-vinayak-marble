import { Link } from "react-router-dom";

function TileCard({ tile }) {

  if (!tile) return null;

  return (
    <div className="tile-card">

      {/* Image */}

      <div className="tile-card-image">

        <img
          src={tile.images?.[0]}
          alt={tile.name}
          loading="lazy"
        />

        {tile.featured && (
          <span className="featured-badge">
  ★ Premium Collection
</span>
        )}

      </div>

      {/* Content */}

      <div className="tile-card-content">

        <div className="tile-card-category">

          {tile.category}
        </div>

        <h3 className="tile-card-title">
          {tile.name}
        </h3>

        <p className="tile-card-description">

          {tile.shortDescription ||
            tile.description?.slice(0, 100) + "..."}

        </p>

        {/* Specifications */}

        <div className="tile-specs">

  <div className="tile-spec">
    🎨 {tile.color}
  </div>

  <div className="tile-spec">
    ✨ {tile.finish}
  </div>

</div>

        {tile.size && (
          <div className="tile-size">

            📏 {tile.size}

          </div>
        )}

        {/* Applications */}

        {tile.applications &&
          tile.applications.length > 0 && (

          <div className="tile-applications">

            {tile.applications
              .slice(0, 3)
              .map((application, index) => (

                <span
                  key={index}
                  className="application-tag"
                >
                  {application}
                </span>

              ))}

          </div>

        )}

        {/* Actions */}

        <div className="tile-card-actions">

          <Link
            to={`/tile/${tile.slug}`}
          >
            <button className="primary-btn">
              View Details
            </button>
          </Link>

          <a
            href={`https://wa.me/919331575229?text=${encodeURIComponent(
              `Hello, I am interested in ${tile.name}.`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary-btn">
              WhatsApp
            </button>
          </a>

        </div>

      </div>

    </div>
  );
}

export default TileCard;