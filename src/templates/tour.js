import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { View, Page, H2 } from '../components/Base'
import HeroTour from '../components/tour/HeroTour'
import Schedule from '../components/tour/Schedule'
import Reservation from '../components/tour/Reservation'
import { Grid, Column } from '../components/page/Grid'
import Section from '../components/page/Section'
import PriceContains from '../components/tour/PriceContains'
import Map from '../components/tour/Map'

export const TourTemplate = ({description, schedule, html, contentComponent, map, ...props}) => {
  const HtmlComponent = contentComponent || Content
  return (
    <Page>
      <HeroTour {...props} />
      <View>
        <H2>{description}</H2>
        <HtmlComponent content={html || ''} />
        <Grid>
          <Column size={70}>
            <Section>
              <Schedule schedule={schedule} />
            </Section>
            <Section>
              <Map map={map} />
            </Section>
          </Column>
          <Column size={30}>
            <PriceContains {...props} />
          </Column>
        </Grid>
      </View>
    </Page>
  )
}

const Tour = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter

  const [isReservation, setReservation] = useState(false)
  const openReservation = useCallback(() => setReservation(true), [])
  const closeReservation = useCallback(() => setReservation(false), [])

  return (
    <Layout title={title} description={description}>
      <TourTemplate
        {...data.markdownRemark.frontmatter}
        html={data.markdownRemark.html}
        contentComponent={HTMLContent}
        openReservation={openReservation}
      />
      <Reservation
        open={isReservation}
        onClose={closeReservation} 
        {...data.markdownRemark.frontmatter}
      />
    </Layout>
  )
}

export default Tour

export const pageQuery = graphql`
  query TourById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        active
        title
        description
        startDate(formatString: "YYYY-MM-DD")
        endDate(formatString: "YYYY-MM-DD")
        timestamp: startDate(formatString: "x")
        daysCount
        price
        seats
        description
        schedule {
          day
          place
          text
        }
        priceContains
        priceNotContains
        thumb {
          childImageSharp {
            fluid(maxWidth: 400, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        map {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`