import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Image, Menu, Dropdown, Checkbox } from 'semantic-ui-react';

import logo_star_wars from './anh/Gray_Jedi_(Jedi_&_Sith)_symbol.png';
import logo_overlord from './anh/overlord_symbol.png';

import './MenuDienThoai.css';

// PHẦN 2: State
class MenuDienThoai extends Component {
  state = {

  }

// PHẦN 3: Function
docTruyen = () => {
  alert('xin chao')
}

// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {} = this.state;
    var {dangXemGi, white_or_black, docTruyen, xemPhim, bamHome, hienMenu, doimau, thayDoiCoChudocx, 
          bamAnh, hienVaGiauPhoneMenu} = this.props;
    return (
      
      <div>
        <Menu vertical fixed='top' inverted className = {hienMenu ? "menu-hien-ra" : "menu-dau-di"} >
          <Menu.Item as='a' onClick={bamHome}>
            <Image src={logo_star_wars} size='mini' style={{display:'block', marginLeft: 'auto', marginRight:'auto'}}/> 
            Dima Stories
          </Menu.Item>

          <Menu.Item>
            <Dropdown floating text='Truyện Tranh'>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => docTruyen('Evangelion')}>EVANGELION</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('GANTZ')}>GANTZ</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => docTruyen('Backtothefuture')}>Back to the future</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('ChangingtheFuture')}>Changing the Future</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Dropdown floating text='Darth Vader from the past'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => docTruyen('DarthVaderRebirth')}>Darth Vader Rebirth</Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('DarthVaderHeroofNaboo')}>Darth Vader Hero of Naboo</Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('ASithsSecondChance')}>A Siths Second Chance</Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('MaceWindusalternateself')}>Mace Windu's alternate self</Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('OperationPreventingVader')}>Operation Preventing Vader</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown floating text='VFSNAKE'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => docTruyen('Innocent')}>Innocent</Dropdown.Item>
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
                
                <Dropdown.Item>
                  <Image src={logo_overlord} avatar/>
                  <Dropdown floating text='Overlord Ss 1'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 0) }>Overlord Ss1 ep 1</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 1) }>Overlord Ss1 ep 2</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 2) }>Overlord Ss1 ep 3</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 3) }>Overlord Ss1 ep 4</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 4) }>Overlord Ss1 ep 5</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 5) }>Overlord Ss1 ep 6</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 6) }>Overlord Ss1 ep 7</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 7) }>Overlord Ss1 ep 8</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 8) }>Overlord Ss1 ep 9</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 9) }>Overlord Ss1 ep 10</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 10) }>Overlord Ss1 ep 11</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 11) }>Overlord Ss1 ep 12</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 12) }>Overlord Ss1 ep 13</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <Dropdown floating text='Overlord Ss 2'>
                    <Dropdown.Menu> */}

                </Dropdown.Item>

                <Dropdown.Item>
                  <Image src={logo_overlord} avatar/>
                  <Dropdown floating text='Overlord Ss 2'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 0) }>Overlord Ss2 ep 1</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 1) }>Overlord Ss2 ep 2</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 2) }>Overlord Ss2 ep 3</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 3) }>Overlord Ss2 ep 4</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 4) }>Overlord Ss2 ep 5</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 5) }>Overlord Ss2 ep 6</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 6) }>Overlord Ss2 ep 7</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 7) }>Overlord Ss2 ep 8</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 8) }>Overlord Ss2 ep 9</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 9) }>Overlord Ss2 ep 10</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 10) }>Overlord Ss2 ep 11</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 11) }>Overlord Ss2 ep 12</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 1, 12) }>Overlord Ss2 ep 13</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Image src={logo_overlord} avatar/>
                  <Dropdown floating text='Overlord Ss 3'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 0) }>Overlord Ss3 ep 1</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 1) }>Overlord Ss3 ep 2</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 2) }>Overlord Ss3 ep 3</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 3) }>Overlord Ss3 ep 4</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 4) }>Overlord Ss3 ep 5</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 5) }>Overlord Ss3 ep 6</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 6) }>Overlord Ss3 ep 7</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 7) }>Overlord Ss3 ep 8</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 8) }>Overlord Ss3 ep 9</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 9) }>Overlord Ss3 ep 10</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 10) }>Overlord Ss3 ep 11</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 11) }>Overlord Ss3 ep 12</Dropdown.Item>
                      <Dropdown.Item onClick={ () => xemPhim('overlord', 2, 12) }>Overlord Ss3 ep 13</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={ () => xemPhim('starwars', 0, 0) }><Image src={logo_star_wars} avatar/> Star Wars Clone Wars 2003 Full</Dropdown.Item>
                <Dropdown.Item onClick={ () => xemPhim('starwars', 1, 0) }><Image src={logo_star_wars} avatar/> Revan - Star Wars Fan Film </Dropdown.Item>
                <Dropdown.Item onClick={ () => xemPhim('starwars', 2, 0) }><Image src={logo_star_wars} avatar/> SKYWALKER APPRENTICE</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={ () => xemPhim('pokemon', 0, 0) }>Pokemon Movie 20</Dropdown.Item>
                <Dropdown.Item onClick={ () => xemPhim('pokemon', 1, 0) }>Pokemon Movie 21</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>



          <Menu.Item onClick={bamAnh}>Ảnh</Menu.Item>


          <Menu.Item>
            LIGHT <Checkbox toggle checked={white_or_black} onChange={doimau} style={{marginLeft:"5px", marginRight:"5px"}} /> DARK
          </Menu.Item>
          
          {dangXemGi === 'dangXemTruyen'
            ? <Menu.Item>
                <Dropdown compact placeholder='Kich Co' selection options={
                  [
                    {key: 1, text: '10pt', value: 10},
                    {key: 1.5, text: '15pt', value: 15},
                    {key: 2, text: '20pt', value: 20},
                  ]
                } onChange={thayDoiCoChudocx}/>
              </Menu.Item>
            : null
          }

        </Menu>

        <div onClick={hienVaGiauPhoneMenu} className = {hienMenu ? "lop-duoi-menu-hien-ra" : "lop-duoi-menu-dau-di"} >
        </div>
        

      </div>
    )
  }
}
export default MenuDienThoai;