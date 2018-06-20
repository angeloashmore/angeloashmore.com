import React from 'react'
import Img from 'gatsby-image'
import cx from 'classnames'

const FlexiblePageBodyImage = ({ slice }) => (
  <section
    className={cx([
      'center',
      slice.primary.width === 'medium' && 'mw7',
      slice.primary.width === 'large' && 'mw8',
      'mb4',
      'mb5-ns',
      slice.primary.width !== 'full' && 'ph3',
    ])}
  >
    <Img
      fluid={slice.primary.image.localFile.childImageSharp.fluid}
      alt={slice.primary.image.alt}
    />
    {slice.primary.caption && (
      <div
        className="center ph3 tc caption mw7 f7 f6-ns gray lh-copy"
        dangerouslySetInnerHTML={{ __html: slice.primary.caption.html }}
      />
    )}
  </section>
)

export default FlexiblePageBodyImage

export const fragment = graphql`
  fragment FlexiblePageBodyImage on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicFlexiblePageBodyImage {
            id
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              caption {
                html
              }
              width
            }
          }
        }
      }
    }
  }
`
