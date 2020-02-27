import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

const QUERY = gql`
  query gamesSearchQuery($search: String) {
    gamesSearch(search: $search) {
      id
      name
      cover { url }
      slug
    }
  }
`

const Index = () => {
  const {
    data: { gamesSearch }
  } = useQuery(QUERY, {
    variables: { search: 'metroid' }
  })

  if (gamesSearch) {
    return (
      <div>
        <ul>
          {gamesSearch.map(game => (
            <li key={game.id}>
              <Link href={`/${game.slug}`}>
              <a>
                {game.cover && game.cover.url && <img src={game.cover.url} alt="" />}
                <label>{game.name}</label>
              </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

export default withApollo(Index)
