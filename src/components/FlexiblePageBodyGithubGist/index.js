import React from 'react'
import Gist from 'react-gist'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyGithubGist = ({ slice }) => (
  <section styleName="container">
    <MaxWidth size="medium">
      <Gist id={slice.primary.gist.gist.split('/')[1]} />
    </MaxWidth>
  </section>
)

export default FlexiblePageBodyGithubGist

export const fragment = graphql`
  fragment FlexiblePageBodyGithubGist on PrismicFlexiblePage {
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
`
