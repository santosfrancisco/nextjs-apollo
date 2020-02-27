import gql from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    gamesSearch(search: String): [Game]!
    game(slug: String): GameFull,
    rockets: [Rockets]
  }

  type Image {
    id: ID!
    url: String
  }

  type Game {
    id: ID
    slug: String
    name: String
    cover: Image
    rating: Float
    year: Int
  }

  type GameFull {
    id: ID
    slug: String
    name: String
    summary: String
    rating: Float
    year: Int
    cover: [Image]
    artworks: [Image]
    screenshots: [Image]
  }
  type Rockets{
    id: String!
    name: String!
}
`
