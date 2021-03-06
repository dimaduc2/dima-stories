import React, { Component } from 'react';

import MenuDieuKhien from './MenuDieuKhien'

import { Menu, Icon } from 'semantic-ui-react'

// PHẦN 1: IMPORT
import FileViewer from 'react-file-viewer';

import koTruyenDoc from './truyen/koTruyen.docx';
import koTruyenPDF from './truyen/koTruyen.pdf';

import BacktothefutureDoc from './truyen/Back to the future.docx';
import BacktothefuturePDF from './truyen/Back to the future.pdf';
import ChangingtheFutureDoc from './truyen/Changing the Future.docx';
import ChangingtheFuturePDF from './truyen/Changing the Future.pdf';
import EvangelionDoc from './truyen/evangelion.docx';
import EvangelionPDF from './truyen/evangelion.pdf';
import GANTZDoc from './truyen/GANTZ.docx';
import GANTZPDF from './truyen/GANTZ.pdf';
import DarthVaderRebirthDoc from './truyen/Darth Vader Rebirth.docx';
import DarthVaderRebirthPDF from './truyen/Darth Vader Rebirth.pdf';
import DarthVaderHeroofNabooDoc from './truyen/Darth Vader- Hero of Naboo.docx';
import DarthVaderHeroofNabooPDF from './truyen/Darth Vader- Hero of Naboo.pdf';
import ASithsSecondChanceDoc from './truyen/A Siths Second Chance.docx';
import ASithsSecondChancePDF from './truyen/A Siths Second Chance.pdf';
import MaceWindusalternateselfDoc from './truyen/Mace Windus alternate self.docx';
import MaceWindusalternateselfPDF from './truyen/Mace Windus alternate self.pdf';
import OperationPreventingVaderDoc from './truyen/Operation Preventing Vader.docx';
import OperationPreventingVaderPDF from './truyen/Operation Preventing Vader.pdf';
import InnocentDoc from './truyen/Innocent.docx';
import InnocentPDF from './truyen/Innocent.pdf';
import chosenOneDoc from './truyen/Lord Anakin Vader Skywalker & Lady Padme Mirayya Amidala & Lord Obi-Wan Rego Kenobi.docx';
import chosenOnePDF from './truyen/Lord Anakin Vader Skywalker & Lady Padme Mirayya Amidala & Lord Obi-Wan Rego Kenobi.pdf';



import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//Danh ba tat ca Truyen
const danhBaTruyen = {
  'koTruyen' : {
    truyenDoc: koTruyenDoc,
    truyenPDF: koTruyenPDF
  },
  'Innocent' : {
    truyenDoc: InnocentDoc,
    truyenPDF: InnocentPDF
  },
  'chosenOne' : {
    truyenDoc: chosenOneDoc,
    truyenPDF: chosenOnePDF
  },
  'Backtothefuture' : {
    truyenDoc: BacktothefutureDoc,
    truyenPDF: BacktothefuturePDF
  },
  'ChangingtheFuture': {
    truyenDoc: ChangingtheFutureDoc,
    truyenPDF: ChangingtheFuturePDF
  },
  'Evangelion': {
    truyenDoc: EvangelionDoc,
    truyenPDF: EvangelionPDF
  },
  'GANTZ': {
    truyenDoc: GANTZDoc,
    truyenPDF: GANTZPDF
  },
  'DarthVaderRebirth': {
    truyenDoc: DarthVaderRebirthDoc,
    truyenPDF: DarthVaderRebirthPDF
  },
  'DarthVaderHeroofNaboo': {
    truyenDoc: DarthVaderHeroofNabooDoc,
    truyenPDF: DarthVaderHeroofNabooPDF
  },
  'ASithsSecondChance': {
    truyenDoc: ASithsSecondChanceDoc,
    truyenPDF: ASithsSecondChancePDF
  },
  'MaceWindusalternateself': {
    truyenDoc: MaceWindusalternateselfDoc,
    truyenPDF: MaceWindusalternateselfPDF
  },
  'OperationPreventingVader': {
    truyenDoc: OperationPreventingVaderDoc,
    truyenPDF: OperationPreventingVaderPDF
  }
}

