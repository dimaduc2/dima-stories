import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Image, Menu, Dropdown, Icon, Label, Checkbox } from 'semantic-ui-react';

import logo_star_wars from './anh/Gray_Jedi_(Jedi_&_Sith)_symbol.png';
import logo_overlord from './anh/overlord_symbol.png';
import Pokemon from './anh/Pokemon_symbol.png';

var tapOverlord = Array(13).fill(0);

// PHẦN 2: State
class MenuMayTinh extends Component {
  state = {
    
  }

// PHẦN 3: Function
docTruyen = () => {
  alert('xin chao')
}

// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {} = this.state;
    var {dangXemGi, docx_or_pdf, white_or_black, docTruyen, xemPhim, bamHome, xemTatCa, doimau, thayDoiCoChudocx, 
      thayDoiCoChu, bamAnh, tenPhimDangXem, thuTuTapDangXem, thuTuPhanDangXem, tenTruyenTrongDanhBa} = this.props;
    return (
      
      <Menu stackable borderless inverted={!white_or_black} fixed='top'>
        <Menu.Item header onClick={bamHome} 
        
        style={{color: (dangXemGi === "dangXemHome") ? 'red' : (white_or_black ? 'black' : 'white')}}>HOME</Menu.Item>
        <Dropdown item simple text='Truyện Tranh' style={{color: (dangXemGi === "dangXemTruyen") ? 'red' : (white_or_black ? 'black' : 'white')}}>
          <Dropdown.Menu>
            {/*    
            <Dropdown.Item onClick={this.doc}></Dropdown.Item>
            */}
            <Dropdown.Item onClick={() => docTruyen('Evangelion')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Evangelion") ? 'blue' : 'black'}}>EVANGELION</span></Dropdown.Item>
            <Dropdown.Item onClick={() => docTruyen('GANTZ')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "GANTZ") ? 'blue' : 'black'}}>GANTZ</span></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => docTruyen('Backtothefuture')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Backtothefuture") ? 'blue' : 'black'}}>Back to the future</span></Dropdown.Item>
            <Dropdown.Item onClick={() => docTruyen('ChangingtheFuture')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "ChangingtheFuture") ? 'blue' : 'black'}}>Changing the Future</span></Dropdown.Item>
            <Dropdown.Item onClick={() => docTruyen('chosenOne')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "chosenOne") ? 'blue' : 'black'}}>Chosen One for Force</span></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Icon name='star'/>
              <i className='dropdown icon' />
              <span className='text'>Darth Vader from the past</span>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => docTruyen('DarthVaderRebirth')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "DarthVaderRebirth") ? 'blue' : 'black'}}>Darth Vader Rebirth</span></Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('DarthVaderHeroofNaboo')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "DarthVaderHeroofNaboo") ? 'blue' : 'black'}}>Darth Vader Hero of Naboo</span></Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('ASithsSecondChance')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "ASithsSecondChance") ? 'blue' : 'black'}}>A Siths Second Chance</span></Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('MaceWindusalternateself')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "MaceWindusalternateself") ? 'blue' : 'black'}}>Mace Windu's alternate self</span></Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('OperationPreventingVader')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "OperationPreventingVader") ? 'blue' : 'black'}}>Operation Preventing Vader</span></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name='space shuttle'/>
              <i className='dropdown icon' />
              <span className='text'>VFSNAKE</span>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => docTruyen('Innocent')}><span style={{color: (dangXemGi === "dangXemTruyen" && tenTruyenTrongDanhBa === "Innocent") ? 'blue' : 'black'}}>Innocent</span></Dropdown.Item>
                <Dropdown.Item>Truths Revealed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Image src={logo_star_wars} avatar/>
              Anakin's Decision
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text='Anime' style={{color: (dangXemGi === "dangXemPhim") ? 'red' : (white_or_black ? 'black' : 'white')}}>
          <Dropdown.Menu style={{width:'30vw'}}>
            <Dropdown.Item>
              <Image src={logo_overlord} avatar/>

              <i className='dropdown icon' />
              <span className='text' style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}>Overlord Ss 1</span>
              <Dropdown.Menu>
              {tapOverlord.map( (tap, index) =>
                <Dropdown.Item onClick={ () => xemPhim('overlord', 0, index) }>
                  <span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuTapDangXem === index && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}>
                      Overlord Ss1 ep {index+1}
                  </span>
                </Dropdown.Item>
                )}
              </Dropdown.Menu>

            </Dropdown.Item>
            <Dropdown.Item>
              <Image src={logo_overlord} avatar/>
              
              <i className='dropdown icon' />
              <span className='text' style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}>Overlord Ss 2</span>
              <Dropdown.Menu>
                {tapOverlord.map( (tap, index) =>
                  <Dropdown.Item onClick={ () => xemPhim('overlord', 1, index) }>
                    <span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuTapDangXem === index && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}>
                        Overlord Ss2 ep {index+1}
                    </span>
                  </Dropdown.Item>
                  )}
              </Dropdown.Menu>

            </Dropdown.Item>
            <Dropdown.Item>
              <Image src={logo_overlord} avatar/>
              
              <i className='dropdown icon' />
              <span className='text' style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuPhanDangXem === 2) ? 'blue' : 'black'}}>Overlord Ss 3</span>
              <Dropdown.Menu>
                {tapOverlord.map( (tap, index) =>
                <Dropdown.Item onClick={ () => xemPhim('overlord', 2, index) }>
                    <span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "overlord" && thuTuTapDangXem === index && thuTuPhanDangXem === 2) ? 'blue' : 'black'}}>
                        Overlord Ss3 ep {index+1}
                    </span>
                    </Dropdown.Item>
                )}
              </Dropdown.Menu>

            </Dropdown.Item>
            <Dropdown.Divider />
            
            <Dropdown.Item onClick={ () => xemPhim('starwars', 0, 0) }><Image src={logo_star_wars} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "starwars" && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}> Star Wars Clone Wars 2003 Full</span></Dropdown.Item>
            <Dropdown.Item onClick={ () => xemPhim('starwars', 1, 0) }><Image src={logo_star_wars} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "starwars" && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}> Revan - Star Wars Fan Film (2015)</span></Dropdown.Item>
            <Dropdown.Item onClick={ () => xemPhim('starwars', 2, 0) }><Image src={logo_star_wars} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "starwars" && thuTuPhanDangXem === 2) ? 'blue' : 'black'}}> SKYWALKER APPRENTICE (2019 Star Wars Fan Film)</span></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={ () => xemPhim('pokemon', 0, 0) }><Image src={Pokemon} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "pokemon" && thuTuPhanDangXem === 0) ? 'blue' : 'black'}}>Pokemon Movie 20</span></Dropdown.Item>
            <Dropdown.Item onClick={ () => xemPhim('pokemon', 1, 0) }><Image src={Pokemon} avatar/><span style={{color: (dangXemGi === "dangXemPhim" && tenPhimDangXem === "pokemon" && thuTuPhanDangXem === 1) ? 'blue' : 'black'}}>Pokemon Movie 21</span></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Menu.Item onClick={bamAnh} style={{color: (dangXemGi === "dangXemAnh") ? 'red' : (white_or_black ? 'black' : 'white')} } >Ảnh</Menu.Item>

        <Menu.Menu position='right'>
        
        
          {dangXemGi === 'dangXemTruyen'
            ? <Menu.Item>
                {docx_or_pdf
                  ? 
                  <Label color='teal' basic={white_or_black} ribbon={white_or_black}>
                    tất cả trang
                  </Label>
                  : 
                  <Label color='olive' basic={white_or_black} ribbon={white_or_black}>
                    từng trang một
                  </Label>
                }
              </Menu.Item>
            : null
          }
          { dangXemGi === 'dangXemTruyen'
            ? <Menu.Item>
                PDF <Checkbox toggle checked={docx_or_pdf} onChange={xemTatCa} style={{marginLeft:"5px", marginRight:"5px"}} /> DOC 
              </Menu.Item>
            : null
          }

          <Menu.Item>
            LIGHT <Checkbox toggle checked={white_or_black} onChange={doimau} style={{marginLeft:"5px", marginRight:"5px"}} /> DARK
          </Menu.Item>

          {dangXemGi === 'dangXemTruyen'
            ? <Menu.Item>
                {docx_or_pdf
                  ?
                  <Dropdown placeholder='Kich Co' selection options={
                    [
                      {key: 1, text: '10pt', value: 10},
                      {key: 1.5, text: '15pt', value: 15},
                      {key: 2, text: '20pt', value: 20},
                    ]
                  } onChange={thayDoiCoChudocx}/>
                  :
                  <Dropdown placeholder='Kich Co' selection options={
                    [
                      {key: 1, text: '100%', value: 1},
                      {key: 1.5, text: '150%', value: 1.5},
                      {key: 2, text: '200%', value: 2},
                    ]
                  } onChange={thayDoiCoChu}/>
                }
              </Menu.Item>
            : null
          }

        </Menu.Menu>
      </Menu>

    )
  }
}
export default MenuMayTinh;