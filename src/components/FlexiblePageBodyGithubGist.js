import React from 'react'
import Gist from 'react-gist'

const FlexiblePageBodyGithubGist = ({ slice }) => (
  <section className="center mw7 ph3">
    <Gist id={slice.primary.gist.gist.split('/')[1]} />
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
