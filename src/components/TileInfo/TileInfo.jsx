function TileInfo({ tile }) {

  if (!tile) {
    return (
      <div className="tile-info">
        <h2>Tile Not Found</h2>
      </div>
    );
  }

  return (
    <div className="tile-info">

      {/* Category */}

      <span className="tile-category">
        {tile.category}
      </span>

      {/* Name */}

      <h1 className="tile-name">
        {tile.name}
      </h1>

      {/* Description */}

      <p className="tile-description">
        {tile.description}
      </p>

      {/* Specifications */}

      <div className="tile-specifications">

        <h3>
          Specifications
        </h3>

        <div className="spec-grid">

          <div className="spec-item">
            <strong>Color</strong>
            <span>{tile.color}</span>
          </div>

          <div className="spec-item">
            <strong>Finish</strong>
            <span>{tile.finish}</span>
          </div>

          <div className="spec-item">
            <strong>Size</strong>
            <span>{tile.size}</span>
          </div>

          <div className="spec-item">
            <strong>Material</strong>
            <span>{tile.material}</span>
          </div>

        </div>

      </div>

      {/* Applications */}

      {tile.applications &&
        tile.applications.length > 0 && (

        <div className="tile-applications">

          <h3>
            Suitable For
          </h3>

          <div className="application-tags">

            {tile.applications.map(
              (application, index) => (

                <span
                  key={index}
                  className="application-tag"
                >
                  {application}
                </span>

              )
            )}

          </div>

        </div>

      )}

      {/* Features */}

      {tile.features &&
        tile.features.length > 0 && (

        <div className="tile-features">

          <h3>
            Features
          </h3>

          <ul>

            {tile.features.map(
              (feature, index) => (

                <li key={index}>
                  ✓ {feature}
                </li>

              )
            )}

          </ul>

        </div>

      )}

      {/* CTA Buttons */}

      <div className="tile-actions">

        <a
          href={`https://wa.me/919331575229?text=${encodeURIComponent(
            `Hello, I am interested in ${tile.name}. Can you provide more details?`
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="primary-btn">
            WhatsApp Inquiry
          </button>
        </a>

        <a
          href="tel:+919331575229"
        >
          <button className="secondary-btn">
            Call Now
          </button>
        </a>

      </div>

    </div>
  );
}

export default TileInfo;