import { useParams, Link } from "react-router-dom";

import tiles from "../data/tiles";

import TileGallery from "../components/TileGallery/TileGallery";
import TileInfo from "../components/TileInfo/TileInfo";
import SimilarTiles from "../components/SimilarTiles/SimilarTiles";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import {
  tileInquiry,
  quotationInquiry
} from "../utils/whatsapp";

function TileDetails() {

  const { slug } = useParams();

  const tile = tiles.find(
    (item) => item.slug === slug
  );

  /* =========================
     PRODUCT NOT FOUND
  ========================= */

  if (!tile) {

    return (

      <div className="tile-not-found">

        <div className="container">

          <div className="not-found-card">

            <h1>
              Product Not Found
            </h1>

            <p>
              The product you are looking for
              does not exist or has been removed.
            </p>

            <Link to="/collection">

              <button className="primary-btn">
                Back To Collection
              </button>

            </Link>

          </div>

        </div>

      </div>

    );

  }

  /* =========================
     SIMILAR PRODUCTS
  ========================= */

  const similarTiles = tiles.filter(
    (item) =>
      item.category === tile.category &&
      item.id !== tile.id
  );

  return (

    <div className="tile-details-page">

      {/* Breadcrumb */}

      <section className="breadcrumb-section">

        <div className="container">

          <div className="breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>›</span>

            <Link to="/collection">
              Collection
            </Link>

            <span>›</span>

            <span>
              {tile.name}
            </span>

          </div>

        </div>

      </section>

      {/* Main Product */}

      <section className="tile-main-section">

        <div className="container">

          <div className="tile-main-grid">

            {/* Gallery */}

            <div className="gallery-column">

              <TileGallery
                images={tile.images || []}
                title={tile.name}
              />

            </div>

            {/* Information */}

            <div className="info-column">

              <TileInfo tile={tile} />

              <div className="tile-actions">

                <a
                  href={tileInquiry(tile.name)}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className="primary-btn">

                    WhatsApp Inquiry

                  </button>

                </a>

                <a
                  href={quotationInquiry(tile.name)}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className="secondary-btn">

                    Request Quote

                  </button>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      {tile.features?.length > 0 && (

        <section className="tile-features">

          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                FEATURES
              </span>

              <h2>
                Why Choose This Design
              </h2>

            </div>

            <div className="features-grid">

              {tile.features.map(
                (feature, index) => (

                  <div
                    key={index}
                    className="feature-card"
                  >

                    <h3>
                      {feature}
                    </h3>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* Applications */}

      {tile.applications?.length > 0 && (

        <section className="tile-applications-section">

          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                APPLICATIONS
              </span>

              <h2>
                Best Used For
              </h2>

            </div>

            <div className="applications-grid">

              {tile.applications.map(
                (application, index) => (

                  <div
                    key={index}
                    className="application-card"
                  >

                    {application}

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* Specifications */}

      <section className="tile-specifications">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              SPECIFICATIONS
            </span>

            <h2>
              Product Information
            </h2>

          </div>

          <div className="specs-grid">

            <div className="spec-card">

              <h4>
                Category
              </h4>

              <p>
                {tile.category}
              </p>

            </div>

            <div className="spec-card">

              <h4>
                Material
              </h4>

              <p>
                {tile.material}
              </p>

            </div>

            <div className="spec-card">

              <h4>
                Color
              </h4>

              <p>
                {tile.color}
              </p>

            </div>

            <div className="spec-card">

              <h4>
                Finish
              </h4>

              <p>
                {tile.finish}
              </p>

            </div>

            <div className="spec-card">

              <h4>
                Size
              </h4>

              <p>
                {tile.size || "Custom Sizes Available"}
              </p>

            </div>

            <div className="spec-card">

              <h4>
                Availability
              </h4>

              <p>

                {tile.stock
                  ? "In Stock"
                  : "Available On Order"}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Similar Products */}

      {similarTiles.length > 0 && (

        <SimilarTiles
          currentTileId={tile.id}
          tiles={similarTiles}
        />

      )}

      {/* CTA */}

      <ContactCTA />

    </div>

  );

}

export default TileDetails;