import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Button, Image} from 'semantic-ui-react';
import FileViewer from 'react-file-viewer';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// PHẦN 2: State
class Truyen extends Component {
  state = {

  }

// PHẦN 3: Function


// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {} = this.state;
    var {tatCaTrang, kichCuocChuDocx, white_or_black, chieuRongManHinh, truyenDoc, truyenPDF, kichCuocChu, tongSoTrang, trang} = this.props;
    return (
      <div className="Truyen">
        {tatCaTrang
        ? <div className='truyen-div' 
            style={{fontSize: kichCuocChuDocx+'pt', lineHeight: kichCuocChuDocx+5+'pt', 
              backgroundColor: (white_or_black ? 'black' : 'white'), 
              color: (white_or_black ? 'white' : 'black'),
              width: (chieuRongManHinh-30), 
            }}>
            {/*Hien thi truyen DOCX, xem tat ca trang*/}
            
            <FileViewer key={truyenDoc} fileType='docx' filePath={truyenDoc}/>
          </div>

        : <div className='truyen-PDF' align='center'  style={{backgroundColor: (white_or_black ? 'black' : 'white'), 
        color: (white_or_black ? 'white' : 'black')}}>
        
          <div style={{height: 125*kichCuocChu+'vh', paddingTop: 60*kichCuocChu + 'vh'}}>
          {/*Hien thi truyen PDF, xem tung trang mot*/}
          <Document file={truyenPDF} onLoadSuccess={this.sauKhiMoTruyen}>
            <Page pageNumber={trang} scale={kichCuocChu} renderMode='none' /> 
          </Document>
          </div>
          <p>Page {trang} of {tongSoTrang}</p>
        </div>
        }

      </div>
    )
  }
}
export default Truyen;