import React from 'react'
import Layout from '../components/Layout'
import Slices from '../components/Slices'
import FlexiblePageLayoutBody from '../components/FlexiblePageLayoutBody'
import FlexiblePageLayoutCallToAction from '../components/FlexiblePageLayoutCallToAction'

const componentsMap = {
  FlexiblePageLayoutBody,
  FlexiblePageLayoutCallToAction,
}

const FlexiblePage = ({ data }) => (
  <Layout>
    <Slices
      componentsMap={componentsMap}
      data={data}
      page={data.prismicFlexiblePage}
      slices={data.prismicFlexiblePage.data.layout}
    />
  </Layout>
)

export default FlexiblePage

export const query = graphql`
  query FlexiblePageQuery($id: String!) {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        title {
          text
        }
        layout {
          __typename
        }
      }
    }
    ...FlexiblePageLayoutBody
    ...FlexiblePageLayoutCallToAction
  }
`
