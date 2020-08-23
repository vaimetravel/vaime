import React from 'react'
import { path, sortBy, pipe, filter, head, prop, reverse, not, map, groupBy } from 'rambda'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { calcYear } from '../utils/date'
import Cookies from '../components/Cookies'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TourTile from '../components/TourTile'
import { Page, Grid } from '../components/Base'
import Section from '../components/home/Section'
import TeamTile from '../components/home/TeamTile'
import InfoBelt from '../components/home/InfoBelt'
import AboutUsSection from '../components/home/AboutUsSection'
import PromoSection from '../components/home/PromoSection'
import Instagram from '../components/home/Instagram'
import Reviews from '../components/home/Reviews'
import HeroContent from '../components/home/HeroContent'
import JsonLd, { siteUrl } from '../components/custom/JsonLd'

const getIsOneDay = path(['node', 'frontmatter', 'oneDay'])
const getIsMultiDay = pipe(getIsOneDay, not)
const getTourYear = pipe(
  path(['node', 'frontmatter', 'terms', 0, 'startDate']),
  calcYear
)

// @TODO: put into graphql
const isTourInSameYear = pipe(
  path(['node', 'frontmatter', 'terms']),
  sortBy(prop('timestamp')),
  reverse,
  head,
  prop('startDate'),
  calcYear,
  year => year >= calcYear(+ new Date())
)

const sortTours = pipe(
  filter(isTourInSameYear),
  sortBy(path(['node', 'frontmatter', 'terms', 0, 'timestamp']))
)

const getMutliDayTourMap = pipe(
  filter(getIsMultiDay),
  groupBy(getTourYear)
)

const filterOneDayTours = filter(getIsOneDay)

const Offers = styled.div`

`

export const HomeTemplate = ({ images, tours = [], team = [], aboutTitle, aboutImage, promoImage, html, title, contentComponent, reviews, reviewImage, reviewVideo, reviewPreview, ...props }) => {
  const HtmlComponent = contentComponent || Content

  const _tours = sortTours(tours)
  const _multiDayToursMap = getMutliDayTourMap(_tours)
  const _oneDayTours = filterOneDayTours(_tours)

  return (
    <Page>
      <Hero images={images} dark fullScreen bottomChildren={<InfoBelt {...props} />}>
        <HeroContent {...props} />
      </Hero>
      <Offers id="offers">
      {
        Object.entries(_multiDayToursMap || {}).map(
          ([year, list]) => (
            <Section key={year} title={`Oferty ${year}`}>
              <Grid>
                {(list || []).map(({ node }) => (
                  <TourTile
                    key={node.id}
                    tour={node.frontmatter}
                    slug={node.fields.slug}
                  />
                ))}
              </Grid>
            </Section>
          )
        )
      }
      {_oneDayTours.length ? (
        <Section title={"Wycieczki jednodniowe"}>
          <Grid>
            {_oneDayTours.map(({ node }) => (
              <TourTile
                key={node.id}
                tour={node.frontmatter}
                slug={node.fields.slug}
              />
            ))}
          </Grid>
        </Section>
      ) : null}
      </Offers>
      <AboutUsSection
        title={aboutTitle}
        image={aboutImage}
      >
        <HtmlComponent content={html} />
      </AboutUsSection>
      <Section>
        <Grid>
          {team.map(person => (
            <TeamTile
              key={person.name}
              person={person}
            />
          ))}
        </Grid>
      </Section>
      <Reviews reviews={reviews} reviewImage={reviewImage} reviewVideo={reviewVideo} reviewPreview={reviewPreview} />
      <PromoSection promoImage={promoImage} />
      <Instagram />
      <Cookies />
    </Page>
  )
}

const getStructuredTours = pipe(
  map((tour, index) => {
    const slug = path(['node', 'fields', 'slug'], tour)
    const title = path(['node', 'frontmatter', 'title'], tour)
    const image = path(['node', 'frontmatter', 'thumb', 'childImageSharp', 'fluid', 'src'], tour)
    return {
      "@type": "ListItem",
      "name": title,
      "position": index + 1,
      "image": `${siteUrl}${image}`,
      "url": `${siteUrl}${slug}`
    }
  })
)

export default ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const tours = data.allMarkdownRemark.edges
  const slug = data.markdownRemark.fields.slug

  return (
    <Layout title={title} description={description} slug={slug}>
      <JsonLd>
        {{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'itemListElement': getStructuredTours(tours),
        }}
      </JsonLd>
      <HomeTemplate {...data.markdownRemark.frontmatter} tours={tours} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: "tour" }
          active: { eq: true }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            discount
            discountTitle
            terms {
              startDate(formatString: "YYYY-MM-DD")
              timestamp: startDate(formatString: "x")
              endDate(formatString: "YYYY-MM-DD")
              price
              seats
            }
            active
            oneDay
            thumb { ...imageTile }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        heroTitle
        heroSubtitle
        heroButtonTitle
        heroInfoBelt {
          icon
          label
          description
        }
        images {
          name
          image { ...imageFullWidth }
        }
        aboutTitle
        aboutImage { ...imageHalfWidth }
        promoImage { ...imageViewWidthSvg }
        team {
          name
          place
          text
          image { ...imageAvatar }
        }
        reviewVideo
        reviewImage { ...imageFullWidth }
        reviewPreview { ...imagePreview }
        reviews {
          author
          place
          text
          stars
        }
      }
    }
  }
`
