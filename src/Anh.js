import React, { Component } from 'react';

import MenuDieuKhien from './MenuDieuKhien';
// PHẦN 1: IMPORT
import { Button, Image, Accordion, Icon, Grid, Modal } from 'semantic-ui-react';

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
      ten: '',
    },
    {
      anh: Vader_Luke_Leia,
      ten: '',
    },
    {
      anh: skywalkers_family,
      ten: '',
    },
  ],
  'batman' : [
    {
      anh: batman_arkham_knight_demon,
      ten: '',
    },
    {
      anh: Azrael_Batman,
      ten: '',
    },
    {
      anh: BatmanFamily,
      ten: '',
    },
    {
      anh: batman_the_ages,
      ten: '',
    },
    {
      anh: TRINITY,
      ten: '',
    },
  ],
  'spiderman' : [
    {
      anh: Iron_Spider_Man_suit_by_nanotechnology,
      ten: '',
    },
    {
      anh: Spider_Man_Vibranium,
      ten: '',
    },
    {
      anh: Scream_x_Spider_man,
      ten: '',
    },
    {
      anh: Ultimate_Symbiote,
      ten: '',
    },
    {
      anh: VenomPeter_and_ToxinEddie,
      ten: '',
    },
  ],
  'gantz' : [
    {
      anh: kurono_help_tae,
      ten: '',
    },
    {
      anh: kuronotwo_and_reika,
      ten: '',
    },
    {
      anh: Kurono_X_Tae,
      ten: '',
    },
    {
      anh: Kei_going_dead_in_metro,
      ten: '',
    },
    {
      anh: armor_super_suit,
      ten: '',
    },
  ],
  'pokemon' : [
    {
      anh: Ash_harem,
      ten: '',
    },
    {
      anh: Ash_evil_Hoopa,
      ten: '',
    },
    {
      anh: Gardevoir_love_Ash,
      ten: '',
    },
    {
      anh: ash_and_misty_team_rocket, 
      ten: '',
    },
    {
      anh: ash_aura,
      ten: '',
    },
  ],
  'evangelion' : [
    {
      anh: anglel_6_wing,
      ten: '',
    },
    {
      anh: Unit_01_Adam,
      ten: '',
    },
    {
      anh: people_drive_robot,
      ten: '',
    },
    {
      anh: angel_red_eye,
      ten: '',
    },
    {
      anh: angel  ,
      ten: '',
    },  
  ],
  'tron' : [
    {
      anh: tron_and_rinzler_like_brother,
      ten: '',
    },
    {
      anh: beck_and_paige_in_the_human_world,
      ten: '',
    },
    {
      anh: Tron_back_from_Rinzler_in_water,
      ten: '',
    },
    {
      anh: tron_like_rinzler_vs_beck_like_tron_vs_paige,
      ten: '',
    },
    {
      anh: Tron_Rinzler,
      ten: '',
    },
  ],
  'naruto' :[
    {
      anh: team_7_akatsuki,
      ten: '',
    },
    {
      anh: naruto_hinata_halo,
      ten: '',
    },
    {
      anh: Naruto_Hunter_Nin,
      ten: '',
    },
    {
      anh: naruto_sharingan_rinnegan,
      ten: '',
    },
    {
      anh: naruto_juubi,
      ten: '',
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
      <div className="Anh" align='center' onKeyUp={this.bamBanPhim} tabIndex="0">
        <Accordion>
          
          <Accordion.Title active={dangXemAnhGi === 0} index={0} onClick={this.handleClick}>
            <h1 style={{color: white_or_black ? 'red' : 'blue'}}>Star Wars <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 0}>

            {/* Modal là chỗ để hiện ảnh to */ }
            <Modal basic open={modalOpen && (dangXemAnhGi===0)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['starwars'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>
            
            {/* Grid là chỗ để chứa 5 cái Column, mỗi Colum chứa 1 ảnh nhỏ */ }
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['starwars'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['starwars'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['starwars'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['starwars'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['starwars'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['starwars'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>

          <Accordion.Title active={dangXemAnhGi === 1} index={1} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Batman <Icon name='dropdown' /></h1>
          </Accordion.Title>

          <Accordion.Content active={dangXemAnhGi === 1}>

            <Modal basic open={modalOpen && (dangXemAnhGi===1)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['batman'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' 
                    style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' 
                    style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['batman'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['batman'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['batman'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['batman'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['batman'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['batman'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>

          <Accordion.Title active={dangXemAnhGi === 2} index={2} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Spider-Man <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 2}>

            <Modal basic open={modalOpen && (dangXemAnhGi===2)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['spiderman'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['spiderman'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['spiderman'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['spiderman'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['spiderman'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['spiderman'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['spiderman'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 3} index={3} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Gantz <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 3}>

            <Modal basic open={modalOpen && (dangXemAnhGi===3)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['gantz'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['gantz'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['gantz'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['gantz'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['gantz'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['gantz'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['gantz'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 4} index={4} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Pokemon <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 4}>

            <Modal basic open={modalOpen && (dangXemAnhGi===4)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['pokemon'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['pokemon'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['pokemon'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['pokemon'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['pokemon'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['pokemon'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['pokemon'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 5} index={5} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Evangelion <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 5}>
            <Modal basic open={modalOpen && (dangXemAnhGi===5)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['evangelion'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>


            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['evangelion'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['evangelion'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['evangelion'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['evangelion'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['evangelion'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['evangelion'][4].ten}</p>
              </Grid.Column>
            </Grid>
          
          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 6} index={6} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Tron <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 6}>
            
            <Modal basic open={modalOpen && (dangXemAnhGi===6)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['tron'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['tron'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['tron'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['tron'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['tron'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['tron'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['tron'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 7} index={7} onClick={this.handleClick}>
            <h1 style={{color: white_or_black ? 'red' : 'blue'}}>Naruto <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 7}>

            {/* Modal là chỗ để hiện ảnh to */ }
            <Modal basic open={modalOpen && (dangXemAnhGi===7)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['naruto'][xemAnhSoNay].anh} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.xemAnhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.xemAnhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>
            
            {/* Grid là chỗ để chứa 5 cái Column, mỗi Colum chứa 1 ảnh nhỏ */ }
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['naruto'][0].anh} size='small' onClick={() => this.openBigImage(0)}/>
                <p>{anhs['naruto'][0].ten}</p>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][1].anh} size='small' onClick={() => this.openBigImage(1)}/>
                <p>{anhs['naruto'][1].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][2].anh} size='small' onClick={() => this.openBigImage(2)}/>
                <p>{anhs['naruto'][2].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][3].anh} size='small' onClick={() => this.openBigImage(3)}/>
                <p>{anhs['naruto'][3].ten}</p>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][4].anh} size='small' onClick={() => this.openBigImage(4)}/>
                <p>{anhs['naruto'][4].ten}</p>
              </Grid.Column>
            </Grid>

          </Accordion.Content>

        </Accordion>
        <MenuDieuKhien chieuRongManHinh={chieuRongManHinh} dangXemGi={dangXemGi} white_or_black={white_or_black} 
                        hienVaGiauPhoneMenu={hienVaGiauPhoneMenu} dangXemAnhGi={dangXemAnhGi} 
                        thanhDieuKhienAnh={this.thanhDieuKhienAnh} tenAnh={tenAnh}/>
      </div>
    )
  }
}
export default Anh;