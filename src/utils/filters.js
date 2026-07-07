import tiles from "../data/tiles";

const unique = (arr) => [...new Set(arr)];

const filters = {

  categories: unique(
    tiles.flatMap(tile =>
      Array.isArray(tile.category)
        ? tile.category
        : [tile.category]
    )
  ),

  colors: unique(
    tiles.map(tile => tile.color)
  ),

  finishes: unique(
    tiles.map(tile => tile.finish)
  ),

  materials: unique(
    tiles.map(tile => tile.material)
  ),

  applications: unique(
    tiles.flatMap(
      tile => tile.applications || []
    )
  )

};

export default filters;