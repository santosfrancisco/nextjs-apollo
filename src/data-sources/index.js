import { RESTDataSource } from 'apollo-datasource-rest';

export class IGDBSource extends RESTDataSource {
  willSendRequest(request) {
    request.headers.set('user-key', this.context.token);
  }
  constructor() {
    super();
    this.baseURL = 'https://api-v3.igdb.com/';
  }

  async searchGames(searchTerm) {
    const response = await this.post('games', null, { body: `fields id,name,slug,rating,release_dates.y,cover.url; search \"${searchTerm}\";`, headers: {'Content-Type': 'text/plain'} });
    return response
  }
  async getGameBySlug(slug) {
    const response = await this.post('games', null, { body: `fields id,name,slug,screenshots.url,summary,rating,release_dates.y,cover.url; where slug = \"${slug}\";`, headers: {'Content-Type': 'text/plain'} });
    return response[0]
  }
}

