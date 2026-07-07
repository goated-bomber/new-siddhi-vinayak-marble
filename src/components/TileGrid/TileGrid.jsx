import TileCard from "../TileCard/TileCard";

function TileGrid({
  tiles = [],
  title = "",
  emptyMessage = "No tiles found."
}) {
  return (
    <section className="tile-grid-section">

      <div className="container">

        {title && (
          <div className="tile-grid-header">
            <h2>{title}</h2>

            <p>
              {tiles.length} design
              {tiles.length !== 1 ? "s" : ""}
              {" "}available
            </p>
          </div>
        )}

        {tiles.length > 0 ? (

          <div className="tiles-grid">

            {tiles.map((tile) => (

              <TileCard
                key={tile.id}
                tile={tile}
              />

            ))}

          </div>

        ) : (

          <div className="empty-state">

            <h3>
              No Results Found
            </h3>

            <p>
              {emptyMessage}
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default TileGrid;