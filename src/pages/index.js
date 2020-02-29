import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'

import Search from '../components/search'
import GamesList from '../components/games-list'

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
    variables: { search: term || '' }
  })

  useEffect(() => {
    refetch()
    term && Router.push('/', {query: {s: term}})
  }, [term])

  if (gamesSearch) {
    return (
      <div>
        <Search value={term} onSubmitSearch={setTerm} />
        <GamesList games={gamesSearch} />
      </div>
    )
  }

  return null
}

export default withApollo(Index)
