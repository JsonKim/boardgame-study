import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/Card'
import Token from '../components/Token'
import Layout from '../components/Layout'
import BoardLayout from '../components/BoardLayout'
import SelectedTokens from '../components/SelectedTokens'
import Player from './Player'
import { Link } from '../../../lib/utils'

const Header = styled.header``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
`

class Board extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  }
  constructor(props) {
    super(props)
    this.state = {
      confirmable: false
    }
    this.handleSpaceClick = this.handleSpaceClick.bind(this)
    this.handleTokenClick = this.handleTokenClick.bind(this)
    this.confirmSelectedToken = this.confirmSelectedToken.bind(this)
    this.deselectToken = this.deselectToken.bind(this)
  }

  componentDidMount() {

  }

  handleSpaceClick(dev, index, grade) {
    const { replaceDevelopmentSpace, buyDevelopment } = this.props.moves
    replaceDevelopmentSpace({ index, grade })
    buyDevelopment(dev)
  }

  handleTokenClick(token) {
    if (token === 'yellow') {
      return
    }
    const { G, ctx, moves } = this.props
    const { selectToken } = moves
    selectToken(token, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  deselectToken(index, cb) {
    const { G, ctx, moves } = this.props
    const { deselectToken, } = moves
    deselectToken(index, (confirmable) => {
      this.setState({ confirmable })
    })
  }

  confirmSelectedToken(cb) {
    console.log('confirmSelectedToken')
    const { G, ctx, moves } = this.props
    const { selectToken, getTokens } = moves
    getTokens(cb)
  }

  render() {
    const { G, moves, ctx } = this.props
    const { currentPlayer } = ctx
    const {
      dev10, dev11, dev12, dev13,
      dev20, dev21, dev22, dev23,
      dev30, dev31, dev32, dev33
    } = G.board
    // console.log(G.fields)
    const developmentOne = [dev10, dev11, dev12, dev13]
    const developmentTwo = [dev20, dev21, dev22, dev23]
    const developmentThree = [dev30, dev31, dev32, dev33]

    const tokenIndex = ['yellow', 'black', 'red', 'green', 'blue', 'white']
    const { selectedTokens, fields } = G
    const { hand } = fields[`player${currentPlayer}`]
    const { confirmable } = this.state
    console.log({ hand })
    return (
      <>
        <Layout
          Header={
            <Header>
              <Link to="/">HOME</Link>
              <Link to="/kimkyeseung">로비</Link>
            </Header>
          }
          LeftPanel={
            <div>
              {Object.keys(G.fields).map(player => (
                <Player
                  key={player}
                  field={G.fields[player]}
                  G={G}
                  selectedTokens={selectedTokens}
                  player={player}
                  ctx={ctx} />
              ))}
            </div>
          }
          Main={
            <BoardLayout
              Developments={
                <>
                  <Row>
                    {developmentThree.map((dev, index) => (
                      <Card key={dev ? dev.id : index} onClick={ev => {
                        this.handleSpaceClick(dev, index, 3)
                      }} grade={3} development={dev} />
                    ))}
                  </Row>
                  <Row>
                    {developmentTwo.map((dev, index) => (
                      <Card key={dev ? dev.id : index} onClick={ev => {
                        this.handleSpaceClick(dev, index, 2)
                      }} grade={2} development={dev} />
                    ))}
                  </Row>
                  <Row>
                    {developmentOne.map((dev, index) => (
                      <Card key={dev ? dev.id : index} onClick={ev => {
                        this.handleSpaceClick(dev, index, 1)
                      }} grade={1} development={dev} />
                    ))}
                  </Row>
                </>
              }
              Tokens={
                <Token.Wrapper>
                  {tokenIndex.map(token => (
                    <Token
                      key={token}
                      color={token}
                      count={G.tokens[token]}
                      onClick={() => {
                        this.handleTokenClick(token)
                      }} />
                  ))}
                </Token.Wrapper>
              }
              Nobles={
                <div>Noble~</div>
              }
            />
          }
          RightPanel={<div>Right</div>}
          Footer={<div className="hand">
            <SelectedTokens
              tokens={hand}
              confirmable={confirmable}
              deselectToken={this.deselectToken}
              confirmSelectedToken={this.confirmSelectedToken}
              onClose={() => {
                // this.setState({ selectedTokens: [] })
              }} />
          </div>} />
      </>
    )
  }
}

export default Board
