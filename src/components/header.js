import React from 'react'
import Link from 'gatsby-link'

import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header" id="header">
    <nav className="header__nav">
      <ul className="header__menu-top">
        <li className="header__menu-top-item"><Link to="/" className="header__menu-top-item-link header__menu-top-item-link--active">Początek</Link></li>
        <li className="header__menu-top-item"><a href="#" className="header__menu-top-item-link">O mnie</a></li>
        <li className="header__menu-top-item"><a href="#" className="header__menu-top-item-link">Kontakt</a></li>
        <li className="header__menu-top-item"><a href="#" className="header__menu-top-item-link">Portfolio</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
