import React, { Component } from 'react';
import docIcon from '../images/Document_Icon.svg';
import logo from '../images/logo_sm_white.svg';
import uploadIcon from '../images/uploadIcon.svg';
import pdf from '../assets/FSCS.pdf';
import '../css/pdf.css';

class Pdf extends Component {
  render() {
    return (
        <div className="layout">
            <div className="layout_sidebar">
                <a className="sidebar_trigger">
                    <div>	
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>
                <nav className="sidebar_nav">
                    <img alt="logo" src={logo} className="logo" />
                    <ul>
                        <li className="files-text">
                            FILES
                        </li>
                        <li>
                            <a className="sidebar_nav-link" href="#0">
                                {/*<i className="fa fa-home"></i><em>Home</em>*/}
                                <div>
                                    <span>
                                        <img alt="logo" src={docIcon} className="docIcon" />
                                    </span>
                                    <p>
                                        <font>Document 01</font><br />
                                        <em>Nam vel porta velit</em>
                                    </p>
                                </div>
                                {/*<a className="link-hover"></a>*/}
                            </a>
                        </li>
                        <li>
                            <a className="sidebar_nav-link" href="#0">
                                {/*<i className="fa fa-home"></i><em>Home</em>*/}
                                <div>
                                    <span>
                                        <img alt="logo" src={docIcon} className="docIcon" />
                                    </span>
                                    <p>
                                        <font>Document 02</font><br />
                                        <em>Nam vel porta velit</em>
                                    </p>
                                </div>
                                {/*<a className="link-hover"></a>*/}
                            </a>
                        </li>
                        <li>
                            <a className="sidebar_nav-link" href="#0">
                                {/*<i className="fa fa-home"></i><em>Home</em>*/}
                                <div>
                                    <span>
                                        <img alt="logo" src={docIcon} className="docIcon" />
                                    </span>
                                    <p>
                                        <font>Document 03</font><br />
                                        <em>Nam vel porta velit</em>
                                    </p>
                                </div>
                                {/*<a className="link-hover"></a>*/}
                            </a>
                        </li>
                    </ul>
                    <div className="upload">
                        <span>
                            <img alt="Document" className="upload-icon" src={uploadIcon} />
                            Upload Files
                        </span>
                    </div>
                </nav>
            </div>
            <main className="layout_content">
                <div className="main-title">
                    <img alt="logo" src={docIcon} className="docIcon" />
                    <font>
                        Document 01
                    </font>
                </div>
                <div className="pdf-container">
                    <object data={pdf} type="application/pdf">
                        <p>Your web browser doesn't have a PDF plugin.</p>
                    </object>
                </div>
            </main>
        </div>
    );
  }
}

export default Pdf;
