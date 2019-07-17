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
    gray_jedi_revan,
    Anakin_and_Padme_Jedi,
    Obi_Wan_Siri,
    Vader_Luke_Leia,
    skywalkers_family
  ],
  'batman' : [
    batman_arkham_knight_demon,
    Azrael_Batman,
    BatmanFamily,
    batman_the_ages,
    TRINITY
  ],
  'spiderman' : [
    Iron_Spider_Man_suit_by_nanotechnology,
    Spider_Man_Vibranium,
    Scream_x_Spider_man,
    Ultimate_Symbiote,
    VenomPeter_and_ToxinEddie
  ],
  'gantz' : [
    kurono_help_tae, 
    kuronotwo_and_reika, 
    Kurono_X_Tae, 
    Kei_going_dead_in_metro, 
    armor_super_suit
  ],
  'pokemon' : [
    Ash_harem, 
    Ash_evil_Hoopa, 
    Gardevoir_love_Ash, 
    ash_and_misty_team_rocket, 
    ash_aura
  ],
  'evangelion' : [
    anglel_6_wing,
    Unit_01_Adam,
    people_drive_robot,
    angel_red_eye,
    angel    
  ],
  'tron' : [
    tron_and_rinzler_like_brother,
    beck_and_paige_in_the_human_world,
    Tron_back_from_Rinzler_in_water,
    tron_like_rinzler_vs_beck_like_tron_vs_paige,
    Tron_Rinzler
  ],
  'naruto' :[
    team_7_akatsuki,
    naruto_hinata_halo,
    Naruto_Hunter_Nin,
    naruto_sharingan_rinnegan,
    naruto_juubi
  ]
}

const tenAnh = {
  '-1': 'Hãy lựa chọn ảnh',
  '0' : 'Star Wars',
  '1' : 'Batman',        //nếu muốn hiện Batman thì phải viết: tenAnh[‘1’]
  '2' : 'Spider-Man',
  '3' : 'Gantz',
  '4' : 'Pokemoon',
  '5' : 'Evangelion',
  '6' : 'Tron',          //nếu muốn hiện Tron thì phải viết: tenAnh[‘6’]
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

  anhTruoc = () => {
    if(this.state.xemAnhSoNay > 0) {
      this.setState({xemAnhSoNay:this.state.xemAnhSoNay - 1});
    }
    else {
      alert("không có ảnh trước và sẽ quay lại ảnh cuối");
      this.setState({xemAnhSoNay: anhs['starwars'].length-1});
    }
  }

  anhSau = () => {
    if(this.state.xemAnhSoNay < (anhs['starwars'].length - 1)) {
      this.setState({xemAnhSoNay:this.state.xemAnhSoNay + 1});
    }
    else {
      alert("không có ảnh sau và sẽ quay lại ảnh đầu");
      this.setState({xemAnhSoNay:0});
    }
  }

   

// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {dangXemAnhGi, modalOpen, xemAnhSoNay} = this.state;
    var {chieuRongManHinh, dangXemGi, white_or_black, hienVaGiauPhoneMenu } = this.props;
    return (
      <div className="Anh" align='center'>
        <Accordion>
          
          <Accordion.Title active={dangXemAnhGi === 0} index={0} onClick={this.handleClick}>
            <h1 style={{color: white_or_black ? 'red' : 'blue'}}>Star Wars <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 0}>

            {/* Modal là chỗ để hiện ảnh to */ }
            <Modal basic open={modalOpen && (dangXemAnhGi===0)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['starwars'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>
            
            {/* Grid là chỗ để chứa 5 cái Column, mỗi Colum chứa 1 ảnh nhỏ */ }
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['starwars'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['starwars'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>

          </Accordion.Content>

          <Accordion.Title active={dangXemAnhGi === 1} index={1} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Batman <Icon name='dropdown' /></h1>
          </Accordion.Title>

          <Accordion.Content active={dangXemAnhGi === 1}>

            <Modal basic open={modalOpen && (dangXemAnhGi===1)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['batman'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['batman'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['batman'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>

          </Accordion.Content>

          <Accordion.Title active={dangXemAnhGi === 2} index={2} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Spider-Man <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 2}>

            <Modal basic open={modalOpen && (dangXemAnhGi===2)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['spiderman'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['spiderman'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['spiderman'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 3} index={3} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Gantz <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 3}>

            <Modal basic open={modalOpen && (dangXemAnhGi===3)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['gantz'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['gantz'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['gantz'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 4} index={4} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Pokemon <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 4}>

            <Modal basic open={modalOpen && (dangXemAnhGi===4)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['pokemon'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>

            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['pokemon'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['pokemon'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 5} index={5} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Evangelion <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 5}>
            <Modal basic open={modalOpen && (dangXemAnhGi===5)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['evangelion'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>


            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['evangelion'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['evangelion'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>
          
          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 6} index={6} onClick={this.handleClick}>
            <h1 style={{color:  white_or_black ? 'red' : 'blue'}}>Tron <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 6}>
            
            <Modal basic open={modalOpen && (dangXemAnhGi===6)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['tron'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['tron'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['tron'][4]} size='small' onClick={() => this.openBigImage(4)}/>
              </Grid.Column>
            </Grid>

            
            {/* <Grid doubling columns={5}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['tron'][0]} size='small' />} closeIcon>
                  <Image src={anhs['tron'][0]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['tron'][1]} size='small' />} closeIcon>
                  <Image src={anhs['tron'][1]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['tron'][2]} size='small' />} closeIcon>
                  <Image src={anhs['tron'][2]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['tron'][3]} size='small' />} closeIcon>
                  <Image src={anhs['tron'][3] } />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['tron'][4]} size='small' />} closeIcon>
                  <Image src={anhs['tron'][4]} />
                </Modal>
              </Grid.Column>
            </Grid> */}

          </Accordion.Content>
          
          <Accordion.Title active={dangXemAnhGi === 7} index={7} onClick={this.handleClick}>
            <h1 style={{color: white_or_black ? 'red' : 'blue'}}>Naruto <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 7}>

            {/* Modal là chỗ để hiện ảnh to */ }
            <Modal basic open={modalOpen && (dangXemAnhGi===7)} onClose={this.closeModal} closeIcon>
              <Image src={anhs['naruto'][xemAnhSoNay]} />   {/* Ở trong Modal thì hiện Image to này */ }
              <Icon onClick={this.anhTruoc} color='violet' name='angle double left' size='big' style={{position:'fixed', top: '45vh', left: '-35px'}}/>
              <Icon onClick={this.anhSau} color='violet' name='angle double right' size='big' style={{position:'fixed', top: '45vh', right: '-35px'}}/>
            </Modal>
            
            {/* Grid là chỗ để chứa 5 cái Column, mỗi Colum chứa 1 ảnh nhỏ */ }
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Image src={anhs['naruto'][0]} size='small' onClick={() => this.openBigImage(0)}/>
               </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][1]} size='small' onClick={() => this.openBigImage(1)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][2]} size='small' onClick={() => this.openBigImage(2)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][3]} size='small' onClick={() => this.openBigImage(3)}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={anhs['naruto'][4]} size='small' onClick={() => this.openBigImage(4)}/>
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