import React, { Component } from 'react';

import MenuDieuKhien from './MenuDieuKhien';
// PHẦN 1: IMPORT
import { Button, Image, Accordion, Icon, Grid, Modal } from 'semantic-ui-react';

import Iron_Spider_Man_suit_by_nanotechnology from './anh/Iron_Spider-Man_suit_by_nanotechnology.jpg';
import gray_jedi_revan from './anh/Gray_Jedi_Revan.jpg';
import batman_arkham_knight_demon from './anh/Batman_Arkham_Knight_Demon.jpg';

//Danh ba tat ca Anh
const anhs = {
  'ironSpiderMan': Iron_Spider_Man_suit_by_nanotechnology,
  'revan' : gray_jedi_revan,
  'batmanDemon' : batman_arkham_knight_demon
  }

// PHẦN 2: State
class Anh extends Component {
  state = {
    dangXemAnhGi: 0,  //0 nghĩa là Star Wars, 1 là Batman, 2 là Spider-Man
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

// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {dangXemAnhGi} = this.state;
    var {chieuRongManHinh, dangXemGi, white_or_black, hienVaGiauPhoneMenu} = this.props;
    return (
      <div className="Anh">
        <Accordion>
          <Accordion.Title active={dangXemAnhGi === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Star Wars
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 0}>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['revan']} size='small' />} closeIcon>
                  <Image src={anhs['revan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['revan']} size='small' />} closeIcon>
                  <Image src={anhs['revan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['revan']} size='small' />} closeIcon>
                  <Image src={anhs['revan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['revan']} size='small' />} closeIcon>
                  <Image src={anhs['revan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['revan']} size='small' />} closeIcon>
                  <Image src={anhs['revan']} />
                </Modal>
              </Grid.Column>
            </Grid>
          </Accordion.Content>
          <Accordion.Title active={dangXemAnhGi === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Batman
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 1}>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batmanDemon']} size='small' />} closeIcon>
                  <Image src={anhs['batmanDemon']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batmanDemon']} size='small' />} closeIcon>
                  <Image src={anhs['batmanDemon']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batmanDemon']} size='small' />} closeIcon>
                  <Image src={anhs['batmanDemon']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batmanDemon']} size='small' />} closeIcon>
                  <Image src={anhs['batmanDemon']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['batmanDemon']} size='small' />} closeIcon>
                  <Image src={anhs['batmanDemon']} />
                </Modal>
              </Grid.Column>
            </Grid>
          </Accordion.Content>
          <Accordion.Title active={dangXemAnhGi === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Spider-Man
          </Accordion.Title>
          <Accordion.Content active={dangXemAnhGi === 2}>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['ironSpiderMan']} size='small' />} closeIcon>
                  <Image src={anhs['ironSpiderMan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['ironSpiderMan']} size='small' />} closeIcon>
                  <Image src={anhs['ironSpiderMan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['ironSpiderMan']} size='small' />} closeIcon>
                  <Image src={anhs['ironSpiderMan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['ironSpiderMan']} size='small' />} closeIcon>
                  <Image src={anhs['ironSpiderMan']} />
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <Modal basic trigger={<Image src={anhs['ironSpiderMan']} size='small' />} closeIcon>
                  <Image src={anhs['ironSpiderMan']} />
                </Modal>
              </Grid.Column>
            </Grid>
          </Accordion.Content>
        </Accordion>
        <MenuDieuKhien chieuRongManHinh={chieuRongManHinh} dangXemGi={dangXemGi} white_or_black={white_or_black} 
                        hienVaGiauPhoneMenu={hienVaGiauPhoneMenu} />
      </div>
    )
  }
}
export default Anh;