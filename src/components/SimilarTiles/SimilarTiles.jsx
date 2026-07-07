import { Link } from "react-router-dom";

function SimilarTiles({
  currentTileId = null,
  tiles = []
}) {

  const similarTiles = tiles
    .filter(
      (tile) =>
        tile.id !== currentTileId
    )
    .slice(0, 3);

  return (
    <section className="similar-tiles">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            RECOMMENDED DESIGNS
          </span>

          <h2>
            You May Also Like
          </h2>

          <p>
            Discover more premium designs from
            our exclusive collection.
          </p>

        </div>

        <div className="similar-grid">

          {similarTiles.length > 0 ? (

            similarTiles.map((tile) => (

              <div
                key={tile.id}
                className="similar-card"
              >

                <div className="similar-image">

                  <img
                    src={tile.images?.[0]}
                    alt={tile.name}
                  />

                  {tile.featured && (
                    <span className="similar-badge">
                      Premium
                    </span>
                  )}

                </div>

                <div className="similar-content">

                  <div className="similar-category">
                    {tile.category}
                  </div>

                  <h3>
                    {tile.name}
                  </h3>

                  <p>
                    {tile.shortDescription}
                  </p>

                  <div className="similar-meta">

                    <span>
                      🎨 {tile.color}
                    </span>

                    <span>
                      ✨ {tile.finish}
                    </span>

                  </div>

                  <Link
                    to={`/tile/${tile.slug}`}
                  >
                    <button className="primary-btn">
                      View Details
                    </button>
                  </Link>

                </div>

              </div>

            ))

          ) : (

            <div className="empty-similar">

              <h3>
                More Designs Coming Soon
              </h3>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default SimilarTiles;