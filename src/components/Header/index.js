import React from 'react'
import Link from 'gatsby-link'
import './index.module.css'

const Header = ({ siteTitle, siteDescription }) => (
  <header styleName="container">
    <Link styleName="home-link" to="/">
      <h1 styleName="title">{siteTitle}</h1>
      <p styleName="description">{siteDescription}</p>
    </Link>
  </header>
)

export default Header
