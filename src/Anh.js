import React, { Component } from 'react';

// PHẦN 1: IMPORT
import { Button, Image} from 'semantic-ui-react';

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

    anhSpiderMan: false,
    anhStarWars_or_Batman: false,
  }

// PHẦN 3: Function

  doi_anh_batman = () => {
    //trong đây phải làm gì, mục đích là gì?
    //Mục đích là đổi sang ảnh Batman, 
    //Làm thế nào? Thay đổi hộp thành gì? Thành false
    this.setState({anhStarWars_or_Batman: false})
  }
  doi_anh_star_wars = () => {
  //trong đây phải làm gì, mục đích là gì?
  //Mục đích là đổi sang ảnh Star Wars, 
  //Làm thế nào? Thay đổi hộp thành gì? Thành true
  this.setState({anhStarWars_or_Batman: true})
  }
  hienVaGiauAnhSpiderMan = () => {
  this.setState({anhSpiderMan: !this.state.anhSpiderMan})
  }


// PHẦN 4: Trình bày trang Web, giống HTML
  render() {
    var {anhStarWars_or_Batman, anhSpiderMan} = this.state;
    return (
      <div className="Anh">

        {anhStarWars_or_Batman
        ? <Image size='medium' centered src={gray_jedi_revan}/>
        : <Image fluid src={batman_arkham_knight_demon}/>
        }


        {anhSpiderMan
        ? <Image size='medium' centered src={Iron_Spider_Man_suit_by_nanotechnology}/>
        : null
        }

        <Button.Group>
          <Button color='red' onClick={this.doi_anh_batman}>Batman</Button>
          <Button.Or />
          <Button color='blue' onClick={this.doi_anh_star_wars}>Star Wars</Button>
          </Button.Group>
        <Button color='green' onClick={this.hienVaGiauAnhSpiderMan}>Iron Spider-Man</Button>


      </div>
    )
  }
}
export default Anh;