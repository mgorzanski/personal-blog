import React from 'react'
import Link from 'gatsby-link'

import "./header.scss";

const Header = ({ siteTitle }) => (
  <header className="header" id="header">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <nav className="header__nav col-xl-10">
          <ul className="header__menu-top">
            <li className="header__menu-top-item"><Link to="/" className="header__menu-top-item-link header__menu-top-item-link--active">Początek</Link></li>
            <li className="header__menu-top-item"><a href="https://mgorzanski.github.io/about-me/" className="header__menu-top-item-link">O mnie</a></li>
            <li className="header__menu-top-item"><a href="https://mgorzanski.github.io/contact-me/" className="header__menu-top-item-link">Kontakt</a></li>
            <li className="header__menu-top-item"><a href="https://mgorzanski.github.io/portfolio/" className="header__menu-top-item-link">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
