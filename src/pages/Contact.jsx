import ContactCTA from "../components/ContactCTA/ContactCTA";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero */}

      <section className="contact-hero">

        <div className="container">

          <span className="section-tag">
            CONTACT US
          </span>

          <h1>
            Visit Our Showroom
          </h1>

          <p>
            Discover premium marble, granite,
            tiles, sanitary ware, borders and
            luxury surface solutions for homes,
            villas, offices and commercial projects.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="contact-info">

        <div className="container">

          <div className="contact-grid">

            {/* Phone */}

            <div className="contact-card">

              <div className="contact-icon">
                📞
              </div>

              <h3>
                Call Us
              </h3>

              <p>
                +91 9331575229
              </p>

              <a
                href="tel:+919331575229"
                className="contact-link"
              >
                Call Now
              </a>

            </div>

            {/* WhatsApp */}

            <div className="contact-card">

              <div className="contact-icon">
                💬
              </div>

              <h3>
                WhatsApp
              </h3>

              <p>
                Quick Product Inquiry
              </p>

              <a
                href="https://wa.me/919331575229?text=Hello%20New%20Siddhi%20Vinayak%20Marble,%20I%20am%20interested%20in%20your%20products.%20Could%20you%20please%20help%20me?"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Message Us
              </a>

            </div>

            {/* Address */}

            <div className="contact-card">

              <div className="contact-icon">
                📍
              </div>

              <h3>
                Visit Showroom
              </h3>

              <p>
                Your Complete Showroom Address
              </p>

              <a
                href="https://maps.google.com/?q=New+Siddhi+Vinayak+Marbel"
target="_blank"
rel="noreferrer"
                className="contact-link"
              >
                Get Directions
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Consultation Section */}

      <section className="contact-form-section">

        <div className="container">

          <div className="contact-form-wrapper">

            <div className="form-content text-center">

              <span className="section-tag">
                FREE CONSULTATION
              </span>

              <h2>
                Need Help Choosing The Right Material?
              </h2>

              <p>
                Whether you're building a new home,
                renovating an existing property,
                or working on a commercial project,
                our team can help you select the
                perfect marble, granite, tiles and
                surface solutions.
              </p>

              <div className="mt-4">

                <a
  href="https://wa.me/919331575229?text=Hello%20New%20Siddhi%20Vinayak%20Marble%2C%20I%20am%20interested%20in%20your%20products.%20Could%20you%20please%20help%20me%3F"
  target="_blank"
  rel="noreferrer"
>

                  <button className="primary-btn">

                    Contact On WhatsApp

                  </button>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Business Hours */}

      <section className="business-hours">

        <div className="container">

          <div className="hours-card">

            <span className="section-tag">
              BUSINESS HOURS
            </span>

            <h2>
              Showroom Timings
            </h2>

            <div className="hours-grid">

              <div>

                <strong>
                  Monday - Saturday
                </strong>

                <p>
                  9:00 AM - 8:00 PM
                </p>

              </div>

              <div>

                <strong>
                  Sunday
                </strong>

                <p>
                  Contact Before Visit
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Why Visit Us */}

      <section className="why-visit-us">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              WHY VISIT US
            </span>

            <h2>
              Experience Our Collection In Person
            </h2>

          </div>

          <div className="grid grid-3">

            <div className="card card-hover">

              <h3>
                500+ Designs
              </h3>

              <p>
                Explore a wide range of marble,
                granite, tiles and decorative
                surfaces under one roof.
              </p>

            </div>

            <div className="card card-hover">

              <h3>
                Expert Guidance
              </h3>

              <p>
                Get personalized recommendations
                for your home or commercial space.
              </p>

            </div>

            <div className="card card-hover">

              <h3>
                Premium Quality
              </h3>

              <p>
                Carefully selected products
                known for beauty, durability
                and lasting value.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Map */}

      <section
        id="map"
        className="map-section"
      >

        <div className="container">

          <span className="section-tag">
            LOCATION
          </span>

          <h2>
            Visit Our Showroom
          </h2>

          <p>
            <p>
  Visit our showroom to explore over 500 premium marble,
  granite, vitrified tile and sanitary designs. Our team
  is ready to help you choose the perfect products for
  your project.
</p>
          </p>

          <div className="map-wrapper">

            {/* Replace later */}

            <iframe
  title="New Siddhi Vinayak Marble"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3192412203243!2d88.32648787476239!3d22.75353092631571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89bdb483cc867%3A0xe74aad65f192d50a!2sNew%20Siddhi%20Vinayak%20Marbel!5e0!3m2!1sen!2sin!4v1783405859037!5m2!1sen!2sin"
  width="100%"
  height="500"
  style={{
    border: 0,
    borderRadius: "25px"
  }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
/>

          </div>

        </div>

      </section>

      {/* CTA */}

      <ContactCTA />

    </div>
  );
}

export default Contact;