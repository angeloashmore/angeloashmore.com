import React from 'react'
import Link from 'gatsby-link'
import './index.module.css'

const Header = ({ siteTitle, siteDescription }) => (
  <div styleName="container">
    <Link styleName="home-link" to="/">
      <h1 styleName="title">{siteTitle}</h1>
      <p styleName="description">{siteDescription}</p>
    </Link>
  </div>
)

export default Header
