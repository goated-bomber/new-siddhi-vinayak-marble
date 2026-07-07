import { useState, useEffect } from "react";

function TileGallery({ images = [], title = "" }) {

  const [selectedImage, setSelectedImage] =
    useState("");

  useEffect(() => {

    if (images.length > 0) {

      setSelectedImage(images[0]);

    }

  }, [images]);

  if (!images.length) {

    return (
      <div className="tile-gallery-empty">

        <p>
          No Images Available
        </p>

      </div>
    );

  }

  return (

    <div className="tile-gallery">

      {/* Main Image */}

      <div className="main-image-container">

        <img
          src={selectedImage}
          alt={title || "Tile Preview"}
          className="main-image"
        />

      </div>

      {/* Thumbnails */}

      <div className="thumbnail-container">

        {images.map((image, index) => (

          <img
            key={`${image}-${index}`}
            src={image}
            alt={`${title || "Tile"} ${index + 1}`}
            className={
              selectedImage === image
                ? "thumbnail active"
                : "thumbnail"
            }
            onClick={() =>
              setSelectedImage(image)
            }
          />

        ))}

      </div>

    </div>

  );

}

export default TileGallery;