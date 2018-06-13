import React from 'react'
import FlexiblePageBodyMetadata from '../../components/FlexiblePageBodyMetadata'
import FlexiblePageBodyText from '../../components/FlexiblePageBodyText'
import FlexiblePageBodyImage from '../../components/FlexiblePageBodyImage'
import FlexiblePageBodyCode from '../../components/FlexiblePageBodyCode'
import FlexiblePageBodyGithubGist from '../../components/FlexiblePageBodyGithubGist'
import './index.module.css'

const sliceComponents = {
  FlexiblePageBodyMetadata,
  FlexiblePageBodyText,
  FlexiblePageBodyImage,
  FlexiblePageBodyCode,
  FlexiblePageBodyGithubGist,
}

const renderSlice = (slice, page) => {
  const sliceType = slice.__typename.replace('Prismic', '')
  const SliceComponent = sliceComponents[sliceType]

  if (SliceComponent)
    return <SliceComponent key={slice.id} slice={slice} page={page} />
}

const FlexiblePage = ({ data }) => (
  <main styleName="container">
    {data.prismicFlexiblePage.data.body.map(slice =>
      renderSlice(slice, data.prismicFlexiblePage)
    )}
  </main>
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
      ...FlexiblePageBodyCode
      ...FlexiblePageBodyGithubGist
    }
  }
`
