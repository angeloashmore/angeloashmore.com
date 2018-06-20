import React from 'react'

const FlexiblePageBodyMetadata = ({ slice, page }) => (
  <section className="center mw7 ph3 mb4 mb5-ns">
    <div className="flex mb4 mb5-ns">
      <img
        src="https://www.gravatar.com/avatar/52f4cd57f86f9769ca7a9025a4e59d64"
        className="w3 h3 br-100 mr3"
        alt="Angelo Ashmore"
      />
      <div className="f6 lh-copy gray">
        <p className="ma0 f5 black">Angelo Ashmore</p>
        <p className="ma0">
          Developer at Wall-to-Wall Studios. Full stack with a focus in
          frontend. Loves learning cutting edge technology.
        </p>
        <p className="ma0">{page.first_publication_date}</p>
      </div>
    </div>
    <span className="dib mb3 pv1 ph2 fw5 br2 bg-yellow f7 f5-ns black-60">
      DevOps
    </span>
    <h1 className="fw6 ma0 mb3 f3 f2-ns">{slice.primary.displayTitle.text}</h1>
    {slice.primary.subtitle && (
      <p className="ma0 mb3 f4 f3-ns mid-gray">{slice.primary.subtitle.text}</p>
    )}
  </section>
)

export default FlexiblePageBodyMetadata

export const fragment = graphql`
  fragment FlexiblePageBodyMetadata on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      first_publication_date(formatString: "MMMM D")
      data {
        body {
          ... on PrismicFlexiblePageBodyMetadata {
            id
            primary {
              displayTitle: display_title {
                text
              }
              subtitle {
                text
              }
            }
          }
        }
      }
    }
  }
`
