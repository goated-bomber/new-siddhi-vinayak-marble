import { Link } from "react-router-dom";

function ContactCTA() {
  const whatsappNumber = "919331575229";

  const whatsappMessage =
    "Hello, I am interested in your marble and tile collection. I would like more information.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section className="contact-cta fade-up">

      <div className="container">

        <div className="cta-content">

          <span className="cta-tag">
            PREMIUM MARBLE & TILE COLLECTION
          </span>

          <h2>
            Transform Your Space With
            Premium Marble & Tiles
          </h2>

          <p>
            Discover an exclusive range of marble,
            granite, floor tiles, wall tiles, bathroom
            tiles, and decorative surfaces carefully
            selected to bring elegance, durability,
            and timeless beauty to every project.
          </p>

          <p>
            Whether you're building a new home,
            renovating an existing property, or
            working on a commercial project,
            our team is ready to help you choose
            the perfect material.
          </p>

          <div className="cta-buttons">

            <Link to="/collection">
              <button className="primary-btn">
                Browse Collection
              </button>
            </Link>

            <Link to="/projects">
              <button className="secondary-btn">
                View Projects
              </button>
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="primary-btn">
                WhatsApp Us
              </button>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;