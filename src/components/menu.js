import React, { Component } from 'react';
import '../css/menu.css';
import docImage from '../images/Document_Icon.svg';
import logo_sm_white from '../images/logo_sm_white.svg';
import uploadIcon from '../images/uploadIcon.svg';

export class Menu extends Component {
  render() {
    return (
      <div id="menuContent">
        <div>
          <img className="readerZone" alt="Reader Zone" src={logo_sm_white} />
        </div>
        <p className="file">
          FILES
        </p>
        <nav>
            <div className="linkNav">
              <span><img alt="Document" className="linkNavDocImage" src={docImage} /></span>
              <span className="linkNavText">Document 1</span>
            </div>
            <div className="linkNav">
              <span><img alt="Document" className="linkNavDocImage" src={docImage} /></span>
              <span className="linkNavText">Document 2</span>
            </div>
        </nav>
        <div className="upload">
          <span><img alt="Document" className="uploadIcon" src={uploadIcon} /></span>
          <span className="linkNavText">Upload Files</span>
        </div>
      </div>
    );
  }
}

export default Menu;