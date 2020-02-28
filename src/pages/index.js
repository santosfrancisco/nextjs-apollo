import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import Search from '../components/search/search'

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
  const Router = useRouter()
  const { s } = Router.query
  const [ term, setTerm ] = useState(s)
  const {
    loading,
    error,
    data: { gamesSearch },
    refetch
  } = useQuery(QUERY, {
    variables: { search: term }
  })
  

  const handleSubmitSearch = (term) => {
    setTerm(term)
  }

  useEffect(() => {
    refetch()
    term && Router.push('/', {query: {s: term}})
  }, [term])

  if (gamesSearch) {
    return (
      <div>
        <Search value={term} onSubmitSearch={handleSubmitSearch} />
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
