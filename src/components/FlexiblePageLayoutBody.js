import React from 'react'
import Slices from './Slices'
import FlexiblePageBodyGithubGist from './FlexiblePageBodyGithubGist'
import FlexiblePageBodyImage from './FlexiblePageBodyImage'
import FlexiblePageBodyMetadata from './FlexiblePageBodyMetadata'
import FlexiblePageBodyText from './FlexiblePageBodyText'

const componentsMap = {
  FlexiblePageBodyGithubGist,
  FlexiblePageBodyImage,
  FlexiblePageBodyMetadata,
  FlexiblePageBodyText,
}

const FlexiblePageLayoutBody = ({ data, page }) => (
  <main className="mv4 mv5-ns">
    <Slices
      componentsMap={componentsMap}
      data={data}
      page={page}
      slices={data.prismicFlexiblePage.data.body}
    />
  </main>
)

export default FlexiblePageLayoutBody

export const fragment = graphql`
  fragment FlexiblePageLayoutBody on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicFlexiblePageLayoutBody {
            id
          }
        }
        body {
          __typename
        }
      }
    }
    ...FlexiblePageBodyGithubGist
    ...FlexiblePageBodyImage
    ...FlexiblePageBodyMetadata
    ...FlexiblePageBodyText
  }
`
