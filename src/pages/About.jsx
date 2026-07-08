import ContactCTA from "../components/ContactCTA/ContactCTA";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="container">

          <span className="section-tag">
            ABOUT US
          </span>

          <h1>
            New Siddhi Vinayak Marble
          </h1>

          <p>
            Bringing premium marble, granite,
            designer tiles, sanitary ware and
            luxury surface solutions to homes,
            villas, offices and commercial spaces.
          </p>

        </div>

      </section>

      {/* Story */}

      <section className="about-story">

        <div className="container">

          <div className="about-content">

            <div className="about-text">

              <h2>
                Our Story
              </h2>

              <p>
                New Siddhi Vinayak Marble was
                established with a simple vision:
                to provide customers with premium
                quality marble, granite and tile
                solutions that combine beauty,
                durability and long-term value.
              </p>

              <p>
                Over the years, we have proudly
                served homeowners, builders,
                architects, interior designers
                and businesses by helping them
                select the perfect materials for
                their projects.
              </p>

              <p>
                Our collection is carefully
                curated to offer elegant,
                contemporary and timeless designs
                that transform ordinary spaces
                into extraordinary environments.
              </p>

            </div>

            <div className="about-image">

              <img
                src="/images/showroom/1.png"
                alt="New Siddhi Vinayak Marble Showroom"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

<section className="why-us">

  <div className="container">

    <div className="why-us-header">

      <span className="section-tag">
        WHY CHOOSE US
      </span>

      <h2>
        Trusted By Customers
      </h2>

      <p>
        Delivering premium materials,
        expert guidance and dependable
        service for homes, villas,
        offices and commercial projects.
      </p>

    </div>

    <div className="grid grid-3">

      <div className="feature-card">

        <h3>
          Premium Collection
        </h3>

        <p>
          Extensive range of marble,
          granite, tiles, sanitary ware,
          borders and luxury surface
          solutions.
        </p>

      </div>

      <div className="feature-card">

        <h3>
          Quality Assurance
        </h3>

        <p>
          Every product is selected
          carefully for durability,
          aesthetics and premium finish.
        </p>

      </div>

      <div className="feature-card">

        <h3>
          Expert Guidance
        </h3>

        <p>
          Personalized support to help
          customers choose the right
          materials for every project.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Product Categories */}

      <section className="about-categories">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              OUR COLLECTION
            </span>

            <h2>
              What We Offer
            </h2>

          </div>

          <div className="grid grid-4">

            <div className="card card-hover">
              <h3>Marble</h3>
              <p>Luxury marble collections for elegant interiors.</p>
            </div>

            <div className="card card-hover">
              <h3>Granite</h3>
              <p>Durable granite solutions for homes and commercial projects.</p>
            </div>

            <div className="card card-hover">
              <h3>Floor Tiles</h3>
              <p>Premium flooring solutions for modern spaces.</p>
            </div>

            <div className="card card-hover">
              <h3>Wall Tiles</h3>
              <p>Designer wall tiles for stunning interiors.</p>
            </div>

            <div className="card card-hover">
              <h3>Bathroom Tiles</h3>
              <p>Modern bathroom tile collections with luxury finishes.</p>
            </div>

            <div className="card card-hover">
              <h3>Kitchen Tiles</h3>
              <p>Stylish and practical kitchen tile solutions.</p>
            </div>

            <div className="card card-hover">
              <h3>Outdoor Tiles</h3>
              <p>Durable outdoor surfaces built to last.</p>
            </div>

            <div className="card card-hover">
              <h3>Portrait Tiles</h3>
              <p>Large-format designer tiles for feature walls.</p>
            </div>

            <div className="card card-hover">
              <h3>Sanitary Ware</h3>
              <p>Premium bathroom fittings and sanitary solutions.</p>
            </div>

            <div className="card card-hover">
              <h3>Tile Adhesives</h3>
              <p>Reliable adhesive solutions for secure installations.</p>
            </div>

            <div className="card card-hover">
              <h3>Borders</h3>
              <p>Decorative borders and design accents.</p>
            </div>

            <div className="card card-hover">
              <h3>Premium Collection</h3>
              <p>Exclusive products for luxury projects.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="about-stats">

        <div className="container">

          <div className="grid grid-4">

            <div className="stat-card">
              <h2>500+</h2>
              <p>Designs Available</p>
            </div>

            <div className="stat-card">
              <h2>1000+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="stat-card">
              <h2>50+</h2>
              <p>Premium Collections</p>
            </div>

            <div className="stat-card">
              <h2>10+</h2>
              <p>Years of Excellence</p>
            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission-section">

        <div className="container">

          <div className="grid grid-2">

            <div className="mission-card">

              <h2>
                Our Mission
              </h2>

              <p>
                To provide premium quality marble,
                granite, tiles and surface solutions
                that help customers create elegant,
                durable and timeless spaces.
              </p>

            </div>

            <div className="mission-card">

              <h2>
                Our Vision
              </h2>

              <p>
                To become the most trusted
                destination for premium marble
                and tile solutions through quality,
                innovation and exceptional service.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Vision Statement */}

      <section className="about-vision">

        <div className="container text-center">

          <span className="section-tag">
            OUR FUTURE
          </span>

          <h2>
            Transforming Spaces With Luxury & Elegance
          </h2>

          <p>
            We strive to inspire beautiful living
            and working environments through
            exceptional materials, innovative
            designs and a commitment to customer
            satisfaction.
          </p>

        </div>

      </section>

      {/* CTA */}

      <ContactCTA />

    </div>
  );
}

export default About;