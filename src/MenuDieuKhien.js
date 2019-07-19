import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Menu, Dropdown, Icon, Button} from 'semantic-ui-react';


// PHẦN 2: State
class MenuDieuKhien extends Component {
  state = {
    
  }

// PHẦN 3: Function
// máy tính sẽ hiện ra tập khác, tập số value



// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {} = this.state;
    var { white_or_black, dangXemGi, chieuRongManHinh, docx_or_pdf, arrayTatCa, 
          xemTruoc, xemSau, xemKhac, hienVaGiauPhoneMenu, dangXemAnhGi, thanhDieuKhienAnh, tenAnh} = this.props;
    return (
      
      chieuRongManHinh <= 900 //so sánh điện thoại/máy tính
      
      /* Nếu True = màn hình bé hơn 900 = màn hình điện thoại */
      /* Thì hiện ra menu điểu khển cho điện thoại */
      ? 
        <div>
          {dangXemGi === 'dangXemHome'
            ? <Menu fixed='bottom' borderless inverted={white_or_black}>
                <Menu.Item onClick={hienVaGiauPhoneMenu}>
                  <Icon size='large' name='th large'/>
                </Menu.Item>
              </Menu>
            : null
          }
          {dangXemGi === 'dangXemPhim'
            ? <Menu fixed='bottom' borderless size='mini' widths={4} compact inverted={white_or_black}>
  
                <Menu.Item onClick={hienVaGiauPhoneMenu}>
                  <Icon size='large' name='th large'/>
                </Menu.Item>

                <Menu.Item onClick={xemTruoc}>    
                  <Icon size='large' name='arrow circle left'/>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown compact placeholder='Chon Tap' selection options={arrayTatCa} onChange={xemKhac}/>
                </Menu.Item>

                <Menu.Item onClick={xemSau}>
                  <Icon size='large' name='arrow circle right'/>
                </Menu.Item>
              </Menu>
            : null
          }
          {dangXemGi === 'dangXemTruyen'
            ? <Menu fixed='bottom' borderless size='mini' widths={3} compact inverted={white_or_black}>

                <Menu.Item onClick={hienVaGiauPhoneMenu}>
                  <Icon size='large' name='th large'/>
                </Menu.Item>

                <Menu.Item as='a' href='#oTrenTrang'>
                  <Icon size='large' name='angle double up' />
                </Menu.Item>
              
                <Menu.Item as='a' href='#oDuoiTrang'>
                  <Icon size='large' name='angle double down' />
                </Menu.Item>

              </Menu>
            : null
          }
          {dangXemGi === 'dangXemAnh'
            ? <Menu fixed='bottom' borderless size='mini' compact inverted={white_or_black}>
                <Menu.Item onClick={hienVaGiauPhoneMenu}>
                  <Icon size='large' name='th large'/>
                </Menu.Item>
                <Menu.Item>
                  <input
                    type='range'
                    min='-1'
                    max='6'
                    value={dangXemAnhGi}
                    onChange={thanhDieuKhienAnh}
                  />
                  <Menu.Item>
                  {tenAnh[dangXemAnhGi]}
                  </Menu.Item>
                </Menu.Item>
                
            </Menu>
            
            : null
          }
        </div>
        
        
        
      /* Nếu False = màn hình lớn hơn 900 = màn hình máy tính */
      /* Thì hiện ra menu điểu khển cho máy tính */
      : 
        <div>
      
          {(dangXemGi === 'dangXemPhim') || (dangXemGi === 'dangXemTruyen')
            ? <Menu fixed='bottom' borderless size='mini' widths={5} compact inverted={white_or_black}>
              
                <Menu.Item>
                </Menu.Item>
                
                {/* Cách thứ nhất:
                1 tên hành động xemtruoc chung cho cả 2 trường hợp: xem Phim và xem Truyện */}
                <Menu.Item onClick={xemTruoc}>
                  <Button icon labelPosition='left' >
                    <Icon name='arrow circle left'/>
                      Previous (Prev)
                  </Button>
                </Menu.Item>
                
                <Menu.Item>
                  <Dropdown compact placeholder={dangXemGi === 'dangXemTruyen' ? 'Chon Trang' : 'Chon Tap'} 
                            selection options={arrayTatCa} onChange={xemKhac}/>
                </Menu.Item>
                
                <Menu.Item onClick={xemSau}>
                  <Button icon labelPosition='right' >
                    <Icon name='arrow circle right'/>
                    Next
                  </Button>
                </Menu.Item>

                <Menu.Item>
                </Menu.Item>
              </Menu>
            : null
          }
          {dangXemGi === 'dangXemAnh'
            ? <Menu fixed='bottom' borderless size='mini' width={2} inverted={white_or_black}>
                <Menu.Item>
                  <input
                    type='range'
                    min='-1'
                    max='7'
                    value={dangXemAnhGi}
                    onChange={thanhDieuKhienAnh}
                  />
                </Menu.Item>
                <Menu.Item>
                  {tenAnh[dangXemAnhGi]}
                </Menu.Item>
            </Menu>
            
            : null
          }
      </div>
  
    )
  }
}
export default MenuDieuKhien;