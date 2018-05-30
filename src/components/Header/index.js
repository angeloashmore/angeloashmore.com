import React from 'react'
import Link from 'gatsby-link'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const Header = ({ siteTitle }) => (
  <div styleName="container">
    <MaxWidth>
      <h1 styleName="title">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </MaxWidth>
  </div>
)

export default Header
