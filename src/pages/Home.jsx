import Hero from "../components/Hero/Hero";
import TrendingTiles from "../components/TrendingTiles/TrendingTiles";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import { Link } from "react-router-dom";
import tiles from "../data/tiles";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}

      <Hero />

      {/* Welcome Section */}

      <section className="welcome-section">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              WELCOME TO
            </span>

            <h2>
              New Siddhi Vinayak Marble
            </h2>

            <p>
              Discover a premium collection of marble,
              granite, floor tiles, wall tiles, and
              luxury surface solutions carefully selected
              to transform homes, offices, villas,
              hotels, and commercial spaces.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-choose-us">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              WHY CHOOSE US
            </span>

            <h2>
              Quality. Luxury. Trust.
            </h2>

          </div>

          <div className="grid grid-3">

            <div className="feature-card card-hover">

              <div className="feature-icon">
                💎
              </div>

              <h3>
                Premium Collection
              </h3>

              <p>
                Carefully selected marble,
                granite, and tile collections
                for modern interiors.
              </p>

            </div>

            <div className="feature-card card-hover">

              <div className="feature-icon">
                🏡
              </div>

              <h3>
                Design Solutions
              </h3>

              <p>
                Perfect materials for homes,
                villas, apartments, hotels,
                and commercial spaces.
              </p>

            </div>

            <div className="feature-card card-hover">

              <div className="feature-icon">
                ⭐
              </div>

              <h3>
                Trusted Service
              </h3>

              <p>
                Dedicated customer support
                and guidance for every project.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Trending Products */}

      <TrendingTiles
        tiles={tiles}
        limit={6}
      />

      {/* Categories */}

<section className="home-categories">

  <div className="container">

    <div className="section-header">

      <span className="section-tag">
        COLLECTIONS
      </span>

      <h2>
        Explore Categories
      </h2>

    </div>

    <div className="grid grid-4">

      <Link
        to="/collection?category=marble"
        className="category-card card-hover"
      >
        <h3>Marble</h3>
      </Link>

      <Link
        to="/collection?category=granite"
        className="category-card card-hover"
      >
        <h3>Granite</h3>
      </Link>

      <Link
        to="/collection?category=floor-tiles"
        className="category-card card-hover"
      >
        <h3>Floor Tiles</h3>
      </Link>

      <Link
        to="/collection?category=wall-tiles"
        className="category-card card-hover"
      >
        <h3>Wall Tiles</h3>
      </Link>

      <Link
        to="/collection?category=bathroom-tiles"
        className="category-card card-hover"
      >
        <h3>Bathroom Tiles</h3>
      </Link>

      <Link
        to="/collection?category=kitchen-tiles"
        className="category-card card-hover"
      >
        <h3>Kitchen Tiles</h3>
      </Link>

      <Link
        to="/collection?category=outdoor-tiles"
        className="category-card card-hover"
      >
        <h3>Outdoor Tiles</h3>
      </Link>

      <Link
        to="/collection?category=portrait-tiles"
        className="category-card card-hover"
      >
        <h3>Portrait Tiles</h3>
      </Link>

      <Link
        to="/collection?category=sanitary-ware"
        className="category-card card-hover"
      >
        <h3>Sanitary Ware</h3>
      </Link>

      <Link
        to="/collection?category=tile-adhesives"
        className="category-card card-hover"
      >
        <h3>Tile Adhesives</h3>
      </Link>

      <Link
        to="/collection?category=borders"
        className="category-card card-hover"
      >
        <h3>Borders</h3>
      </Link>

      <Link
        to="/collection?category=premium-collection"
        className="category-card card-hover"
      >
        <h3>Premium Collection</h3>
      </Link>

    </div>

  </div>

</section>

      {/* Statistics */}

<section className="stats-section">

  <div className="container">

    <div className="section-header">

      <span className="section-tag">
        OUR ACHIEVEMENTS
      </span>

      <h2>
        Trusted By Thousands
      </h2>

      <p>
        Delivering premium marble, granite and tile
        solutions for residential and commercial spaces.
      </p>

    </div>

    <div className="grid grid-4">

      <div className="stat-card">

        <h2>500+</h2>

        <p>
          Designs Available
        </p>

      </div>

      <div className="stat-card">

        <h2>1000+</h2>

        <p>
          Happy Customers
        </p>

      </div>

      <div className="stat-card">

        <h2>50+</h2>

        <p>
          Premium Collections
        </p>

      </div>

      <div className="stat-card">

        <h2>10+</h2>

        <p>
          Years of Excellence
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Project Gallery */}

      <ProjectGallery />

      {/* CTA */}

      <ContactCTA />

    </div>
  );
}

export default Home;