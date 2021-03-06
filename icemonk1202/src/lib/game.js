import { getCardData, getTokenData } from "./data"
import { LEVEL, COLOR } from "./constant"
import DeckModel from "../models/Deck"
import PlayerModel from "../models/Player"

const cards = getCardData()
const buildDeckByLevel = (level) =>
  new DeckModel(
    level,
    cards.filter((card) => card.level === level)
  )
const buildPlayers = (playOrder) =>
  playOrder.reduce((acc, playerId) => {
    acc[playerId] = new PlayerModel(playerId)
    return acc
  }, {})

const Splendor = {
  name: "splendor",

  setup(ctx) {
    const devDeck1 = buildDeckByLevel(LEVEL.I)
    const devDeck2 = buildDeckByLevel(LEVEL.II)
    const devDeck3 = buildDeckByLevel(LEVEL.III)
    const nobleDeck = buildDeckByLevel(LEVEL.NOBLE)

    devDeck1.shuffle()
    devDeck2.shuffle()
    devDeck3.shuffle()
    nobleDeck.shuffle()

    const openedDevCards1 = devDeck1.draw(4).reverse()
    const openedDevCards2 = devDeck2.draw(4).reverse()
    const openedDevCards3 = devDeck3.draw(4).reverse()
    const boardNobleDeck = nobleDeck.draw(ctx.numPlayers + 1).reverse()

    return {
      devDeck1,
      devDeck2,
      devDeck3,
      nobleDeck,
      openedDevCards1,
      openedDevCards2,
      openedDevCards3,
      boardNobleDeck,
      boardTokens: getTokenData(ctx.numPlayers),
      players: buildPlayers(ctx.playOrder),
      isEndTurn: false,
    }
  },

  moves: {
    drawTokens(G, ctx, tokens) {
      Object.entries(tokens)
        .filter(([_, count]) => count)
        .forEach(([color, count]) => {
          Array(Math.abs(count))
            .fill()
            .forEach((_) => {
              if (count > 0) {
                const tokenIndex = G.boardTokens.findIndex(
                  (token) => token.color === color
                )
                G.players[ctx.currentPlayer].tokens[color].push(
                  ...G.boardTokens.splice(tokenIndex, 1)
                )
              } else if (count < 0) {
                G.boardTokens.push(
                  G.players[ctx.currentPlayer].tokens[color].pop()
                )
              }
            })
        })
    },
    buyCard(G, ctx, card) {
      const player = G.players[ctx.currentPlayer]

      // 토큰 비용 지불
      Object.keys(COLOR).forEach((color) => {
        const realCost = card.costs[color] - player[color + "Donation"]
        const returnTokens = player.tokens[color].splice(0, realCost)
        G.boardTokens.push(...returnTokens)
      })

      // 플레이어에게 카드 전달
      const level = card.level === LEVEL.I ? 1 : card.level === LEVEL.II ? 2 : 3
      const openedCards = G[`openedDevCards${level}`]
      player.boughtCards.push(card)

      // 덱에서 카드 1장 꺼내서 카드교체
      const deck = G[`devDeck${level}`]
      openedCards.splice(openedCards.indexOf(card), 1, ...deck.draw())
    },
    keepCard(G, ctx, card, isDeck = false) {
      const player = G.players[ctx.currentPlayer]

      // 노랑 토큰 가져오기
      const tokenIndex = G.boardTokens.findIndex(
        (token) => token.color === COLOR.yellow
      )
      if (tokenIndex >= 0)
        player.tokens.yellow.push(G.boardTokens.splice(tokenIndex, 1)[0])

      // 플레이어에게 카드 전달
      player.keptCards.push(card)

      // 덱에서 카드 이동
      const level = card.level === LEVEL.I ? 1 : card.level === LEVEL.II ? 2 : 3
      const deck = G[`devDeck${level}`]
      if (isDeck) {
        deck.cards.splice(deck.cards.indexOf(card), 1)
      } else {
        const openedCards = G[`openedDevCards${level}`]
        openedCards.splice(openedCards.indexOf(card), 1, ...deck.draw())
      }
    },
  },

  turn: {
    moveLimit: 1,
    onBegin: (G, ctx) => {
      const isFirst = ctx.playOrder[0] === ctx.currentPlayer
      if (!isFirst) return

      const players = ctx.playOrder.map((id) => G.players[id])
      const isGameover = players.some((player) => player.score >= 15)
      if (isGameover) {
        const winner = players.sort((a, b) => b.score - a.score)[0]
        ctx.events.endGame({ winner })
      }
    },
  },
  onEnd: (_, ctx) => {
    alert("승리" + JSON.stringify(ctx.gameover))
  },
}

export default Splendor
