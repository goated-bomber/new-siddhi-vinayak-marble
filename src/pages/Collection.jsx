import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar/SearchBar";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import TileGrid from "../components/TileGrid/TileGrid";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import tiles from "../data/tiles";
import { searchTiles } from "../utils/search";

function Collection() {

  const [searchParams] =
    useSearchParams();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [category, setCategory] =
    useState(
      searchParams.get("category") || ""
    );

  const [color, setColor] =
    useState("");

  const [finish, setFinish] =
    useState("");

  const [material, setMaterial] =
    useState("");

  const [application, setApplication] =
    useState("");

  useEffect(() => {

    const categoryFromUrl =
      searchParams.get("category");

    if (categoryFromUrl) {

      setCategory(
        categoryFromUrl
      );

    }

  }, [searchParams]);

  const resetFilters = () => {

    setSearchTerm("");

    setCategory("");
    setColor("");
    setFinish("");
    setMaterial("");
    setApplication("");

  };

  const filteredTiles = searchTiles(
    tiles,
    searchTerm,
    {
      category,
      color,
      finish,
      material,
      application
    }
  );

  return (
    <div className="collection-page">

      {/* Hero */}

      <section className="collection-hero">

        <div className="container">

          <div className="collection-hero-content">

            <span className="section-tag">
              PREMIUM COLLECTION
            </span>

            <h1>
              Marble, Granite &
              Designer Tile Collection
            </h1>

            <p>
              Explore our curated selection of
              premium marble, granite, floor tiles,
              wall tiles, portrait tiles, sanitary
              ware and luxury surface solutions for
              homes, villas, offices and commercial
              projects.
            </p>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="collection-search">

        <div className="container">

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search marble, granite, portrait tiles..."
          />

        </div>

      </section>

      {/* Filters */}

      <FilterPanel

        category={category}
        setCategory={setCategory}

        color={color}
        setColor={setColor}

        finish={finish}
        setFinish={setFinish}

        material={material}
        setMaterial={setMaterial}

        application={application}
        setApplication={setApplication}

        resetFilters={resetFilters}

      />

      {/* Results */}

      <section className="results-section">

        <div className="container">

          <div className="results-header">

            <h2>
              Collection Results
            </h2>

            <p>

              Showing

              <strong>
                {" "}
                {filteredTiles.length}
                {" "}
              </strong>

              design

              {filteredTiles.length !== 1
                ? "s"
                : ""}

            </p>

          </div>

        </div>

      </section>

      {/* Products */}

      <TileGrid
        title="Explore Our Collection"
        tiles={filteredTiles}
        emptyMessage="
        No products match your search.
        Try changing filters.
        "
      />

      {/* CTA */}

      <ContactCTA />

    </div>
  );
}

export default Collection;