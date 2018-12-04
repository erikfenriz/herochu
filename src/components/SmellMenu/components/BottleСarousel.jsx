import React, { Component } from 'react';
import Slider from "react-slick";
import citrus from '../../../assets/images/experience2/citrus/citrus_00000.jpg';
import happy from '../../../assets/images/experience2/happy/happy_00000.jpg';
import natural from '../../../assets/images/experience2/natural/natural_00000.jpg';
import passion from '../../../assets/images/experience2/passion/passion_00000.jpg';
import rebelious from '../../../assets/images/experience2/rebelious/rebelious_00000.jpg';
import sexy from '../../../assets/images/experience2/sexy/sexy_00000.jpg';
import zen from '../../../assets/images/experience2/zen/zen_00000.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    name: "natural",
    img:  natural 
  },
  {
    name: "citrus",
    img:  citrus 
  },
  {
    name: "happy",
    img:  happy 
  },
  {
    name: "passion",
    img:  passion 
  },
  {
    name: "rebelious",
    img:  rebelious 
  },
  {
    name: "sexy",
    img:  sexy 
  },
  {
    name: "zen",
    img:  zen 
  },
]
let items = [];


export default class BottleСarousel extends Component {



  // componentWillMount(){
  // document.addEventListener('click',this.handleOver,false)
  // }
  handleOver = () => {

  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    data.forEach(item => {
      items.push(<div onMouseOver={this.handleOver}>
        <center> <img alt={item.name} src={item.img} /></center>
      </div>)
    })

    return (
      <Slider {...settings}>
        {items}
      </Slider>

    );
  }
}