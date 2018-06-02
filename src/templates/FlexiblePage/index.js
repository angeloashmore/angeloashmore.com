import React from 'react'
import FlexiblePageBodyMetadata from '../../components/FlexiblePageBodyMetadata'
import FlexiblePageBodyText from '../../components/FlexiblePageBodyText'
import FlexiblePageBodyImage from '../../components/FlexiblePageBodyImage'
import './index.module.css'

const FlexiblePage = ({ data }) => (
  <div styleName="container">
    {data.prismicFlexiblePage.data.body.map(slice => {
      switch (slice.__typename) {
        case 'PrismicFlexiblePageBodyMetadata':
          return (
            <FlexiblePageBodyMetadata
              key={slice.id}
              publicationDate={data.prismicFlexiblePage.publicationDate}
              displayTitle={slice.primary.displayTitle.text}
              subtitle={slice.primary.subtitle.text}
            />
          )

        case 'PrismicFlexiblePageBodyText':
          return (
            <FlexiblePageBodyText
              key={slice.id}
              text={slice.primary.text.html}
            />
          )

        case 'PrismicFlexiblePageBodyImage':
          return (
            <FlexiblePageBodyImage
              key={slice.id}
              caption={slice.primary.caption.html}
              imageSizes={slice.primary.image.localFile.childImageSharp.sizes}
              width={slice.primary.width}
            />
          )

          return
      }
    })}
  </div>
)

export default FlexiblePage

export const query = graphql`
  query FlexiblePageQuery($id: String!) {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        title {
          text
        }
        body {
          __typename
        }
      }
      ...FlexiblePageBodyMetadata
      ...FlexiblePageBodyText
      ...FlexiblePageBodyImage
    }
  }
`
