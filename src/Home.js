import React, { Component } from 'react';

// PHẦN 1: IMPORT


import MenuDieuKhien from './MenuDieuKhien'

//Danh ba tat ca Phim



// PHẦN 2: State
class Home extends Component {
  state = {
    
  }

// PHẦN 3: Function





// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {} = this.state;
    var { chieuRongManHinh, dangXemGi, white_or_black } = this.props;
    return (
      <div className="Home">
        {(chieuRongManHinh > 900) /*Kiểm tra là Máy Tính hay là Điện Thoại? */ 
          ? null
          : <MenuDieuKhien dangXemGi={dangXemGi} white_or_black={white_or_black} chieuRongManHinh={chieuRongManHinh}/>
        }
        
        

      </div>
    )
  }
}
export default Home;