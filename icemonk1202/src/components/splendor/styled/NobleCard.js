import styled from "styled-components"
import { COLOR_CODE } from "../../../lib/splendor/constant"

const card = {
  width: 132,
  height: 132,
}
const Card = styled("span")`
  display: flex;
  justify-content: space-between;
  width: ${card.width}px;
  height: ${card.height}px;
  border-radius: 4px;
  background: #ddd;
  box-shadow: 1px 1px 6px 2px grey;
  overflow: hidden;
`

const Nav = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 16px;
  background: #fff5;
`

const score = {
  fontSize: 32,
  margin: 4,
}
const Score = styled("span")`
  font-size: ${score.fontSize}px;
  color: white;
  text-shadow: 0px 0px 4px black;
  text-align: center;
`

const CostCover = styled("div")`
  position: relative;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
`
const cost = {
  width: 20,
  height: 24,
  margin: 4,
}
const Cost = styled("div")`
  display: inline-block;
  width: ${cost.width}px;
  height: ${cost.height}px;
  margin-top: ${cost.margin}px;
  background: ${(props) => COLOR_CODE[props.color]};
  border-radius: 2px;
  text-align: center;
  line-height: ${cost.height + 2}px;
  color: white;
  text-shadow: 0px 0px 4px black;
  box-shadow: 0px 0px 4px white;
`

export { Card, Nav, Score, CostCover, Cost }