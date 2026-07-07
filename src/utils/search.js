export function searchTiles(
  tiles,
  searchTerm = "",
  filters = {}
) {

  const normalize = (value = "") =>
    value
      .toLowerCase()
      .replace(/\s+/g, "-");

  return tiles.filter((tile) => {

    /* --------------------
       CATEGORY STRING
    -------------------- */

    const categoryText = Array.isArray(tile.category)
      ? tile.category.join(" ")
      : tile.category;

    /* --------------------
       SEARCH TERM
    -------------------- */

    const searchMatch =
      searchTerm === "" ||

      tile.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||

      categoryText
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||

      tile.material
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||

      tile.color
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||

      tile.description
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    /* --------------------
       CATEGORY
    -------------------- */

    const categoryMatch =
      !filters.category ||

      (
        Array.isArray(tile.category)
          ? tile.category.some(
              (category) =>
                normalize(category) ===
                normalize(filters.category)
            )
          : normalize(tile.category) ===
            normalize(filters.category)
      );

    /* --------------------
       COLOR
    -------------------- */

    const colorMatch =
      !filters.color ||
      tile.color ===
      filters.color;

    /* --------------------
       FINISH
    -------------------- */

    const finishMatch =
      !filters.finish ||
      tile.finish ===
      filters.finish;

    /* --------------------
       MATERIAL
    -------------------- */

    const materialMatch =
      !filters.material ||
      tile.material ===
      filters.material;

    /* --------------------
       APPLICATION
    -------------------- */

    const applicationMatch =
      !filters.application ||

      tile.applications?.includes(
        filters.application
      );

    return (
      searchMatch &&
      categoryMatch &&
      colorMatch &&
      finishMatch &&
      materialMatch &&
      applicationMatch
    );

  });

}