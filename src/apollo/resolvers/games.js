export default {
  Query: {
    gamesSearch: async (_parent, { search }, _context, _info) =>
      _context.dataSources.IGDB.searchGames(search),
    gameBySlug: async (_parent, { slug }, _context, _info) =>
      _context.dataSources.IGDB.getGameBySlug(slug)
  }
};
