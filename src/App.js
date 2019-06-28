import React, { Component } from 'react';

// PHẦN 1: IMPORT
import './App.css';
import Anh from './Anh';
import Truyen from './Truyen';
import Phim from './Phim';
import Home from './Home';
import MenuMayTinh from './MenuMayTinh';
import MenuDienThoai from './MenuDienThoai'
import { Button, Icon, Menu } from 'semantic-ui-react';

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

// Hết PHẦN 1

configureAnchors({offset: -60, scrollDuration: 800})

var chieuRongManHinh = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
var chieuDaiManHinh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// PHẦN 2: State
class App extends Component {
  /*đây là thông tin ban đầu*/
  state = {
    tenTruyenTrongDanhBa: 'koTruyen',
    tenPhimTrongDanhBa: 'koPhim',
    tatCaTrang: false,
    kichCuocChu: 1,
    kichCuocChuDocx: 15,
    white_or_black: false,
    dangXemGi: "dangXemHome", //bắt đầu thì đang xem Home
    thuTuTapDangXem: 0,
    thuTuPhanDangXem: 0,
    hienMenu: false,
    coChu: 10, // bắt đầu thì cỡ chữ là 10px thôi
    chuHello: "hello", // bắt đầu thì chữ Hello là tiếng anh
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
  phongToCoChu= () => {
    ///this.setState({coChu: "60px"});
    this.setState({coChu: this.state.coChu * 2})
  }
  thuNhoCoChu= () => {
    this.setState({coChu: this.state.coChu / 2})
  }


  thayDoiChu = (tieng) => {
    this.setState({chuHello: tieng})
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

  thayDoiCoChu = (e,{value}) => {
    this.setState({kichCuocChu: value});
  }
  thayDoiCoChudocx = (e,{value}) => {
    this.setState({kichCuocChuDocx: value});
  }
    // Máy tính hiện 1 phim bất kỳ: phim tên tenDanhBa, phần thuTuPhan, tập thuTuTap
  xemPhim = (tenPhim, thuTuPhan, thuTuTap) => {
    this.setState({dangXemGi: 'dangXemPhim'})
    this.setState({tenPhimTrongDanhBa: tenPhim})  //Dima bảo máy tính tôi dang xem phim này
    this.setState({thuTuPhanDangXem: thuTuPhan})  //Dima bảo máy tính tôi dang xem phần này
    this.setState({thuTuTapDangXem: thuTuTap})
    //this.sauKhiMoPhim(danhBaPhim[tenPhim][thuTuPhan].length);
    this.setState({hienMenu: false})
  }

  bamHome = () => {
    this.setState({tenTruyenTrongDanhBa: 'koTruyen', tenPhim: "", diachiPhim:"", dangXemGi:"dangXemHome"});
    this.hienVaGiauPhoneMenu()
  }

  bamAnh = () => {
    this.setState({dangXemGi:"dangXemAnh"});
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

  
// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {tenTruyenTrongDanhBa, tatCaTrang, kichCuocChu, kichCuocChuDocx, coChu, white_or_black, dangXemGi, 
        tenPhimTrongDanhBa, thuTuPhanDangXem, thuTuTapDangXem, hienMenu, chuHello} = this.state;
    return (
      <div className="App" onKeyUp={this.bamBanPhim} tabIndex="0" style={{backgroundColor: (white_or_black ? 'black' : 'white')}}>
        
        { chieuRongManHinh > 900
          ?	// nếu true thì hiện Menu Máy Tính
            <MenuMayTinh dangXemGi={dangXemGi} docx_or_pdf={tatCaTrang} white_or_black={white_or_black} docTruyen={this.docTruyen}
                          xemPhim={this.xemPhim} bamHome={this.bamHome} xemTatCa={this.xemTatCa} doimau={this.doimau}
                          thayDoiCoChudocx={this.thayDoiCoChudocx} thayDoiCoChu={this.thayDoiCoChu} bamAnh={this.bamAnh}/>
          :	// nếu false thì hiện Menu Phone
            <MenuDienThoai dangXemGi={dangXemGi} white_or_black={white_or_black} docTruyen={this.docTruyen}
                          xemPhim={this.xemPhim} bamHome={this.bamHome} hienMenu={hienMenu} doimau={this.doimau}
                          thayDoiCoChudocx={this.thayDoiCoChudocx} bamAnh={this.bamAnh}/>
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


        {(chieuRongManHinh > 900) /*Kiểm tra là Máy Tính hay là Điện Thoại? */ 

          // Nếu True (chieuRongManHinh lớn hơn 900) thì đây là Máy Tính
          ? //Sẽ hiện Truyện, Phim, Ảnh trên Máy Tính
            <div> 
              {(dangXemGi === 'dangXemHome') //Nếu bấm Home, đang xem Home
                ? <Home chieuRongManHinh={chieuRongManHinh} white_or_black={white_or_black} dangXemGi={dangXemGi}/>
                : null
              }
              {(dangXemGi === 'dangXemTruyen') //Nếu đang xem Truyện
                ? <Truyen docx_or_pdf={tatCaTrang} kichCuocChuDocx={kichCuocChuDocx} white_or_black={white_or_black} 
                          chieuRongManHinh={chieuRongManHinh} tenTruyenTrongDanhBa={tenTruyenTrongDanhBa}       
                          kichCuocChu={kichCuocChu} dangXemGi={dangXemGi} />
                : null
              }
              {(dangXemGi === 'dangXemPhim') //Nếu đang xem Phim
                ? <Phim dangXemGi={dangXemGi} white_or_black={white_or_black} chieuRongManHinh={chieuRongManHinh} 
                        tenPhimTrongDanhBa={tenPhimTrongDanhBa} thuTuPhanDangXem={thuTuPhanDangXem} thuTuTapDangXem={thuTuTapDangXem} 
                        xemPhim={this.xemPhim} chieuDaiManHinh={chieuDaiManHinh} docx_or_pdf={tatCaTrang} />
                : null
              }
              {(dangXemGi === 'dangXemAnh') //Nếu đang xem Ảnh
                ? <Anh chieuRongManHinh={chieuRongManHinh} dangXemGi={dangXemGi} white_or_black={white_or_black} 
                        hienVaGiauPhoneMenu={this.hienVaGiauPhoneMenu} />     
                : null
              }
            </div>
          
              

          // Nếu False (chieuRongManHinh nhỏ hơn 900) thì đây là Điện Thoại Hiện truyện và phim trên Điện Thoại 
          : //Sẽ hiện Truyện, Phim, Ảnh trên Điện Thoại
            <div>
              {(dangXemGi === 'dangXemHome') //Nếu bấm Home, đang xem Home
                ? <Home chieuRongManHinh={chieuRongManHinh} white_or_black={white_or_black} dangXemGi={dangXemGi}
                          hienVaGiauPhoneMenu={this.hienVaGiauPhoneMenu}/>
                : null
              }
              {(dangXemGi === 'dangXemTruyen') //Nếu đang xem Truyện, xem luôn truyện DOCX, ko cần quan tâm đến truyện PDF 
                ? <Truyen docx_or_pdf={true} kichCuocChuDocx={kichCuocChuDocx} white_or_black={white_or_black} 
                      chieuRongManHinh={chieuRongManHinh+30} tenTruyenTrongDanhBa={tenTruyenTrongDanhBa}       
                      kichCuocChu={kichCuocChu} dangXemGi={dangXemGi} hienVaGiauPhoneMenu={this.hienVaGiauPhoneMenu}/>
                : null
              }
              {(dangXemGi === 'dangXemPhim') //Nếu đang xem Phim
                ? <Phim dangXemGi={dangXemGi} white_or_black={white_or_black} chieuRongManHinh={chieuRongManHinh} 
                      tenPhimTrongDanhBa={tenPhimTrongDanhBa} thuTuPhanDangXem={thuTuPhanDangXem} thuTuTapDangXem={thuTuTapDangXem} 
                      chieuDaiManHinh={chieuDaiManHinh} docx_or_pdf={tatCaTrang} xemPhim={this.xemPhim}
                      hienVaGiauPhoneMenu={this.hienVaGiauPhoneMenu}/>
                : null
              }
              {(dangXemGi === 'dangXemAnh') //Nếu đang xem Ảnh
                ? <Anh chieuRongManHinh={chieuRongManHinh} dangXemGi={dangXemGi} white_or_black={white_or_black} 
                        hienVaGiauPhoneMenu={this.hienVaGiauPhoneMenu} />     
                : null
              }
              
            </div>         
        }
        <br/><br/><br/><br/><br/>
        <ScrollableAnchor id={'denCuoiTrang'}> 
          <div></div> 
        </ScrollableAnchor>
        

        <p style={{fontSize:coChu + "px"}} onMouseOver={() => this.thayDoiChu("Hello")}>{chuHello}</p>
        <Button onClick={() => this.thayDoiChu("xin chào")}>tieng Viet</Button>
        <Button onClick={() => this.thayDoiChu("Hello")}>tieng Anh</Button>
        <Button onClick={() => this.thayDoiChu("привет")}>tieng Nga</Button>
        <br/>
        <Button onClick={this.phongToCoChu}>phong to</Button>
        <Button onClick={this.thuNhoCoChu}>thu nho</Button>

        <p className="tenCuaChu">Hi</p>
        
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