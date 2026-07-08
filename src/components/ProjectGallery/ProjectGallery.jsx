import { Link } from "react-router-dom";
import projects from "../../data/projects";

function ProjectGallery() {

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="project-gallery">

      <div className="container">

        <div className="gallery-header">

          <span className="section-tag">
            OUR PORTFOLIO
          </span>

          <h2>
            Completed Projects
          </h2>

          <p>
            Explore how our premium marble, granite and
            luxury tile collections transform homes,
            villas, offices and commercial spaces.
          </p>

        </div>

        <div className="gallery-grid">

          {featuredProjects.map((project) => (

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

                <span>
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="gallery-footer">

          <Link to="/projects">

            <button className="primary-btn">
              View All Projects
            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProjectGallery;