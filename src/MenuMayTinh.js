import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Image, Menu, Dropdown, Icon, Label, Checkbox } from 'semantic-ui-react';

import logo_star_wars from './anh/Gray_Jedi_(Jedi_&_Sith)_symbol.png';
import logo_overlord from './anh/overlord_symbol.png';



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
    var {dangXemGi, docx_or_pdf, white_or_black, docTruyen, xemPhim, bamHome} = this.props;
    return (
      
      <Menu stackable inverted fixed='top'>
        <Menu.Item header onClick={bamHome}>HOME</Menu.Item>
        <Dropdown item simple text='Truyện Tranh'>
          <Dropdown.Menu>
            {/*    
            <Dropdown.Item onClick={this.doc}></Dropdown.Item>
            */}
            <Dropdown.Item onClick={() => docTruyen('Evangelion')}>EVANGELION</Dropdown.Item>
            <Dropdown.Item onClick={() => docTruyen('GANTZ')}>GANTZ</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => docTruyen('Backtothefuture')}>Back to the future</Dropdown.Item>
            <Dropdown.Item onClick={() => docTruyen('ChangingtheFuture')}>Changing the Future</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Icon name='star'/>
              <i className='dropdown icon' />
              <span className='text'>Darth Vader from the past</span>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => docTruyen('DarthVaderRebirth')}>Darth Vader Rebirth</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('DarthVaderHeroofNaboo')}>Darth Vader Hero of Naboo</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('ASithsSecondChance')}>A Siths Second Chance</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('MaceWindusalternateself')}>Mace Windu's alternate self</Dropdown.Item>
                <Dropdown.Item onClick={() => docTruyen('OperationPreventingVader')}>Operation Preventing Vader</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name='space shuttle'/>
              <i className='dropdown icon' />
              <span className='text'>VFSNAKE</span>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => docTruyen('Innocent')}>Innocent</Dropdown.Item>
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
        <Dropdown item simple text='Phim Youtube'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={ () => xemPhim('overlord', 0, 0) }>
              <Image src={logo_overlord} avatar/>Overlord Ss 1 Full {/*  bước 3  */}
            </Dropdown.Item>
            <Dropdown.Item>
              <Image src={logo_overlord} avatar/>
              <i className='dropdown icon' />
              <span className='text'>Overlord Ss 2</span>
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
            </Dropdown.Item>
            <Dropdown.Item>
              <Image src={logo_overlord} avatar/>
              <i className='dropdown icon' />
              <span className='text'>Overlord Ss 3</span>
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
            </Dropdown.Item>
            <Dropdown.Divider />
            
            <Dropdown.Item onClick={ () => xemPhim('starwars', 0, 0) }><Image src={logo_star_wars} avatar/> Star Wars Clone Wars 2003 Full</Dropdown.Item>
            <Dropdown.Item onClick={ () => xemPhim('starwars', 1, 0) }><Image src={logo_star_wars} avatar/> Revan - Star Wars Fan Film (2015)</Dropdown.Item>
            <Dropdown.Item onClick={ () => xemPhim('starwars', 2, 0) }><Image src={logo_star_wars} avatar/> SKYWALKER APPRENTICE (2019 Star Wars Fan Film)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Dropdown item simple text='Anh'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.hienVaGiauAnhSpiderMan}>Iron Spider-Man</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
                PDF <Checkbox toggle checked={docx_or_pdf} onChange={this.xemTatCa} style={{marginLeft:"5px", marginRight:"5px"}} /> DOC 
              </Menu.Item>
            : null
          }

          <Menu.Item>
            LIGHT <Checkbox toggle checked={white_or_black} onChange={this.doimau} style={{marginLeft:"5px", marginRight:"5px"}} /> DARK
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
                  } onChange={this.thayDoiCoChudocx}/>
                  :
                  <Dropdown placeholder='Kich Co' selection options={
                    [
                      {key: 1, text: '100%', value: 1},
                      {key: 1.5, text: '150%', value: 1.5},
                      {key: 2, text: '200%', value: 2},
                    ]
                  } onChange={this.thayDoiCoChu}/>
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