import React, { Component } from 'react';

import MenuDieuKhien from './MenuDieuKhien';
// PHẦN 1: IMPORT
import { Button, Image, Accordion, Icon, Grid, Modal, Label } from 'semantic-ui-react';

import gray_jedi_revan from './anh/Gray_Jedi_Revan.jpg';
import Anakin_and_Padme_Jedi from './anh/Anakin_and_Padme_Jedi_s_Star_Wars_revenge_of_the_Sith.jpg';
import Obi_Wan_Siri from './anh/Obi-Wan_vs_Siri_(Padawan).png';
import Vader_Luke_Leia from './anh/Recovery_(Darth_Vader_vs_Luke_vs_Leia).png';
import skywalkers_family from './anh/skywalkers_s_family.jpg';

import batman_arkham_knight_demon from './anh/Batman_Arkham_Knight_Demon.jpg';
import Azrael_Batman from './anh/Azrael_as_Batman.jpg';
import BatmanFamily from './anh/Batman_Family.jpg';
import batman_the_ages from './anh/batman_of_the_ages.jpg';
import TRINITY from './anh/Batman_vs_Superman_vs_Wonder_Women.jpg';

import Iron_Spider_Man_suit_by_nanotechnology from './anh/Iron_Spider-Man_suit_by_nanotechnology.jpg';
import Spider_Man_Vibranium from './anh/Spider-Man Homecoming suit + Vibranium suit for Black Panther.jpg';
import Scream_x_Spider_man from './anh/Scream_love_Spider_man.jpg';
import Ultimate_Symbiote from './anh/Spiderman_Ultimate_Symbiote_(Spider_Man_have Venom_and_) Carnage.jpg';
import VenomPeter_and_ToxinEddie from './anh/venom__peter_parker__vs_toxin__eddie_brock.jpg';

import kurono_help_tae from './anh/gantz_collab_(kurono_help_tae).jpg';
import kuronotwo_and_reika from './anh/kuronotwo_y_reika.jpg';
import Kurono_X_Tae from './anh/KuronoXTae.jpg';
import Kei_going_dead_in_metro from './anh/Gantz_-_Kei_[Version_1].png';
import armor_super_suit from './anh/gantz__oka_super_suitw.jpg';

import Ash_harem from './anh/Ash_s_harem.png';
import Ash_evil_Hoopa from './anh/What_if_Ash_became_evil_in_Pokemon_Hoopa_movie.jpg';
import Gardevoir_love_Ash from './anh/Recovershipping_-_AshGardevoir.jpg';
import ash_and_misty_team_rocket from './anh/aaml_goes_team_rocket.jpg';
import ash_aura from './anh/ash_aura_awake.jpg';

import anglel_6_wing from './anh/Angelic_Being.jpg';
import Unit_01_Adam from './anh/Evangelion_Unit_01_crazy_red_2.jpg';
import people_drive_robot from './anh/EVAxP3.jpg';
import angel_red_eye from './anh/Lilith_Crazy_Red.jpg';
import angel from './anh/Redemption.jpg';

import tron_and_rinzler_like_brother from './anh/Grid_Protector_and_Enforcer.jpg';
import beck_and_paige_in_the_human_world from './anh/The_Cut_Short_Cafe.jpg';
import Tron_back_from_Rinzler_in_water from './anh/Tron_-_System_Restarting.png';
import tron_like_rinzler_vs_beck_like_tron_vs_paige from './anh/TRON_Revolt.jpg';
import Tron_Rinzler from './anh/Tron_Rinzler.jpg';

import team_7_akatsuki from './anh/2000_hits.jpg';
import naruto_hinata_halo from './anh/birthday__ponner89_nh_halo.jpg';
import Naruto_Hunter_Nin from './anh/Hunter_Nin.jpg';
import naruto_sharingan_rinnegan from './anh/naruto___the_true_sage_of_six_paths__fanart.jpg';
import naruto_juubi from './anh/naruto_eyes__body_and_chakra_of_the_juubi.jpg';

