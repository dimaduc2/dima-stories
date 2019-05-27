import React, { Component } from 'react';

// PHẦN 1: IMPORT
import './App.css';
import { Button, Icon, Menu, Dropdown, Image, Checkbox, Label, Sidebar, Segment, Header} from 'semantic-ui-react';
import FileViewer from 'react-file-viewer';
import Iframe from 'react-iframe';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';	

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import logo_star_wars from './anh/Gray_Jedi_(Jedi_&_Sith)_symbol.png';
import logo_overlord from './anh/overlord_symbol.png';

import koTruyenDoc from './truyen/koTruyen.docx';
import koTruyenPDF from './truyen/koTruyen.pdf';

/*
import from './truyen/.docx';
import PDF from './truyen/.pdf';
*/

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

/*
docx tất cả các trang
pdf từ trang 1
*/

import Innocent from './truyen/Innocent.docx';
import InnocentPDF from './truyen/Innocent.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Hết PHẦN 1

configureAnchors({offset: -60, scrollDuration: 800})


var chieuRongManHinh = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
var chieuDaiManHinh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


//Danh ba tat ca Truyen
const truyens = {
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

//Danh ba tat ca Phim
const phims = {
  'starwars' :  [ 
                  [
                    {
                      ten: "Star Wars Clone Wars 2003 Full SS1 - SS2",
                      diaChi: 'https://www.youtube.com/embed/VgjtkgTNOHw'
                    }
                  ],
                  [
                    {
                      ten: "Revan - Star Wars Fan Film (2015)",
                      diaChi: 'https://www.youtube.com/embed/-DtvTM1Am4I'
                    }
                  ],
                  [
                    {
                      ten:  'SKYWALKER APPRENTICE (2019 Star Wars Fan Film)',
                      diaChi: 'https://www.youtube.com/embed/7ZfWU-3OL_s'
                    }
                  ]
                ],
  
  'overlord' :  [
                  [
                    {
                      ten: "Overlord SS1 EP1-13",
                      phan: 1,
                      diaChi: 'https://www.youtube.com/embed/e0kpvXdQem4'
                    },
                  ],

                  [
                    {
                      ten: "Overlord SS2 EP1",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/321031715'
                    },
                    {
                      ten: "Overlord SS2 EP2",
                      phan: 2,  
                      diaChi: 'https://player.vimeo.com/video/321032417',
                    },
                    {
                      ten: "Overlord SS2 EP3",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/319278678'
                    },
                    {
                      ten: "Overlord SS2 EP4",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/319279463'
                    },
                    {
                      ten: "Overlord SS2 EP5",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/320159670'
                    },
                    {
                      ten: "Overlord SS2 EP6",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/320164410'
                    },
                    {
                      ten: "Overlord SS2 EP7",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/320171261'
                    },
                    {
                      ten: "Overlord SS2 EP8",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/320179869'
                    },
                    {
                      ten: "Overlord SS2 EP9",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/321033499'
                    },
                    {
                      ten: "Overlord SS2 EP10",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/321034252'
                    },
                    {
                      ten: "Overlord SS2 EP11",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/321036135'
                    },
                    {
                      ten: "Overlord SS2 EP12",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/322563735'
                    },
                    {
                      ten: "Overlord SS2 EP13",
                      phan: 2,
                      diaChi: 'https://player.vimeo.com/video/321037784'
                    },
                  ],
                  [
                    {
                      ten: "Overlord SS3 EP1",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/322564470'
                    },
                    {
                      ten: "Overlord SS3 EP2",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/322566929'
                    },
                    {
                      ten: "Overlord SS3 EP3",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/322568310'
                    },
                    {
                      ten: "Overlord SS3 EP4",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/322569311'
                    },
                    {
                      ten: "Overlord SS3 EP5",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/322570871'
                    },
                    {
                      ten: "Overlord SS3 EP6",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/322570920'
                    },
                    {
                      ten: "Overlord SS3 EP7",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/324787588'
                    },
                    {
                      ten: "Overlord SS3 EP8",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/324788126'
                    },
                    {
                      ten: "Overlord SS3 EP9",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/324788674'
                    },
                    {
                      ten: "Overlord SS3 EP10",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/324790298'
                    },
                    {
                      ten: "Overlord SS3 EP11",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/324790836'
                    },
                    {
                      ten: "Overlord SS3 EP12",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/321036799'
                    },
                    {
                      ten: "Overlord SS3 EP13",
                      phan: 3,
                      diaChi: 'https://player.vimeo.com/video/324791530'
                    },
                  ],
                ]
              }

// PHẦN 2: State
class App extends Component {
  /*đây là thông tin ban đầu*/
  state = {
    truyenDoc: koTruyenDoc,
    truyenPDF: koTruyenPDF, 
    tenPhim: "",
    diachiPhim:"",  /*  bước 1  */
    tongSoTrang: null,
    trang: 1,
    tatCaTrang: false,
    arrayTatCaTrang: [],
    arrayTatCaTap: [],
    kichCuocChu: 1,
    kichCuocChuDocx: 15,
    white_or_black: false,
    dangXemGi: "",
    phimDangxem: "",
    thuTuTapDangXem: 0,
    thuTuPhanDangXem: 0,
    hienMenu: false,
  }

// PHẦN 3: Function
  hienVaGiauPhoneMenu = () => {
    if(this.state.hienMenu === true){
      this.setState({hienMenu: false})
    }
    else{
      this.setState({hienMenu: true})
    }
  }

  xemTrangKhac = (e,{value}) => {
    this.setState({trang: value});
  }
  thayDoiCoChu = (e,{value}) => {
    this.setState({kichCuocChu: value});
  }
  thayDoiCoChudocx = (e,{value}) => {
    this.setState({kichCuocChuDocx: value});
  }
  // máy tính sẽ hiện ra tập khác, tập số value
  xemTapKhac = (e,{value}) => {
    //Dima goi hanh dong xemPhim
    //Dima muon xem tap value
    this.xemPhim(this.state.phimDangxem, this.state.thuTuPhanDangXem, value-1);
  }
  // Cách thứ nhất:
  //1 tên hành động chung cho cả 2 trường hợp: xem Phim và xem Truyện
  xemtruoc = () => {

    //SO SÁNH Ở ĐÂY, trong hành động
    //nếu Dima đang xem Phim 
    if (this.state.dangXemGi === 'dangXemPhim') {
      //true - thì làm cái này
      if(this.state.thuTuTapDangXem > 0){
        this.xemPhim('overlord', this.state.thuTuPhanDangXem, this.state.thuTuTapDangXem -1);
      }
      else if(this.state.thuTuPhanDangXem > 0){
        
      //Dima bảo máy tính: hãy xemPhim tênDanhBạ 'overlord' (hãy xem phim này)
      //                               thứTựPhần this.state.thuTuPhanDangXem (phần đang xem) - 1 (hãy xem phần trước)
      //                               thứTựTập 12 (xem tập 13)
        this.xemPhim('overlord', this.state.thuTuPhanDangXem - 1, phims['overlord'][this.state.thuTuPhanDangXem-1].length-1);
      }
      else {
        alert("Đây là tập đầu tiên và Ko có tập trước")
      }
    }
  
    //nếu Dima đang xem Truyện 
    else {
      //false -  thì làm cái này
      if (this.state.trang > 1) {
        this.setState({trang: this.state.trang - 1});
      }
    }
  }

  // Cách thứ hai:
  //Chia ra làm 2 hành động chung cho 2 trường hợp: xem Phim và xem Truyện
  xemtrangsau = () => { 
      if (this.state.trang < this.state.tongSoTrang) {
        this.setState({trang: this.state.trang + 1});
      }
   }

  xemtapsau = () => {

    
    if((this.state.thuTuTapDangXem + 1) < phims['overlord'][this.state.thuTuPhanDangXem].length){
      //Dima bảo máy tính: hãy xemPhim tênDanhBạ này 'overlord' (hãy xem phim này)
      //                               thứTựPhần này: this.state.thuTuPhanDangXem (vẫn xem phần này). 
      //                               thứTựTập này: this.state.thuTuTapDangXem (tập đang xem) + 1 = (hãy xem tập sau). 
      this.xemPhim('overlord', this.state.thuTuPhanDangXem, this.state.thuTuTapDangXem + 1);
      
    }
    else if((this.state.thuTuPhanDangXem + 1) < phims['overlord'].length){
      
      //Dima bảo máy tính: hãy xemPhim tênDanhBạ 'overlord' (hãy xem phim này)
      //                               thứTựPhần this.state.thuTuPhanDangXem (phần đang xem) + 1 (hãy xem phần sau)
      //                               thứTựTập 0 (xem tập từ đầu)
      this.xemPhim('overlord', this.state.thuTuPhanDangXem + 1, 0);
    }
    else {
      alert("hết phim")
    }
  }
  /*
  xemtapsau = () => {
    if(this.state.thuTuTapDangXem < (phims['overlord2'].length-1)){
      this.xemPhim('overlord2', this.state.thuTuTapDangXem + 1);
    }
  }
  */

  // Máy tính hiện 1 phim bất kỳ: phim tên tenDanhBa, phần thuTuPhan, tập thuTuTap
  xemPhim = (tenDanhBa, thuTuPhan, thuTuTap) => {
    this.setState({tenPhim: phims[tenDanhBa][thuTuPhan][thuTuTap].ten, diachiPhim: phims[tenDanhBa][thuTuPhan][thuTuTap].diaChi})
    this.setState({dangXemGi: 'dangXemPhim'})
    this.setState({phimDangxem: tenDanhBa})  //Dima bảo máy tính tôi dang xem phim này
    this.setState({thuTuPhanDangXem: thuTuPhan})  //Dima bảo máy tính tôi dang xem phần này
    this.setState({thuTuTapDangXem: thuTuTap})
    this.sauKhiMoPhim(phims[tenDanhBa][thuTuPhan].length);
    this.setState({hienMenu: false})
  }

  bamHome = () => {
    this.setState({truyenDoc: koTruyenDoc, truyenPDF: koTruyenPDF, tenPhim: "", diachiPhim:"", dangXemGi:"Home"});
    this.hienVaGiauPhoneMenu()
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

 /*
  doc = () => {
    this.setState({truyen: , truyenPDF: PDF});
  }
*/

  docTruyen = (tenTruyenTrongDanhBa) => {
    this.setState({truyenDoc: truyens[tenTruyenTrongDanhBa].truyenDoc});
    this.setState({truyenPDF: truyens[tenTruyenTrongDanhBa].truyenPDF});
    this.setState( {dangXemGi: 'dangXemTruyen'});
    this.hienVaGiauPhoneMenu()
  }

  xemTatCa = () => {
    this.setState({tatCaTrang: !this.state.tatCaTrang});
  }
  doimau = () => {
    this.setState({white_or_black: !this.state.white_or_black});
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
  sauKhiMoPhim = (tongSoTap) =>{
    var arrayTap = [];
    var i;
    for (i = 1; i <= tongSoTap; i++) {
      arrayTap.push({key:i, text: i + " / " + tongSoTap, value:i});
    }
    this.setState({arrayTatCaTap: arrayTap});
  }
// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {truyenDoc, truyenPDF, tenPhim, diachiPhim, trang, tongSoTrang, tatCaTrang, arrayTatCaTrang, arrayTatCaTap, kichCuocChu, 
          kichCuocChuDocx, white_or_black, dangXemGi, phimDangxem, thuTuPhanDangXem, thuTuTapDangXem, hienMenu} = this.state;
    return (
      <div className="App" onKeyUp={this.bamBanPhim} tabIndex="0" style={{backgroundColor: (white_or_black ? 'black' : 'white')}}>
        
        { chieuRongManHinh > 900
          ?	// nếu true thì hiện Menu Máy Tính
            <Menu stackable inverted fixed='top'>
              <Menu.Item onClick={this.bamHome}>
              HOME
              </Menu.Item>
              <Menu.Item header onClick={this.bamHome}>Dima Stories</Menu.Item>
              <Dropdown item simple text='Star Wars'>
                <Dropdown.Menu>
                  {/*    
                  <Dropdown.Item onClick={this.doc}></Dropdown.Item>
                  */}
                  <Dropdown.Item onClick={() => this.docTruyen('Evangelion')}>EVANGELION</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.docTruyen('GANTZ')}>GANTZ</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => this.docTruyen('Backtothefuture')}>Back to the future</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.docTruyen('ChangingtheFuture')}>Changing the Future</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Icon name='star'/>
                    <i className='dropdown icon' />
                    <span className='text'>Darth Vader from the past</span>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => this.docTruyen('DarthVaderRebirth')}>Darth Vader Rebirth</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.docTruyen('DarthVaderHeroofNaboo')}>Darth Vader Hero of Naboo</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.docTruyen('ASithsSecondChance')}>A Siths Second Chance</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.docTruyen('MaceWindusalternateself')}>Mace Windu's alternate self</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.docTruyen('OperationPreventingVader')}>Operation Preventing Vader</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name='space shuttle'/>
                    <i className='dropdown icon' />
                    <span className='text'>VFSNAKE</span>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => this.docTruyen('Innocent')}>Innocent</Dropdown.Item>
                      <Dropdown.Item>Truths Revealed</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Image src={logo_star_wars} avatar/>
                    Anakin's Decision
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple text='Phim Youtube'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={ () => this.xemPhim('overlord', 0, 0) }>
                    <Image src={logo_overlord} avatar/>Overlord Ss 1 Full {/*  bước 3  */}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Image src={logo_overlord} avatar/>
                    <i className='dropdown icon' />
                    <span className='text'>Overlord Ss 2</span>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 0) }>Overlord Ss2 ep 1</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 1) }>Overlord Ss2 ep 2</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 2) }>Overlord Ss2 ep 3</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 3) }>Overlord Ss2 ep 4</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 4) }>Overlord Ss2 ep 5</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 5) }>Overlord Ss2 ep 6</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 6) }>Overlord Ss2 ep 7</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 7) }>Overlord Ss2 ep 8</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 8) }>Overlord Ss2 ep 9</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 9) }>Overlord Ss2 ep 10</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 10) }>Overlord Ss2 ep 11</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 11) }>Overlord Ss2 ep 12</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 12) }>Overlord Ss2 ep 13</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Image src={logo_overlord} avatar/>
                    <i className='dropdown icon' />
                    <span className='text'>Overlord Ss 3</span>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 0) }>Overlord Ss3 ep 1</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 1) }>Overlord Ss3 ep 2</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 2) }>Overlord Ss3 ep 3</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 3) }>Overlord Ss3 ep 4</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 4) }>Overlord Ss3 ep 5</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 5) }>Overlord Ss3 ep 6</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 6) }>Overlord Ss3 ep 7</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 7) }>Overlord Ss3 ep 8</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 8) }>Overlord Ss3 ep 9</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 9) }>Overlord Ss3 ep 10</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 10) }>Overlord Ss3 ep 11</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 11) }>Overlord Ss3 ep 12</Dropdown.Item>
                      <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 12) }>Overlord Ss3 ep 13</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  
                  <Dropdown.Item onClick={ () => this.xemPhim('starwars', 0, 0) }><img src={logo_star_wars} /> Star Wars Clone Wars 2003 Full</Dropdown.Item>
                  <Dropdown.Item onClick={ () => this.xemPhim('starwars', 1, 0) }><img src={logo_star_wars} /> Revan - Star Wars Fan Film (2015)</Dropdown.Item>
                  <Dropdown.Item onClick={ () => this.xemPhim('starwars', 2, 0) }><img src={logo_star_wars} /> SKYWALKER APPRENTICE (2019 Star Wars Fan Film)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Menu position='right'>
              <Menu.Item>
                  {tatCaTrang
                    ? 
                    <Label color='teal' basic={white_or_black} ribbon={white_or_black}>
                      tất cả trang
                    </Label>
                    : 
                    <Label color='olive' basic={white_or_black} ribbon={white_or_black}>
                      từng trang một
                    </Label>
                  }
                </Menu.Item>
                <Menu.Item>
                  PDF <Checkbox toggle checked={tatCaTrang} onChange={this.xemTatCa} style={{marginLeft:"5px", marginRight:"5px"}} /> DOC 
                </Menu.Item>
                <Menu.Item>
                  LIGHT <Checkbox toggle checked={white_or_black} onChange={this.doimau} style={{marginLeft:"5px", marginRight:"5px"}} /> DARK
                </Menu.Item>
                <Menu.Item>
                  {tatCaTrang
                    ?
                    <Dropdown placeholder='Kich Co' selection options={
                      [
                        {key: 1, text: '10pt', value: 10},
                        {key: 1.5, text: '15pt', value: 15},
                        {key: 2, text: '20pt', value: 20},
                      ]
                    } onChange={this.thayDoiCoChudocx}/>
                    :
                    <Dropdown placeholder='Kich Co' selection options={
                      [
                        {key: 1, text: '100%', value: 1},
                        {key: 1.5, text: '150%', value: 1.5},
                        {key: 2, text: '200%', value: 2},
                      ]
                    } onChange={this.thayDoiCoChu}/>
                  }
                </Menu.Item>
              </Menu.Menu>
            </Menu>

          :	// nếu false thì hiện Menu Phone
            <Menu vertical fixed='top' inverted style={{visibility: (hienMenu ? "visible" : "hidden")}} >
            
              <Menu.Item as='a' onClick={this.bamHome}>
                <Image src={logo_star_wars} size='mini' style={{display:'block', marginLeft: 'auto', marginRight:'auto'}}/> 
                Dima Stories
              </Menu.Item>

              <Menu.Item>
                <Dropdown floating text='Star Wars'>
                  <Dropdown.Menu>
                    {/*    
                    <Dropdown.Item onClick={this.doc}></Dropdown.Item>
                    */}
                    <Dropdown.Item onClick={() => this.docTruyen('Evangelion')}>EVANGELION</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.docTruyen('GANTZ')}>GANTZ</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => this.docTruyen('Backtothefuture')}>Back to the future</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.docTruyen('ChangingtheFuture')}>Changing the Future</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Dropdown floating text='Darth Vader from the past'>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => this.docTruyen('DarthVaderRebirth')}>Darth Vader Rebirth</Dropdown.Item>
                          <Dropdown.Item onClick={() => this.docTruyen('DarthVaderHeroofNaboo')}>Darth Vader Hero of Naboo</Dropdown.Item>
                          <Dropdown.Item onClick={() => this.docTruyen('ASithsSecondChance')}>A Siths Second Chance</Dropdown.Item>
                          <Dropdown.Item onClick={() => this.docTruyen('MaceWindusalternateself')}>Mace Windu's alternate self</Dropdown.Item>
                          <Dropdown.Item onClick={() => this.docTruyen('OperationPreventingVader')}>Operation Preventing Vader</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Dropdown floating text='VFSNAKE'>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => this.docTruyen('Innocent')}>Innocent</Dropdown.Item>
                          <Dropdown.Item>Truths Revealed</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Image src={logo_star_wars} avatar/>
                      Anakin's Decision
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item>

                <Dropdown floating text='Phim Youtube'>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={ () => this.xemPhim('overlord', 0, 0) }>
                      <Image src={logo_overlord} avatar/>Overlord Ss 1 Full {/*  bước 3  */}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image src={logo_overlord} avatar/>
                      <Dropdown floating text='Overlord Ss 2'>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 0) }>Overlord Ss2 ep 1</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 1) }>Overlord Ss2 ep 2</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 2) }>Overlord Ss2 ep 3</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 3) }>Overlord Ss2 ep 4</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 4) }>Overlord Ss2 ep 5</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 5) }>Overlord Ss2 ep 6</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 6) }>Overlord Ss2 ep 7</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 7) }>Overlord Ss2 ep 8</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 8) }>Overlord Ss2 ep 9</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 9) }>Overlord Ss2 ep 10</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 10) }>Overlord Ss2 ep 11</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 11) }>Overlord Ss2 ep 12</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 1, 12) }>Overlord Ss2 ep 13</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image src={logo_overlord} avatar/>
                      <Dropdown floating text='Overlord Ss 3'>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 0) }>Overlord Ss3 ep 1</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 1) }>Overlord Ss3 ep 2</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 2) }>Overlord Ss3 ep 3</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 3) }>Overlord Ss3 ep 4</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 4) }>Overlord Ss3 ep 5</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 5) }>Overlord Ss3 ep 6</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 6) }>Overlord Ss3 ep 7</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 7) }>Overlord Ss3 ep 8</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 8) }>Overlord Ss3 ep 9</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 9) }>Overlord Ss3 ep 10</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 10) }>Overlord Ss3 ep 11</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 11) }>Overlord Ss3 ep 12</Dropdown.Item>
                          <Dropdown.Item onClick={ () => this.xemPhim('overlord', 2, 12) }>Overlord Ss3 ep 13</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={ () => this.xemPhim('starwars', 0, 0) }>Star Wars Clone Wars 2003 Full</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.xemPhim('starwars', 1, 0) }>Revan - Star Wars Fan Film (2015)</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.xemPhim('starwars', 2, 0) }>SKYWALKER APPRENTICE (2019 Star Wars Fan Film)</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>
                LIGHT <Checkbox toggle checked={white_or_black} onChange={this.doimau} style={{marginLeft:"5px", marginRight:"5px"}} /> DARK
              </Menu.Item>
              <Menu.Item>
                <Dropdown compact placeholder='Kich Co' selection options={
                  [
                    {key: 1, text: '10pt', value: 10},
                    {key: 1.5, text: '15pt', value: 15},
                    {key: 2, text: '20pt', value: 20},
                  ]
                } onChange={this.thayDoiCoChudocx}/>
              </Menu.Item>


            </Menu>


        }


        {chieuRongManHinh <= 900
        /* Nếu màn hình bé hơn 900 = màn hình ĐT */
          /* Thì hiện ra menu dưới cho ĐT */
          ? 
              

              dangXemGi === 'dangXemPhim'
              ? 
              <Menu fixed='bottom' borderless size='mini' widths={4} compact inverted={white_or_black}>
         
                <Menu.Item onClick={this.hienVaGiauPhoneMenu}>
                  <Icon size='large' name='th large'/>
                </Menu.Item>

                <Menu.Item onClick={this.xemtruoc}>    
                  <Icon size='large' name='arrow circle left'/>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown compact placeholder='Chon Tap' selection options={arrayTatCaTap} onChange={this.xemTapKhac}/>
                </Menu.Item>

                <Menu.Item onClick={this.xemtapsau}>
                  <Icon size='large' name='arrow circle right'/>
                </Menu.Item>
              </Menu>
              
              /*Sai, nghĩa là ko phải đang xem phim, nghĩa là xem truyen*/
              :
                <Menu fixed='bottom' borderless size='mini' widths={4} compact inverted={white_or_black}>

                  <Menu.Item onClick={this.hienVaGiauPhoneMenu}>
                    <Icon size='large' name='th large'/>
                  </Menu.Item>


                  <Menu.Item as='a' href='#oTrenTrang'>
                    <Icon size='large' name='angle double up' />
                  </Menu.Item>
                
                  <Menu.Item as='a' href='#oDuoiTrang'>
                    <Icon size='large' name='angle double down' />
                  </Menu.Item>
                </Menu>







          /* Còn ko là Màn Hình hơn 900 = màn hình MT */
          : (tatCaTrang && (dangXemGi === 'dangXemTruyen'))
          /* Nếu đang xem DOC và đang xem Truyện */
           
            /* thì ko cần hiện ra menu chọn trang ở dưới */
            ? null
         
            /* còn ko thì hiện ra menu chọn trang ở dưới */
            : <Menu fixed='bottom' borderless size='mini' widths={5} compact inverted={white_or_black}>
         
                <Menu.Item>
                </Menu.Item>
                
                {/* Cách thứ nhất:
                1 tên hành động xemtruoc chung cho cả 2 trường hợp: xem Phim và xem Truyện */}
                <Menu.Item onClick={this.xemtruoc}>    
                  <Button icon labelPosition='left' >
                    <Icon name='arrow circle left'/>
                      Previous (Prev)
                  </Button>
                </Menu.Item>
                {dangXemGi === 'dangXemTruyen'
                  ? <Menu.Item>
                    <Dropdown compact placeholder='Chon Trang' selection options={arrayTatCaTrang} onChange={this.xemTrangKhac}/>
                    </Menu.Item>
                  
                  : <Menu.Item>
                    <Dropdown compact placeholder='Chon Tap' selection options={arrayTatCaTap} onChange={this.xemTapKhac}/>
                    </Menu.Item>
                }
                {/* Cách thứ hai:
                2 hành động khác nhau cho 2 trường hợp: xem Phim và xem Truyện
                SO SÁNH Ở DƯỚI ĐÂY, ở nút bấm */}   
                <Menu.Item onClick={(dangXemGi === 'dangXemPhim') ? this.xemtapsau : this.xemtrangsau}>
                  <Button icon labelPosition='right' >
                    <Icon name='arrow circle right'/>
                    Next
                  </Button>
                </Menu.Item>

                <Menu.Item>
                </Menu.Item>
              </Menu>
        }
        
        { chieuRongManHinh <= 900
          /*neu trên đt thì ko hiện gì*/
          ? null

          /*neu trên mt thì hiện ra khi xem truyện*/
          /*nếu đang xem truyện*/
          : (dangXemGi === 'dangXemTruyen')
            /* thì hiện ra menu lên xuống */
            ? <Menu vertical fixed='right' icon style={{marginTop:'70vh', marginBottom:'5vh'}}>
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
            : null
        }
        
        {/* Vị trí này ở trên cùng của trang, khi Dima bấm lên thì sẽ lên đây*/}
        <ScrollableAnchor id={'oTrenTrang'}> 
          <div></div> 
        </ScrollableAnchor>
        {(chieuRongManHinh > 900)
          ? (dangXemGi === 'dangXemTruyen')
            ? 
            tatCaTrang
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

            : (dangXemGi === 'dangXemPhim')
              ?
              <div className="phim-may-tinh">
                <h1 style={{color:(white_or_black ? 'white' : 'black')}}>{tenPhim} - {phimDangxem} [{thuTuPhanDangXem}] [{thuTuTapDangXem}]</h1>
                <Iframe url={diachiPhim} /*  bước 2  */
                width={(chieuRongManHinh-30)+"px"}
                height={(chieuDaiManHinh-200)+"px"}
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen />
              </div>
              : null
          
          /* Nếu False (chieuRongManHinh < 900) thì Hiện truyện và phim trên Điện Thoại */
          : (dangXemGi === 'dangXemTruyen') /* điều kiện: đang xem truyện à? True hoặc False ở dưới */
            /* nếu True thì xem luôn truyện DOCX, ko cần quan tâm đến truyện PDF */
            ? <div className='truyen-div' 
                style={{fontSize: kichCuocChuDocx+'pt', lineHeight: kichCuocChuDocx+5+'pt', 
                  backgroundColor: (white_or_black ? 'black' : 'white'), 
                  color: (white_or_black ? 'white' : 'black'),
                  width: (chieuRongManHinh)
                }}>
                {/*Hien thi truyen DOCX, xem tat ca trang*/}
                <FileViewer key={truyenDoc} fileType='docx' filePath={truyenDoc}/>
              </div>
              
            /* nếu False thì hỏi tiếp điều kiện tiếp theo*/
            : (dangXemGi === 'dangXemPhim') /* Điều kiện: đang xem phim à? True hoặc False ở dưới*/
              /* nếu True thì hiện phim */   
              ? <div>
                  <h1 style={{color:(white_or_black ? 'white' : 'black')}}>{tenPhim} - {phimDangxem} [{thuTuPhanDangXem}] [{thuTuTapDangXem}]</h1>
                  <Iframe url={diachiPhim} /*  bước 2  */
                  width={(chieuRongManHinh-30)+"px"}
                  height={(chieuDaiManHinh-200)+"px"}
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  allowFullScreen />
                </div>
              /* nếu False thì ko hiện gì: null (đây là khi bấm Home, giấu hết truyện và phim đi) */   
              : null         
        }
        <br/><br/><br/><br/><br/>
        <Button basic color='red' onClick={this.xemTatCa}>Xem Tat Ca</Button>
        
        <Button basic color='red' onClick={this.hienPhoneMenu}> Hiện Menu Phone </Button>
	      <Button inverted color='orange' onClick={this.dauPhoneMenu}> Dấu Menu Phone </Button>

        <Button  color='blue' animated='bounce'>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='file word outline' />
          </Button.Content>
        </Button>
        <Button color='youtube' onClick={this.xemYoutubeOverlord}>
          <Icon name='youtube' /> Overlord
        </Button>
        <Button circular color='youtube' icon='youtube' />
        <br/><br/><br/><br/><br/>

        {/* Vị trí này ở dưới cùng của trang, khi Dima bấm xuống thì sẽ xuống đây*/}
        <ScrollableAnchor id={'oDuoiTrang'}> 
          <div></div> 
        </ScrollableAnchor>
        
      </div>
    );
  }
}
export default App;