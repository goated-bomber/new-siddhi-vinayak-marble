const trendingTiles = [...tiles]
  .filter(
    tile =>
      tile.featured ||
      tile.trending
  )
  .sort(() => Math.random() - 0.5)
  .slice(0, limit);