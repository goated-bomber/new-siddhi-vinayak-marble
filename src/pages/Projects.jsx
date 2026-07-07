import ContactCTA from "../components/ContactCTA/ContactCTA";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="projects-page">

      {/* Hero */}

      <section className="projects-hero">

        <div className="container">

          <span className="section-tag">
            OUR PROJECTS
          </span>

          <h1>
            Completed Installations
          </h1>

          <p>
            Explore some of the residential,
            commercial and luxury spaces transformed
            using our premium marble, granite,
            designer tiles and surface solutions.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="project-stats">

        <div className="container">

          <div className="grid grid-4">

            <div className="stat-card">
              <h2>{projects.length}+</h2>
              <p>Completed Projects</p>
            </div>

            <div className="stat-card">
              <h2>500+</h2>
              <p>Premium Designs</p>
            </div>

            <div className="stat-card">
              <h2>1000+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="stat-card">
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

      </section>

      {/* Featured Projects */}

      <section className="projects-grid-section">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              PORTFOLIO
            </span>

            <h2>
              Featured Projects
            </h2>

            <p>
              A glimpse into some of the beautiful
              spaces created using our premium
              collections.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <div
                key={project.id}
                className="project-card"
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                </div>

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-location">

                    📍 {project.location}

                  </div>

                  {project.materials?.length > 0 && (

                    <div className="project-materials">

                      {project.materials.map(
                        (material, index) => (

                          <span
                            key={index}
                            className="material-tag"
                          >
                            {material}
                          </span>

                        )
                      )}

                    </div>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Customers Choose Us */}

      <section className="project-benefits">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              OUR ADVANTAGE
            </span>

            <h2>
              Why Customers Choose Us
            </h2>

            <p>
              Quality products, expert guidance,
              and years of trusted service.
            </p>

          </div>

          <div className="grid grid-3">

            <div className="feature-card">

              <h3>
                Premium Materials
              </h3>

              <p>
                Carefully selected marble,
                granite and tile collections
                sourced for quality and beauty.
              </p>

            </div>

            <div className="feature-card">

              <h3>
                Expert Guidance
              </h3>

              <p>
                Personalized assistance to help
                customers choose the perfect
                materials for every project.
              </p>

            </div>

            <div className="feature-card">

              <h3>
                Proven Results
              </h3>

              <p>
                Beautiful installations across
                homes, villas, offices, hotels
                and commercial spaces.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact CTA */}

      <ContactCTA />

    </div>
  );
}

export default Projects;