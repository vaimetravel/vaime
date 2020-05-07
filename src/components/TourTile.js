import React from 'react'
import styled from 'styled-components'
import { path, sort, prop, head, pipe, map, join, length } from 'rambda'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { calcDate, calcYear } from '../utils/date'
import { H4, H6, Button } from './Base'
import heart from '../img/heart.svg'

const getOldestTs = pipe(
  sort((a, b) => a.timestamp > b.timestmap),
  head,
  prop('timestamp')
)

const getBiggestSeats = pipe(
  sort((a, b) => a.seats > b.seats),
  head,
  prop('seats')
)

const getSmallestPrice = pipe(
  sort((a, b) => a.price < b.price),
  head,
  prop('price')
)

const getDatesFormatted = pipe(
  map(({ startDate, endDate }) => calcDate(startDate, endDate, false)),
  join(', ')
)

const getSubtitle = pipe(
  length,
  n => n > 1 ? 'Dostępne terminy' : 'Dostępny termin'
)

const getYear = pipe(
  head,
  prop('startDate'),
  calcYear
)

export default ({ slug, tour }) => {
  if (!tour) return null

  const { title, thumb, active, terms } = tour

  if (!terms) {
    return null
  }

  const dates = getDatesFormatted(terms)
  const available = getSubtitle(terms)
  const year = getYear(terms)
  const subtitle = `${available}: ${dates}.${year}`
  const fluid = path('childImageSharp.fluid', thumb) || thumb

  const timestamp = getOldestTs(terms)
  const seats = getBiggestSeats(terms)
  const price = getSmallestPrice(terms)

  const expired = timestamp < + new Date()
  const noSeats = seats <= 0
  const disabled = expired || noSeats || !active

  return (
    <LinkWrapper to={slug}>
      <Top>
        <BgCover fluid={fluid} style={imgStyle} alt={title} />
        <TourContent>
          <TourDates>
            <TourInfo>{subtitle}</TourInfo>
          </TourDates>
          <TourButton>Więcej</TourButton>
          {disabled && <Outdated>WYPRZEDANE</Outdated>}
        </TourContent>
      </Top>
      <BottomLabel>
        <H6>{title}</H6>
        <TourColumn>
          <HeartIcon src={heart} />
          <H6 color='colorPrimary'>{price} EUR</H6>
        </TourColumn>
      </BottomLabel>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: 22rem;
  box-shadow: 0 2px 4px 0 rgba(23,27,30,.1);
  border-radius: ${props => props.theme.radiusSmall};
  margin: ${ props => props.theme.marginM} ${props => props.theme.marginS};
  background-color: ${props => props.theme.colorWhite};
  text-decoration: none;
  transition: box-shadow .3s ease-out;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 12px 0 rgba(23,27,30,.3);
  }
  ${p => p.theme.mobile`
    margin-left: 0;
    margin-right: 0;
  `}
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`

const Top = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`

const imgStyle = { position: 'absolute', width: '100%', height: '100%' }

const BgCover = styled(Img)`

`

const BottomLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${path('theme.marginXs')} ${path('theme.marginXs')} ${path('theme.marginXs')} ${path('theme.marginXs')};
  min-height: 3.5rem;
`

const TourContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  height: 100%;
  z-index: 1;
`

const TourDates = styled.div`
  z-index: 1;
  width: 100%;
`

const TourInfo = styled.p`
  background-color: ${path('theme.colorPrimary')};
  color: ${path('theme.colorWhite')};
  font-size: 12px;
  text-transform: uppercase;
  padding: .5rem;
  background: ${p => p.theme.colorPrimary};
  font-weight: bold;
`

const TourButton = styled(Button)`
  z-index: 1;
  pointer-events: none;
  position: absolute:
  bottom: 0;
`

const HeartIcon = styled.img`
  width: 1rem;
`

const TourColumn = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const Outdated = styled(H4)`
  position: absolute;
  font-weight: ${p => p.theme.weightBolder};
  color: ${ path('theme.colorPrimary')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0.05turn);
  border-style: dashed;
  border-color: ${ path('theme.colorPrimary')};
  border-radius: .5rem;
  padding: .5rem;
  background-color: #ffffff91;
`