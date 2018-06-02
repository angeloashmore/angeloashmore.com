import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

import 'app-reset'

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
      siteDescription={data.site.siteMetadata.description}
    />
    {children()}
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
