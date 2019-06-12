import React, { Component } from 'react';

// PHẦN 1: IMPORT
import './App.css';
import Anh from './Anh';
import Truyen from './Truyen';
import Phim from './Phim';
import MenuDienThoai from './MenuDienThoai';
import MenuMayTinh from './MenuMayTinh';

import { Button, Icon, Menu, Dropdown } from 'semantic-ui-react';


import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';	

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

/*
import from './truyen/.docx';
import PDF from './truyen/.pdf';
*/

/*
docx tất cả các trang
pdf từ trang 1
*/

const danhBaPhim = {
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

// Hết PHẦN 1

configureAnchors({offset: -60, scrollDuration: 800})


var chieuRongManHinh = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
var chieuDaiManHinh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);




// PHẦN 2: State
class App extends Component {
  /*đây là thông tin ban đầu*/
  state = {
    tenTruyenTrongDanhBa: 'koTruyen',
    tenPhimTrongDanhBa: 'koTruyen',
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
  //anhStarWars_or_Batman: false la Star Wars và true là Batman

// PHẦN 3: Function

  kiemTraManHinh =  () => {
    if(chieuRongManHinh > 900){
      alert("Hiện cửa sổ trên màn hình trên máy tính.");
    }
    else{
      alert("Hiện cửa sổ trên màn hình trên điện thoại.");
    }
  }
  
  /*hienVaGiauPhoneMenu = () => {
    if(this.state.hienMenu === true){
      this.setState({hienMenu: false})
    }
    else{
      this.setState({hienMenu: true})
    }
  }*/

  hienVaGiauPhoneMenu = () => {
    this.setState({hienMenu: !this.state.hienMenu})
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
        this.xemPhim('overlord', this.state.thuTuPhanDangXem - 1, danhBaPhim['overlord'][this.state.thuTuPhanDangXem-1].length-1);
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
    
    if((this.state.thuTuTapDangXem + 1) < danhBaPhim['overlord'][this.state.thuTuPhanDangXem].length){
      //Dima bảo máy tính: hãy xemPhim tênDanhBạ này 'overlord' (hãy xem phim này)
      //                               thứTựPhần này: this.state.thuTuPhanDangXem (vẫn xem phần này). 
      //                               thứTựTập này: this.state.thuTuTapDangXem (tập đang xem) + 1 = (hãy xem tập sau). 
      this.xemPhim('overlord', this.state.thuTuPhanDangXem, this.state.thuTuTapDangXem + 1);
      
    }
    else if((this.state.thuTuPhanDangXem + 1) < danhBaPhim['overlord'].length){
      
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
    this.setState({tenPhim: danhBaPhim[tenDanhBa][thuTuPhan][thuTuTap].ten, diachiPhim: danhBaPhim[tenDanhBa][thuTuPhan][thuTuTap].diaChi})
    this.setState({dangXemGi: 'dangXemPhim'})
    this.setState({phimDangxem: tenDanhBa})  //Dima bảo máy tính tôi dang xem phim này
    this.setState({thuTuPhanDangXem: thuTuPhan})  //Dima bảo máy tính tôi dang xem phần này
    this.setState({thuTuTapDangXem: thuTuTap})
    this.sauKhiMoPhim(danhBaPhim[tenDanhBa][thuTuPhan].length);
    this.setState({hienMenu: false})
  }

  bamHome = () => {
    this.setState({tenTruyenTrongDanhBa: 'koTruyen', tenPhim: "", diachiPhim:"", dangXemGi:"koXemGi"});
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

  docTruyen = (tenTruyen) => {
    //this.setState({truyenDoc: truyens[tenTruyenTrongDanhBa].truyenDoc});
    //this.setState({truyenPDF: truyens[tenTruyenTrongDanhBa].truyenPDF});
    this.setState({tenTruyenTrongDanhBa: tenTruyen});
    this.setState({dangXemGi: 'dangXemTruyen'});
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
    var {tenTruyenTrongDanhBa, tenPhim, diachiPhim, trang, tongSoTrang, tatCaTrang, arrayTatCaTrang, arrayTatCaTap, kichCuocChu, 
          kichCuocChuDocx, white_or_black, dangXemGi, phimDangxem, thuTuPhanDangXem, thuTuTapDangXem, hienMenu} = this.state;
    return (
      <div className="App" onKeyUp={this.bamBanPhim} tabIndex="0" style={{backgroundColor: (white_or_black ? 'black' : 'white')}}>
        
        { chieuRongManHinh > 900
          ?	// nếu true thì hiện Menu Máy Tính
            <MenuMayTinh dangXemGi={dangXemGi} docx_or_pdf={tatCaTrang} white_or_black={white_or_black} docTruyen={this.docTruyen}
                          xemPhim={this.xemPhim} bamHome={this.bamHome}/>
          :	// nếu false thì hiện Menu Phone
            <MenuDienThoai dangXemGi={dangXemGi} white_or_black={white_or_black} docTruyen={this.docTruyen}
                          xemPhim={this.xemPhim} bamHome={this.bamHome} hienMenu={hienMenu}/>

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
        <br/><br/><br/><br/><br/>
        <Button basic color='red' as='a' href='#denCuoiTrang'> Đến Cuối Trang </Button>
        <br/><br/>
        <Button basic color='blue' onClick={this.kiemTraManHinh}> scs </Button>
        {(chieuRongManHinh > 900)
          ? (dangXemGi === 'dangXemTruyen')
            ? <Truyen docx_or_pdf={tatCaTrang} kichCuocChuDocx={kichCuocChuDocx} white_or_black={white_or_black} 
                      chieuRongManHinh={chieuRongManHinh} tenTruyenTrongDanhBa={tenTruyenTrongDanhBa}       
                      trang={trang} tongSoTrang={tongSoTrang} kichCuocChu={kichCuocChu}
                      sauKhiMoTruyen={this.sauKhiMoTruyen}/>
            : (dangXemGi === 'dangXemPhim')
              ?<Phim white_or_black={white_or_black} chieuRongManHinh={chieuRongManHinh} tenPhim={tenPhim} phimDangxem={phimDangxem}
              thuTuPhanDangXem={thuTuPhanDangXem} thuTuTapDangXem={thuTuTapDangXem} 
              diachiPhim={diachiPhim} chieuDaiManHinh={chieuDaiManHinh} />
              
              : null
          /* Nếu False (chieuRongManHinh < 900) thì Hiện truyện và phim trên Điện Thoại */
          : (dangXemGi === 'dangXemTruyen') /* điều kiện: đang xem truyện à? True hoặc False ở dưới */
            /* nếu True thì xem luôn truyện DOCX, ko cần quan tâm đến truyện PDF */
            ? <Truyen docx_or_pdf={true} kichCuocChuDocx={kichCuocChuDocx} white_or_black={white_or_black} 
                chieuRongManHinh={chieuRongManHinh+30} tenTruyenTrongDanhBa={tenTruyenTrongDanhBa}       
                trang={trang} tongSoTrang={tongSoTrang} kichCuocChu={kichCuocChu}
                sauKhiMoTruyen={this.sauKhiMoTruyen}/>
              
            /* nếu False thì hỏi tiếp điều kiện tiếp theo*/
            : (dangXemGi === 'dangXemPhim') /* Điều kiện: đang xem phim à? True hoặc False ở dưới*/
              /* nếu True thì hiện phim */   
              ? <Phim white_or_black={white_or_black} chieuRongManHinh={chieuRongManHinh} tenPhim={tenPhim} 
                      phimDangxem={phimDangxem} thuTuPhanDangXem={thuTuPhanDangXem} thuTuTapDangXem={thuTuTapDangXem} 
                      diachiPhim={diachiPhim} chieuDaiManHinh={chieuDaiManHinh} />
              /* nếu False thì ko hiện gì: null (đây là khi bấm Home, giấu hết truyện và phim đi) */   
              : null         
        }
        <br/><br/><br/><br/><br/>
        <ScrollableAnchor id={'denCuoiTrang'}> 
          <div></div> 
        </ScrollableAnchor>
        
        <Anh/>        

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