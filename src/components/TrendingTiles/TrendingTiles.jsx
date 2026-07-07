import { Link } from "react-router-dom";
import TileCard from "../TileCard/TileCard";

function TrendingTiles({
  tiles = [],
  limit = 6
}) {

  function shuffle(array) {

    const arr = [...array];

    for (
      let i = arr.length - 1;
      i > 0;
      i--
    ) {

      const j = Math.floor(
        Math.random() * (i + 1)
      );

      [arr[i], arr[j]] =
        [arr[j], arr[i]];

    }

    return arr;

  }

  const trendingTiles = shuffle(

    tiles.filter(

      tile =>

        tile.featured === true ||
        tile.trending === true

    )

  ).slice(0, limit);

  return (

    <section className="trending-tiles">

      <div className="container">

        <div className="trending-header">

          <span className="section-tag">
            POPULAR CHOICES
          </span>

          <h2>
            Trending Designs
          </h2>

          <p>
            Discover some of our most popular
            marble, granite and tile collections
            loved by homeowners, architects and
            interior designers.
          </p>

        </div>

        {trendingTiles.length > 0 ? (

          <div className="tiles-grid">

            {trendingTiles.map((tile) => (

              <TileCard
                key={tile.id}
                tile={tile}
              />

            ))}

          </div>

        ) : (

          <div className="empty-trending">

            <h3>
              No Trending Designs Available
            </h3>

            <p>
              Add products marked as featured
              or trending inside tiles.js.
            </p>

          </div>

        )}

        <div className="trending-footer">

          <Link to="/collection">

            <button className="primary-btn">
              View Full Collection
            </button>

          </Link>

        </div>

      </div>

    </section>

  );

}

export default TrendingTiles;