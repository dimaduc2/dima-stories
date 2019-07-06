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
  ]
  'gantz' : [
    kurono_help_tae, 
    kuronotwo_and_reika, 
    Kurono_X_Tae, 
    Kei_going_dead_in_metro, 
    armor_super_suit
  ]
  'pokemon' : [
    Ash_harem, 
    Ash_evil_Hoopa, 
    Gardevoir_love_Ash, 
    ash_and_misty_team_rocket, 
    ash_aura
  ]
}


// PHẦN 2: State
class Anh extends Component {
  state = {
    dangXemAnhGi: -1,  //0 nghĩa là Star Wars, 1 là Batman, 2 là Spider-Man
    anhSpiderMan: false,
    anhStarWars_or_Batman: false,
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

// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {dangXemAnhGi} = this.state;
    var {chieuRongManHinh, dangXemGi, white_or_black, hienVaGiauPhoneMenu} = this.props;
    return (
      <div className="Anh" align='center'>
        <Accordion>
          
          <Accordion.Title active={dangXemAnhGi === 0} index={0} onClick={this.handleClick}>
            
            <h1>Star Wars <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 0}>
            <Grid doubling columns={5} style={{margin:'10px', padding:'0'}}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['starwars'][0]} size='small' />} closeIcon>
                  <Image src={anhs['starwars'][0]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['starwars'][1]} size='small' />} closeIcon>
                  <Image src={anhs['starwars'][1]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['starwars'][2]} size='small' />} closeIcon>
                  <Image src={anhs['starwars'][2]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['starwars'][3]} size='small' />} closeIcon>
                  <Image src={anhs['starwars'][3] } />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['starwars'][4]} size='small' />} closeIcon>
                  <Image src={anhs['starwars'][4]} />
                </Modal>
              </Grid.Column>
            </Grid>
          </Accordion.Content>

          <Accordion.Title active={dangXemAnhGi === 1} index={1} onClick={this.handleClick}>
            
            <h1>Batman <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 1}>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batman'][0]} size='small' />} closeIcon>
                  <Image src={anhs['batman'][0]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batman'][1]} size='small' />} closeIcon>
                  <Image src={anhs['batman'][1]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batman'][2]} size='small' />} closeIcon>
                  <Image src={anhs['batman'][2]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batman'][3]} size='small' />} closeIcon>
                  <Image src={anhs['batman'][3] } />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batman'][4]} size='small' />} closeIcon>
                  <Image src={anhs['batman'][4]} />
                </Modal>
              </Grid.Column>
            </Grid>
          </Accordion.Content>

          <Accordion.Title active={dangXemAnhGi === 2} index={2} onClick={this.handleClick}>
            
            <h1>Spider-Man <Icon name='dropdown' /></h1>
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 2}>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['spiderman'][0]} size='small' />} closeIcon>
                  <Image src={anhs['spiderman'][0]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['spiderman'][1]} size='small' />} closeIcon>
                  <Image src={anhs['spiderman'][1]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['spiderman'][2]} size='small' />} closeIcon>
                  <Image src={anhs['spiderman'][2]} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['spiderman'][3]} size='small' />} closeIcon>
                  <Image src={anhs['spiderman'][3] } />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['spiderman'][4]} size='small' />} closeIcon>
                  <Image src={anhs['spiderman'][4]} />
                </Modal>
              </Grid.Column>
            </Grid>
          </Accordion.Content>

        </Accordion>
        <MenuDieuKhien chieuRongManHinh={chieuRongManHinh} dangXemGi={dangXemGi} white_or_black={white_or_black} 
                        hienVaGiauPhoneMenu={hienVaGiauPhoneMenu} dangXemAnhGi={dangXemAnhGi} thanhDieuKhienAnh={this.thanhDieuKhienAnh}/>
      </div>
    )
  }
}
export default Anh;