import React, { Component } from 'react';
import pdf from '../assets/FSCS.pdf';
import docImage from '../images/Document_Icon.svg';
import Menu from './menu'
import '../css/pdfviewer.css'

class PdfViewer extends Component {
  render() {
    return (
        <div className="main">
            <Menu />
            <div className="pdfContent">
                <div className="documentTitle">
                    <span><img alt="Document" className="docTitleImage" src={docImage} /></span>
                    <span>Document 1</span>
                </div>
                <embed src={pdf} alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html" />
            </div>
      </div>
    );
  }
}

export default PdfViewer;
