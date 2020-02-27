// import axios from 'axios'

// export const IGDB = axios.create({
//   baseURL: 'https://api-v3.igdb.com',
//   timeout: 10000,
//   headers: {
//     'user-key': '0ecda835fb7f168ecb0129800aea3571',
//     'Content-Type': 'text/plain'
//   }
// })

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
}

