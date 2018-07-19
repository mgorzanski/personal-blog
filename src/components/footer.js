import React from 'react'
import Link from 'gatsby-link'

import "./footer.scss";

const Footer = () => (
  <footer className="footer" id="footer">
    <p className="footer__copyright-text">
      Copyright &copy; <Link to="/">Mateusz Górzański</Link> 2018. Wszystkie prawa zastrzeżone.
    </p>
  </footer>
)

export default Footer
