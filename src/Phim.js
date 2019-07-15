import React, { Component } from 'react';

// PHẦN 1: IMPORT
import Iframe from 'react-iframe';

import MenuDieuKhien from './MenuDieuKhien'

//Danh ba tat ca Phim
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
                      ten: "Overlord SS1 EP1",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347422858'
                    },
                    {
                      ten: "Overlord SS1 EP2",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347422975'
                    },
                    {
                      ten: "Overlord SS1 EP3",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347423061'
                    },
                    {
                      ten: "Overlord SS1 EP4",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347424555'
                    },
                    {
                      ten: "Overlord SS1 EP5",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347424622'
                    },
                    {
                      ten: "Overlord SS1 EP6",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347424709'
                    },
                    {
                      ten: "Overlord SS1 EP7",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347426005'
                    },
                    {
                      ten: "Overlord SS1 EP8",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347426219'
                    },
                    {
                      ten: "Overlord SS1 EP9",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347426101'
                    },
                    {
                      ten: "Overlord SS1 EP10",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347432427'
                    },
                    {
                      ten: "Overlord SS1 EP11",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347432520'
                    },
                    {
                      ten: "Overlord SS1 EP12",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347432624'
                    },
                    {
                      ten: "Overlord SS1 EP13",
                      phan: 1,
                      diaChi: 'https://player.vimeo.com/video/347432624'
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
                      diaChi: 'https://player.vimeo.com/video/321032417'
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
class Phim extends Component {
  state = {
    arrayTatCaTap: [],
  }

// PHẦN 3: Function

componentDidMount() {
    var arrayTap = [];
    var tongSoTap = danhBaPhim[this.props.tenPhimTrongDanhBa][this.props.thuTuPhanDangXem].length;
    var i;
    for (i = 1; i <= tongSoTap; i++) {
      arrayTap.push({key:i, text: i + " / " + tongSoTap, value:i});
    }
    this.setState({arrayTatCaTap: arrayTap});
  
}

componentDidUpdate(prevProps) {
  if ((this.props.tenPhimTrongDanhBa !== prevProps.tenPhimTrongDanhBa) || (this.props.thuTuPhanDangXem !== prevProps.thuTuPhanDangXem)) {
    var arrayTap = [];
    var tongSoTap = danhBaPhim[this.props.tenPhimTrongDanhBa][this.props.thuTuPhanDangXem].length;
    var i;
    for (i = 1; i <= tongSoTap; i++) {
      arrayTap.push({key:i, text: i + " / " + tongSoTap, value:i});
    }
    this.setState({arrayTatCaTap: arrayTap});
  
  }
}

xemTapSau = () => {
  
  if((this.props.thuTuTapDangXem + 1) < danhBaPhim['overlord'][this.props.thuTuPhanDangXem].length){
    //Dima bảo máy tính: hãy xemPhim tênDanhBạ này 'overlord' (hãy xem phim này)
    //                               thứTựPhần này: this.state.thuTuPhanDangXem (vẫn xem phần này). 
    //                               thứTựTập này: this.state.thuTuTapDangXem (tập đang xem) + 1 = (hãy xem tập sau). 
    this.props.xemPhim('overlord', this.props.thuTuPhanDangXem, this.props.thuTuTapDangXem + 1);
    
  }
  else if((this.props.thuTuPhanDangXem + 1) < danhBaPhim['overlord'].length){
    
    //Dima bảo máy tính: hãy xemPhim tênDanhBạ 'overlord' (hãy xem phim này)
    //                               thứTựPhần this.state.thuTuPhanDangXem (phần đang xem) + 1 (hãy xem phần sau)
    //                               thứTựTập 0 (xem tập từ đầu)
    this.props.xemPhim('overlord', this.props.thuTuPhanDangXem + 1, 0);
  }
  else {
    alert("hết phim")
  }
}

xemTapTruoc = () => {

    if(this.props.thuTuTapDangXem > 0){
      this.props.xemPhim('overlord', this.props.thuTuPhanDangXem, this.props.thuTuTapDangXem -1);
    }
    else if(this.props.thuTuPhanDangXem > 0){
      
    //Dima bảo máy tính: hãy xemPhim tênDanhBạ 'overlord' (hãy xem phim này)
    //                               thứTựPhần this.state.thuTuPhanDangXem (phần đang xem) - 1 (hãy xem phần trước)
    //                               thứTựTập 12 (xem tập 13)
      this.props.xemPhim('overlord', this.props.thuTuPhanDangXem - 1, danhBaPhim['overlord'][this.props.thuTuPhanDangXem-1].length-1);
    }
    else {
      alert("Đây là tập đầu tiên và Ko có tập trước")
    }
  
}

xemTapKhac = (e,{value}) => {
  //Dima goi hanh dong xemPhim
  //Dima muon xem tap value
  this.props.xemPhim(this.props.tenPhimTrongDanhBa, this.props.thuTuPhanDangXem, value-1);
}




// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {arrayTatCaTap} = this.state;
    var {white_or_black, chieuRongManHinh, tenPhimTrongDanhBa, thuTuPhanDangXem, thuTuTapDangXem, chieuDaiManHinh, dangXemGi, 
          docx_or_pdf, xemPhim, hienVaGiauPhoneMenu } = this.props;
    return (
      <div className="phim-may-tinh">
        <h1 style={{color:(white_or_black ? 'white' : 'black')}}>{tenPhimTrongDanhBa} - [{thuTuPhanDangXem}] [{thuTuTapDangXem}]</h1>
        <Iframe url={danhBaPhim[tenPhimTrongDanhBa][thuTuPhanDangXem][thuTuTapDangXem].diaChi} /*  bước 2  */
        width={(chieuRongManHinh-30)+"px"}
        height={(chieuDaiManHinh-200)+"px"}
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen />
        <MenuDieuKhien white_or_black={white_or_black} dangXemGi={dangXemGi} chieuRongManHinh={chieuRongManHinh} 
                       docx_or_pdf={docx_or_pdf} arrayTatCaTap={arrayTatCaTap} xemPhim={xemPhim} danhBaPhim={danhBaPhim}
                       tenPhimTrongDanhBa={tenPhimTrongDanhBa} thuTuPhanDangXem={thuTuPhanDangXem} thuTuTapDangXem={thuTuTapDangXem}
                       arrayTatCa={arrayTatCaTap} xemTruoc={this.xemTapTruoc} xemSau={this.xemTapSau} xemKhac={this.xemTapKhac}
                       hienVaGiauPhoneMenu={hienVaGiauPhoneMenu}/>

      </div>
    )
  }
}
export default Phim;