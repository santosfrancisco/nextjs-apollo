const transformGamesListResponse = (games) => {
  const gamesList = games.map((game) => {
    return {
      id: game.id,
      name: game.name,
      rating: game.rating,
      year: game.release_dates && game.release_dates[0].y,
      cover: game.cover && game.cover.url || null
    }
  })
  return gamesList || []
};

const transformGameResponse = (game) => {
    return {
      id: game.id,
      name: game.name,
      slug: game.slug,
      summary: game.summary,
      rating: game.rating,
      year: game.release_dates && game.release_dates[0].y,
      cover: game.cover && game.cover.url || null,
      screenshots: game.screenshots || [],
    }
};

export const resolvers = {
  Query: {
    gamesSearch: async (_parent, { search }, _context, _info) => {
      return _context.dataSources.IGDB.searchGames(search)
    },
    gameBySlug: async (_parent, { slug }, _context, _info) => {
      return _context.dataSources.IGDB.getGameBySlug(slug)
    }
  }
}