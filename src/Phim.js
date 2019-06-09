import React, { Component } from 'react';

// PHẦN 1: IMPORT
import Iframe from 'react-iframe';



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
class Phim extends Component {
  state = {

  }

// PHẦN 3: Function


// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {} = this.state;
    var {white_or_black, chieuRongManHinh, tenPhim, phimDangxem, thuTuPhanDangXem, thuTuTapDangXem, diachiPhim, chieuDaiManHinh} = this.props;
    return (
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
    )
  }
}
export default Phim;