import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Image, Menu, Dropdown, Checkbox } from 'semantic-ui-react';

import logo_star_wars from './anh/Gray_Jedi_(Jedi_&_Sith)_symbol.png';
import logo_overlord from './anh/overlord_symbol.png';
import Pokemon from './anh/Pokemon_symbol.png';

import './MenuDienThoai.css';

var tapOverlord = Array(13).fill(0);

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
          bamAnh, hienVaGiauPhoneMenu, tenPhimDangXem, thuTuTapDangXem, thuTuPhanDangXem, tenTruyenTrongDanhBa} = this.props;
    return (
      
      <div>
        <Menu vertical fixed='top' borderless  inverted={!white_or_black} className = {hienMenu ? "menu-hien-ra" : "menu-dau-di"} >
          <Menu.Item as='a' onClick={bamHome} style={{color: (dangXemGi === "dangXemHome") ? 'red' : (white_or_black ? 'black' : 'white')}}>
            <Image src={logo_star_wars} size='mini' style={{display:'block', marginLeft: 'auto', marginRight:'auto'}}/> 
            Dima Stories
          </Menu.Item>

          <Menu.Item>
            <Dropdown floating text='Truyện Tranh' style={{color: (dangXemGi === "dangXemTruyen") ? 'red' : (white_or_black ? 'black' : 'white')}}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => docTruyen('Evangelion')}>EVANGELION</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('GANTZ')}>GANTZ</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => docTruyen('Backtothefuture')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>Back to the future</span></Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('ChangingtheFuture')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>Changing the Future</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Dropdown floating text='Darth Vader from the past'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => docTruyen('DarthVaderRebirth')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>Darth Vader Rebirth</span></Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('DarthVaderHeroofNaboo')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>Darth Vader Hero of Naboo</span></Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('ASithsSecondChance')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>A Siths Second Chance</span></Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('MaceWindusalternateself')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>Mace Windu's alternate self</span></Dropdown.Item>
                      <Dropdown.Item onClick={() => docTruyen('OperationPreventingVader')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>Operation Preventing Vader</span></Dropdown.Item>
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
            <Dropdown floating text='Anime' style={{color: (dangXemGi === "dangXemPhim") ? 'red' : (white_or_black ? 'black' : 'white')}}>
              <Dropdown.Menu>
                
                <Dropdown.Item>
                  <Image src={logo_overlord} avatar/>
                  
                  <Dropdown floating text='Overlord Ss 1' style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}>
                    <Dropdown.Menu>
                      {tapOverlord.map( (tap, index) =>
                        <Dropdown.Item onClick={ () => xemPhim('overlord', 0, index) }>
                          <span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuTapDangXem === index && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}>
                              Overlord Ss1 ep {index+1}
                          </span>
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  {/* <Dropdown floating text='Overlord Ss 2'>
                    <Dropdown.Menu> */}

                </Dropdown.Item>

                <Dropdown.Item>
                  <Image src={logo_overlord} avatar/>
                  
                  <Dropdown floating text='Overlord Ss 2' style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}>
                    <Dropdown.Menu>
                      {tapOverlord.map( (tap, index) =>
                        <Dropdown.Item onClick={ () => xemPhim('overlord', 1, index) }>
                          <span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuTapDangXem === index && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}>
                              Overlord Ss2 ep {index+1}
                          </span>
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>

                </Dropdown.Item>

                <Dropdown.Item>
                  <Image src={logo_overlord} avatar/>

                  <Dropdown floating text='Overlord Ss 3' style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuPhanDangXem === 2) ? 'blue' : 'black'}}>
                    <Dropdown.Menu>
                      {tapOverlord.map( (tap, index) =>
                        <Dropdown.Item onClick={ () => xemPhim('overlord', 2, index) }>
                          <span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuTapDangXem === index && thuTuPhanDangXem === 2) ? 'blue' : 'black'}}>
                              Overlord Ss3 ep {index+1}
                          </span>
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={ () => xemPhim('starwars', 0, 0) }><Image src={logo_star_wars} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "starwars" && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}> Star Wars Clone Wars 2003 Full</span></Dropdown.Item>
                <Dropdown.Item onClick={ () => xemPhim('starwars', 1, 0) }><Image src={logo_star_wars} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "starwars" && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}> Revan - Star Wars Fan Film</span></Dropdown.Item>
                <Dropdown.Item onClick={ () => xemPhim('starwars', 2, 0) }><Image src={logo_star_wars} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "starwars" && thuTuPhanDangXem === 2) ? 'blue' : 'black'}}> SKYWALKER APPRENTICE</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={ () => xemPhim('pokemon', 0, 0) }><Image src={Pokemon} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "pokemon" && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}>Pokemon Movie 20</span></Dropdown.Item>
                <Dropdown.Item onClick={ () => xemPhim('pokemon', 1, 0) }><Image src={Pokemon} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "pokemon" && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}>Pokemon Movie 21</span></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>



          <Menu.Item onClick={bamAnh} style={{color: (dangXemGi === "dangXemAnh") ? 'red' : (white_or_black ? 'black' : 'white')}}>Ảnh</Menu.Item>


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




{/* <Dropdown floating text='Overlord Ss 1'>
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
</Dropdown> */}