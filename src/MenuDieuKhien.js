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
    var { white_or_black, dangXemGi, chieuRongManHinh, docx_or_pdf, arrayTatCa, xemtruoc, xemsau, xemTrangKhac} = this.props;
    return (
      
      chieuRongManHinh <= 900
      /* Nếu màn hình bé hơn 900 = màn hình ĐT */
        /* Thì hiện ra menu điểu khển cho ĐT */
        ? 
          dangXemGi === 'dangXemPhim'
          ? 
            <Menu fixed='bottom' borderless size='mini' widths={4} compact inverted={white_or_black}>
        
              <Menu.Item onClick={this.hienVaGiauPhoneMenu}>
                <Icon size='large' name='th large'/>
              </Menu.Item>

              <Menu.Item onClick={this.xemtruoc}>    
                <Icon size='large' name='arrow circle left'/>
              </Menu.Item>

              <Menu.Item>
                <Dropdown compact placeholder='Chon Tap' selection options={arrayTatCa} onChange={this.xemTapKhac}/>
              </Menu.Item>

              <Menu.Item onClick={this.xemtapsau}>
                <Icon size='large' name='arrow circle right'/>
              </Menu.Item>
            </Menu>
          
          /*Sai, nghĩa là ko phải đang xem phim, nghĩa là xem truyen*/
          :
            <Menu fixed='bottom' borderless size='mini' widths={4} compact inverted={white_or_black}>

              <Menu.Item onClick={this.hienVaGiauPhoneMenu}>
                <Icon size='large' name='th large'/>
              </Menu.Item>

              <Menu.Item as='a' href='#oTrenTrang'>
                <Icon size='large' name='angle double up' />
              </Menu.Item>
            
              <Menu.Item as='a' href='#oDuoiTrang'>
                <Icon size='large' name='angle double down' />
              </Menu.Item>

            </Menu>

        /* Còn ko là Màn Hình hơn 900 = màn hình MT */
        : (docx_or_pdf && (dangXemGi === 'dangXemTruyen'))
        /* Nếu đang xem DOC và đang xem Truyện */
          
          /* thì ko cần hiện ra menu chọn trang ở dưới */
          ? null
        
          /* còn ko thì hiện ra menu chọn trang ở dưới */
          : <Menu fixed='bottom' borderless size='mini' widths={5} compact inverted={white_or_black}>
        
              <Menu.Item>
              </Menu.Item>
              
              {/* Cách thứ nhất:
              1 tên hành động xemtruoc chung cho cả 2 trường hợp: xem Phim và xem Truyện */}
              <Menu.Item onClick={xemtruoc}>
                <Button icon labelPosition='left' >
                  <Icon name='arrow circle left'/>
                    Previous (Prev)
                </Button>
              </Menu.Item>
              {dangXemGi === 'dangXemTruyen'
                ? <Menu.Item>
                  <Dropdown compact placeholder='Chon Trang' selection options={arrayTatCa} onChange={xemTrangKhac}/>
                  </Menu.Item>
                
                : <Menu.Item>
                  <Dropdown compact placeholder='Chon Tap' selection options={arrayTatCa} onChange={this.xemTapKhac}/>
                  </Menu.Item>
              }
              {/* Cách thứ hai:
              2 hành động khác nhau cho 2 trường hợp: xem Phim và xem Truyện
              SO SÁNH Ở DƯỚI ĐÂY, ở nút bấm */}
              <Menu.Item onClick={xemsau}>
                <Button icon labelPosition='right' >
                  <Icon name='arrow circle right'/>
                  Next
                </Button>
              </Menu.Item>

              <Menu.Item>
              </Menu.Item>
            </Menu>
      
      

    )
  }
}
export default MenuDieuKhien;