//Danh ba tat ca Anh
const anhs = {
  'starwars' : [
    {
      anh: gray_jedi_revan,
      ten: 'Darth Revan', 
    },
    {
      anh: Anakin_and_Padme_Jedi,
      ten: 'Anakin & Padme Jedi',
    },
    {
      anh: Obi_Wan_Siri,
      ten: 'Obi-Wan wite lightsaber blue and Siri wite lightsaber purple',
    },
    {
      anh: Vader_Luke_Leia,
      ten: 'Darth Vader help Luke and Leia out danger',
    },
    {
      anh: skywalkers_family,
      ten: 'Anakin family (Anakin and padme sit look leia play Ahsoka and Obi-Wan let Luke see force let toy fly)',
    },
  ],
  'batman' : [
    {
      anh: batman_arkham_knight_demon,
      ten: 'Batman Arkham Knight Demon',
    },
    {
      anh: Azrael_Batman,
      ten: 'Azrael Batman future',
    },
    {
      anh: BatmanFamily,
      ten: 'Batman Family',
    },
    {
      anh: batman_the_ages,
      ten: 'Batman the Ages',
    },
    {
      anh: TRINITY,
      ten: 'TRINITY (Superman & Wonder Woman & Batman)',
    },
  ],
  'spiderman' : [
    {
      anh: Iron_Spider_Man_suit_by_nanotechnology,
      ten: 'Iron Spider-Man suit by Nanotechnology',
    },
    {
      anh: Spider_Man_Vibranium,
      ten: 'Spider-Man Vibranium',
    },
    {
      anh: Scream_x_Spider_man,
      ten: 'Scream love Spider-Man',
    },
    {
      anh: Ultimate_Symbiote,
      ten: 'Ultimate Symbiote (Spoder-Man have 2 Symbiote is Venom and Carnage)',
    },
    {
      anh: VenomPeter_and_ToxinEddie,
      ten: 'Venom (Peter) and Toxin (Eddie) fighting',
    },
  ],
  'gantz' : [
    {
      anh: kurono_help_tae,
      ten: 'Kurono help Tae with gun',
    },
    {
      anh: kuronotwo_and_reika,
      ten: 'kuronotwo and reika in love',
    },
    {
      anh: Kurono_X_Tae,
      ten: 'Kurono help Tae with swork',
    },
    {
      anh: Kei_going_dead_in_metro,
      ten: 'Kei going dead in metro (Gant in Anime ep26)',
    },
    {
      anh: armor_super_suit,
      ten: 'Gantz armor',
    },
  ],
  'pokemon' : [
    {
      anh: Ash_harem,
      ten: 'Ash harem',
    },
    {
      anh: Ash_evil_Hoopa,
      ten: 'Ash evil Hoopa (Dark Hoopa in Ash body)',
    },
    {
      anh: Gardevoir_love_Ash,
      ten: 'Ash Vampire kill hypno perfect and Gardevoir love Ash',
    },
    {
      anh: ash_and_misty_team_rocket,
      ten: 'Ash and Misty is Team Rocket',
    },
    {
      anh: ash_aura,
      ten: 'Ash aura awake',
    },
  ],
  'evangelion' : [
    {
      anh: anglel_6_wing,
      ten: 'Anglel 6 wing',
    },
    {
      anh: Unit_01_Adam,
      ten: 'Mark 01 Adam (wing in movie Neon Genesis Evangelion: The End of Evangelion (1997) + red eye and red ring in head in movie Evangelion: 2.0 You Can (Not) Advance))',
    },
    {
      anh: people_drive_robot,
      ten: 'people drive robot (06 (04) vs 03 vs 01 vs 00 vs 02 vs 05)',
    },
    {
      anh: angel_red_eye,
      ten: 'Angel red eye',
    },
    {
      anh: angel  ,
      ten: 'Angel (Evangelion)',
    },  
  ],
  'tron' : [
    {
      anh: tron_and_rinzler_like_brother,
      ten: 'Tron and Rinzler like brother',
    },
    {
      anh: beck_and_paige_in_the_human_world,
      ten: 'Beck and Paige in the human world',
    },
    {
      anh: Tron_back_from_Rinzler_in_water,
      ten: 'Tron back from Rinzler dead in water',
    },
    {
      anh: tron_like_rinzler_vs_beck_like_tron_vs_paige,
      ten: 'Tron like Rinzler Iso vs Beck like Tron vs Paige kill Firewall',
    },
    {
      anh: Tron_Rinzler,
      ten: 'Tron Rinzler',
    },
  ],
  'naruto' :[
    {
      anh: team_7_akatsuki,
      ten: 'Team 7 Akatsuki',
    },
    {
      anh: naruto_hinata_halo,
      ten: 'Naruto & Hinata Halo',
    },
    {
      anh: Naruto_Hunter_Nin,
      ten: 'Naruto Hunter Nin (when Naruto banished by Konoha)',
    },
    {
      anh: naruto_sharingan_rinnegan,
      ten: 'Naruto Bijuu Sharingan Rinnegan',
    },
    {
      anh: naruto_juubi,
      ten: 'EYES, BODY AND CHAKRA OF THE JUUBI',
    },
  ]
}

