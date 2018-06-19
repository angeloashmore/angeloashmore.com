import React from 'react'
import Gist from 'react-gist'
import MaxWidth from './MaxWidth'

const FlexiblePageBodyGithubGist = ({ slice }) => (
  <section styleName="container">
    <MaxWidth size="medium">
      <Gist id={slice.primary.gist.gist.split('/')[1]} />
    </MaxWidth>
  </section>
)

export default FlexiblePageBodyGithubGist

export const fragment = graphql`
  fragment FlexiblePageBodyGithubGist on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicFlexiblePageBodyGithubGist {
            id
            primary {
              gist: gist_url {
                gist
              }
            }
          }
        }
      }
    }
  }
`
