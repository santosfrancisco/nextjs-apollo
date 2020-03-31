import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Row, Col } from 'react-awesome-styled-grid'

const GameCard = styled(({ game }) => (
  <Col xs={4} as='li'>
    <Link href={`/${game.slug}`}>
      <a>
        {game.cover && game.cover.url && <img src={game.cover.url} alt="" />}
        <label>{game.name}</label>
      </a>
    </Link>
  </Col>
))`

`

const GamesList = styled(({ className, games }) => {
  return (
    <div className={className}>
      <Row as='ul'>
        {games.map((game) => (<GameCard key={game.id} game={game} />))}
      </Row>
    </div>
  )
})`
  ul {
    list-style-type: none;
  }
`

export default GamesList
