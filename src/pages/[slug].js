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
    error,
    data
  } = useQuery(QUERY, {
    variables: { slug }
  })
  const { gameBySlug } = data;
  
  console.log("TCL: Index -> error", error)
  console.log("TCL: Index -> loading", loading)
  console.log("TCL: Index -> data", data)

  if (gameBySlug) {
    return (
      <div>
        game name: {gameBySlug.name}
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
