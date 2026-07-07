import { Link } from "react-router-dom";

function ProjectGallery() {
  const projects = [
    {
      id: 1,
      title: "Luxury Living Room",
      category: "Living Room",
      image: "/images/projects/living-room/project1.webp",
      description:
        "Premium marble flooring with elegant finishes."
    },

    {
      id: 2,
      title: "Modern Kitchen",
      category: "Kitchen",
      image: "/images/projects/kitchen/project1.webp",
      description:
        "Contemporary tile solutions for stylish kitchens."
    },

    {
      id: 3,
      title: "Elegant Bathroom",
      category: "Bathroom",
      image: "/images/projects/bathroom/project1.webp",
      description:
        "Luxury wall and floor tile combinations."
    },

    {
      id: 4,
      title: "Commercial Space",
      category: "Commercial",
      image: "/images/projects/commercial/project1.webp",
      description:
        "Premium surfaces designed for high-traffic areas."
    },

    {
      id: 5,
      title: "Outdoor Area",
      category: "Exterior",
      image: "/images/projects/exterior/project1.webp",
      description:
        "Durable outdoor flooring and wall solutions."
    },

    {
      id: 6,
      title: "Premium Entrance Lobby",
      category: "Lobby",
      image: "/images/projects/lobby/project1.webp",
      description:
        "Sophisticated marble installation for luxury spaces."
    }
  ];

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

          {projects.map((project) => (

            <div
              key={project.id}
              className="project-card"
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
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