import { useState } from "react";

function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "919331575229";

  const whatsappMessage =
    "Hello, I am interested in your marble and tile collection.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  const phoneNumber = "+919331575229";

  return (
    <div className="floating-container">

      {isOpen && (
        <div className="floating-menu">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="floating-action"
          >
            💬 WhatsApp
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="floating-action"
          >
            📞 Call Now
          </a>

          <a
            href="/contact"
            className="floating-action"
          >
            📍 Visit Us
          </a>

        </div>
      )}

      <button
        className="floating-main-btn"
        onClick={() =>
          setIsOpen(!isOpen)
        }
      >
        {isOpen ? "✕" : "💎"}
      </button>

    </div>
  );
}

export default FloatingButton;