import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

const QUERY = gql`
  query gamesBySlugQuery($slug: String) {
    gameBySlug(slug: $slug) {
      id name screenshots { id url }
    }
  }
`

const Index = () => {
  const router = useRouter()
  const { slug } = router.query 
  const {
    loading,
    data: {
      gameBySlug
    }
  } = useQuery(QUERY, {
    variables: { slug }
  })

  console.log("TCL: Index -> loading", loading)

  if (gameBySlug) {
    return (
      <div>
        game slug: {gameBySlug.id}
        {loading === true
        ? <p>...loading</p>
        : <div>
          {gameBySlug.screenshots && gameBySlug.screenshots.map(sc => <img key={sc.id} src={sc.url} alt="" />)}
        </div>}
      </div>
    )
  }

  return null
}

export default withApollo(Index, {ssr: true})
