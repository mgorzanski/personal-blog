import React from 'react';
import profilePicture from './../images/profile-picture.jpg';
import "./sidebar.scss";

const profilePictureDescription = `aspiring full stack web dev | programmer, student, sometimes writer`;

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" id="left-sidebar">
        <img className="img-fluid rounded" id="profile-picture" src={profilePicture} alt="Mateusz Górzański" />
        <p className="sidebar__text" id="profile-picture-description">
          {profilePictureDescription}
        </p>
      </div>
    );
  }
}

export default LeftSidebar