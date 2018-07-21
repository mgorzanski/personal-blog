import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import profilePicture from './../images/profile-picture.jpg';
import "./sidebar.scss";

const profilePictureDescription = `aspiring full stack web dev | programmer, student, sometimes writer`;

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" id="left-sidebar">
        <img className="img-fluid rounded" id="profile-picture" src={profilePicture} alt="Mateusz Górzański" />
        <h4 className="sidebar__full-name">Mateusz Górzański</h4>
        <p className="sidebar__text" id="profile-picture-description">
          {profilePictureDescription}
        </p>
        <p className="sidebar__link"><a href="https://mgorzanski.github.io/about-me/">Więcej <FontAwesomeIcon icon={faAngleDoubleRight} className="sidebar__link-icon" /></a></p>
      </div>
    );
  }
}

export default LeftSidebar