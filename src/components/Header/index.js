import React from 'react'
import Link from 'gatsby-link'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const Header = ({ siteTitle, siteDescription }) => (
  <div styleName="container">
    <h1 styleName="title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <p styleName="description">{siteDescription}</p>
  </div>
)

export default Header
