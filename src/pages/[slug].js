import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

const GamesQuery = gql`
  query gameSearch {
    games {
      id
      name
    }
  }
`

const Index = () => {
  const router = useRouter()
  const { slug } = router.query 

  if (slug) {
    return (
      <div>
        game slug: {slug}
      </div>
    )
  }

  return null
}

export default withApollo(Index)
