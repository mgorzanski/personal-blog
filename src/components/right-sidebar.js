import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./sidebar.scss";

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" id="right-sidebar">
        <h4 className="sidebar__label">Social Media</h4>
        <nav className="sidebar__nav">
          <ul className="sidebar__menu" id="social-media-menu">
            <li><a href="#"><FontAwesomeIcon icon={faTwitterSquare} size="lg" color="black" /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faGithubSquare} size="lg" color="black" /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} size="lg" color="black" /></a></li>
          </ul>
        </nav>

        <div className="sidebar__separator"></div>

        <h4 className="sidebar__label">Szukaj na blogu</h4>
        <div className="sidebar__search-form">
          <form action="" method="get">
            <FontAwesomeIcon icon={faSearch} color="white" />
            <input type="search" name="q" className="sidebar__search-form-input" />
          </form>
        </div>
      </div>
    );
  }
}

export default RightSidebar