// PHẦN 2: State
class Truyen extends Component {
  state = {
    tongSoTrang: null, 
    trang: 1,
    arrayTatCaTrang: [],
  }

// PHẦN 3: Function
//Mỗi khi mở 1 truyện ra, thì làm hành động này:
sauKhiMoTruyen = ({ numPages }) => {
  this.setState({ tongSoTrang: numPages, trang: 1});
  var arrayTrang = [];
  var i;
  for (i = 1; i <= numPages; i++) {
    arrayTrang.push({key:i, text: i + " / " + numPages, value:i});
  }
  this.setState({arrayTatCaTrang: arrayTrang});
}

xemTrangSau = () => { 
  if (this.state.trang < this.state.tongSoTrang) {
    this.setState({trang: this.state.trang + 1});
  }
}

xemTrangTruoc = () => {
  if (this.state.trang > 1) {
    this.setState({trang: this.state.trang - 1});
  }
}

xemTrangKhac = (e,{value}) => {
  this.setState({trang: value});
}

xuongtranghet = () => {
  scroll.scrollToBottom();
}
xuongtrang = () => {
  scroll.scrollMore(450);
}
lentrang = () => {
  scroll.scrollMore(-450);
}
lentranghet = () => {
  scroll.scrollToTop();
}

bamBanPhim = (event) => {
  if (event.key === 'ArrowUp'){
    this.lentrang();
  }
  else if (event.key === 'ArrowDown'){
    this.xuongtrang();
  }
  else if (event.key === 'ArrowLeft'){
    this.lentranghet();
  }
  else if (event.key === 'ArrowRight'){
    this.xuongtranghet();
  }
  else if (event.key === 'p'){
    this.xemtruoc();
  
  }
  else if (event.key === 'n'){
    this.xemtrangsau();  
  }
}


// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {tongSoTrang, trang, arrayTatCaTrang} = this.state;
    var {docx_or_pdf, kichCuocChuDocx, white_or_black, chieuRongManHinh, tenTruyenTrongDanhBa, kichCuocChu, dangXemGi, 
          hienVaGiauPhoneMenu } = this.props;
    return (
      <div className="Truyen" onKeyUp={this.bamBanPhim} tabIndex="0" >


        {docx_or_pdf
        ? <div className='truyen-div' 
            style={{fontSize: kichCuocChuDocx+'pt', lineHeight: kichCuocChuDocx+5+'pt', 
              backgroundColor: (white_or_black ? 'black' : 'white'), 
              color: (white_or_black ? 'white' : 'black'),
              width: (chieuRongManHinh-30), 

            }}>
            {/*Hien thi truyen DOCX, xem tat ca trang*/}
            
            <FileViewer key={danhBaTruyen[tenTruyenTrongDanhBa].truyenDoc} fileType='docx' filePath={danhBaTruyen[tenTruyenTrongDanhBa].truyenDoc}/>
          </div>

        : <div className='truyen-PDF' align='center'  style={{backgroundColor: (white_or_black ? 'black' : 'white'), 
        color: (white_or_black ? 'white' : 'black')}}>
        
          <div style={{height: 125*kichCuocChu+'vh', paddingTop: 60*kichCuocChu + 'vh'}}>
          {/*Hien thi truyen PDF, xem tung trang mot*/}
          <Document file={danhBaTruyen[tenTruyenTrongDanhBa].truyenPDF} onLoadSuccess={this.sauKhiMoTruyen}>
            <Page pageNumber={trang} scale={kichCuocChu} renderMode='none' /> 
          </Document>
          </div>
          <p>Page {trang} of {tongSoTrang}</p>
        </div>
        }
 
        {docx_or_pdf && (chieuRongManHinh > 900)
          ? null
          : <MenuDieuKhien white_or_black={white_or_black} dangXemGi={dangXemGi} chieuRongManHinh={chieuRongManHinh} 
                       docx_or_pdf={docx_or_pdf} arrayTatCa={arrayTatCaTrang} xemTruoc={this.xemTrangTruoc}
                       xemSau={this.xemTrangSau} xemKhac={this.xemTrangKhac} hienVaGiauPhoneMenu={hienVaGiauPhoneMenu}/>
        }

        { chieuRongManHinh <= 900
          /*neu trên đt thì ko hiện gì*/
          ? null

          /*neu trên may tinh thì hiện ra khi xem truyện*/
          : <Menu vertical fixed='right' icon style={{marginTop:'70vh', marginBottom:'5vh'}}>
              <Menu.Item onClick={this.lentranghet}>
                  <Icon name='angle double up' />
              </Menu.Item>
              <Menu.Item onClick={this.lentrang}>
                  <Icon name='angle up' />
              </Menu.Item>
              <Menu.Item onClick={this.xuongtrang}>
                  <Icon name='angle down' />
              </Menu.Item>
              <Menu.Item onClick={this.xuongtranghet}>
                  <Icon name='angle double down' />
              </Menu.Item>
            </Menu>
        }
        
        </div>
    )
  }
}
export default Truyen;