import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Brand Section */}

          <div className="footer-brand">

            <h2>
              New Siddhi Vinayak Marble
            </h2>

            <p>
              Premium marble, granite, floor tiles,
              wall tiles, bathroom tiles, and luxury
              surface solutions for homes and commercial
              projects.
            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/collection">
                  Collection
                </Link>
              </li>

              <li>
                <Link to="/projects">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div className="footer-links">

            <h3>Categories</h3>

            <ul>

              <li>Marble</li>
              <li>Granite</li>
              <li>Floor Tiles</li>
              <li>Wall Tiles</li>
              <li>Bathroom Tiles</li>
              <li>Kitchen Tiles</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-contact">

            <h3>Contact Us</h3>

            <p>
              📞 +91 9331575229
            </p>

            <p>
              📧 dk1095924@gmail.com
            </p>

            <p>
              📍 New Siddhi Vinayak Marble, At G.T. Road, Near E.S.I. Hospital,Serampore, Dakshin Rajyadharpur, West Bengal 712203
            </p>

            <p>
              Mon - Sat : 9:00 AM - 8:00 PM
            </p>

          </div>

        </div>

        {/* Divider */}

        <hr />

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {currentYear} New Siddhi Vinayak Marble.
            All Rights Reserved.
          </p>

          <p>
            Crafted with ❤️ for beautiful spaces.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;