const tenAnh = { //Đây là Object
  '-1': 'Hãy lựa chọn ảnh',
  '0' : 'Star Wars',
  '1' : 'Batman',        //nếu muốn hiện Batman thì phải viết: tenAnh[‘1’]
  '2' : 'Spider-Man',
  '3' : 'Gantz',
  '4' : 'Pokemoon',
  '5' : 'Evangelion',
  '6' : 'Tron',          //nếu muốn hiện Tron thì phải viết: tenAnh[‘6’]
  '7' :  'Naruto',
}

const thongtinNguoi = [ 
                        {ten: 'Dima', diachi: 'Ha Noi'},
                        {ten: 'Darth Revan', diachi: 'Coruscant'},
                        {ten: 'Anakin', diachi: 'Tatooine'},
                        {ten: 'Padme', diachi: 'Naboo'},
                        {ten: 'Luke', diachi: 'Tatooine'},
                        {ten: 'Darth Vader', diachi: 'Kamino'},
                        {ten: 'Leia', diachi: 'Alderaan'}
                      ]

// PHẦN 2: State
class Anh extends Component {
  state = {
    dangXemAnhGi: -1,  //0 nghĩa là Star Wars, 1 là Batman, 2 là Spider-Man
    modalOpen: false,
    xemAnhSoNay: 0,
  }

// PHẦN 3: Function
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { dangXemAnhGi } = this.state
    const newIndex = dangXemAnhGi === index ? -1 : index

    this.setState({ dangXemAnhGi: newIndex })
  }

  thanhDieuKhienAnh = (e) => {
    this.setState({ dangXemAnhGi: Number(e.target.value) });
  }

  openBigImage = (so) => {
    this.setState({ modalOpen : true });
    this.setState({xemAnhSoNay: so})
  }

  closeModal = () => {
    this.setState({ modalOpen : false });
  }

  xemAnhTruoc = () => {
    if(this.state.xemAnhSoNay > 0) {
      this.setState({xemAnhSoNay:this.state.xemAnhSoNay - 1});
    }
    else {
      alert("không có ảnh trước và sẽ quay lại ảnh cuối");
      this.setState({xemAnhSoNay: anhs['starwars'].length-1});
    }
  }
  xemAnhSau = () => {
    if(this.state.xemAnhSoNay < (anhs['starwars'].length - 1)) {
      this.setState({xemAnhSoNay:this.state.xemAnhSoNay + 1});
    }
    else {
      alert("không có ảnh sau và sẽ quay lại ảnh đầu");
      this.setState({xemAnhSoNay:0});
    }
  }

  xemCacAnhTren = () => {
    if (this.state.dangXemAnhGi > 0) {
      this.setState({dangXemAnhGi:this.state.dangXemAnhGi - 1})
    }
    else {
      alert("không có ảnh trên và sẽ quay lại ảnh dưới");
      this.setState({dangXemAnhGi:Object.keys(tenAnh).length - 2});
    }
  }
  
  xemCacAnhDuoi = () => {
    if (this.state.dangXemAnhGi < (Object.keys(tenAnh).length - 2)) {
      this.setState({dangXemAnhGi:this.state.dangXemAnhGi + 1})
    }  
    else {
      alert("không có ảnh dưới và sẽ quay lại ảnh trên");
      this.setState({dangXemAnhGi:0});
    }
  }

  bamBanPhim = (event) => {
    if(this.state.modalOpen) {
    //nếu modelOpen===true, thì nghĩa là Ảnh to đang mở
    //bây giờ hãy chuyển xem anh sau hoặc xem ảnh trước
      if (event.key === 'ArrowLeft'){
        this.xemAnhTruoc();
      }
      else if (event.key === 'ArrowRight'){
        this.xemAnhSau();
      }
    }

    else {
      //nếu modelOpen===false, thì nghĩa là Ảnh to đang không mở
      //bây giờ hãy chuyển xem anh sau hoặc xem ảnh trước
      if (event.key === 'ArrowUp'){
        this.xemCacAnhTren();
      }
      else if (event.key === 'ArrowDown'){
        this.xemCacAnhDuoi();
      }
    }

    
  }

// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {dangXemAnhGi, modalOpen, xemAnhSoNay} = this.state;
    var {chieuRongManHinh, dangXemGi, white_or_black, hienVaGiauPhoneMenu } = this.props;
    return (
      <div className="Anh" align='center' onKeyUp={this.bamBanPhim} tabIndex="0" style={{color: white_or_black ? 'red' : 'blue'}}>
        <Accordion>
          
          {
            Object.keys(anhs).map((ten, index) => 
              <div>
                <Accordion.Title active={dangXemAnhGi === index} index={index} onClick={this.handleClick}>
                  <Label size='huge' color={white_or_black ? 'red' : 'blue'}>
                    {tenAnh[index]} <Icon name='dropdown' />
                  </Label>
                </Accordion.Title>
                <Accordion.Content active={dangXemAnhGi === index}>
                  {/* Modal là chỗ để hiện ảnh to */ }
                  <Modal basic open={modalOpen && (dangXemAnhGi === index)} onClose={this.closeModal} closeIcon>
                    <Image src={anhs[ten][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
                    <Icon onClick={this.xemAnhTruoc} circular inverted name='angle double left' size='big' 
                          style={{position:'fixed', top: '45vh', left: (chieuRongManHinh > 900) ? '-35px' : '0px'}}/>
                    <Icon onClick={this.xemAnhSau} circular inverted name='angle double right' size='big' 
                          style={{position:'fixed', top: '45vh', right: (chieuRongManHinh > 900) ? '-35px' : '0px'}}/>
                  </Modal>
                  {/* Grid là chỗ để chứa 5 cái Column, mỗi Colum chứa 1 ảnh nhỏ */ }
                  <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
                    { anhs[ten].map((moiAnh, index) => 
                          <Grid.Column> 
                            <Image src={moiAnh.anh} size='small' 
                              onClick={() => this.openBigImage(index)}/>
                            <p>{moiAnh.ten}</p> 
                          </Grid.Column>
                        )
                    }
                  </Grid>
                </Accordion.Content>
              </div>
            )
          }
          
        </Accordion>

              {
                thongtinNguoi.map( (person, index) => 
                  <div>
                    Người thứ <i>{index}</i> tên là <b>{person.ten}</b> và sống ở <b>{person.diachi}</b> 

                  </div>
                )
              }

        <MenuDieuKhien chieuRongManHinh={chieuRongManHinh} dangXemGi={dangXemGi} white_or_black={white_or_black} 
                        hienVaGiauPhoneMenu={hienVaGiauPhoneMenu} dangXemAnhGi={dangXemAnhGi} 
                        thanhDieuKhienAnh={this.thanhDieuKhienAnh} tenAnh={tenAnh}/>
      </div>
    )
  }
}
export default Anh;