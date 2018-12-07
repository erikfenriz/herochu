import React from 'react';
import Slider from "react-slick";
import BottleItem from "./BottleItem";
import citrus_1 from '../../../assets/images/experience2/citrus/citrus_1.gif';
import citrus_2 from '../../../assets/images/experience2/citrus/citrus_2.gif';
import happy_1 from '../../../assets/images/experience2/happy/happy_1.gif';
import happy_2 from '../../../assets/images/experience2/happy/happy_2.gif';
import natural_1 from '../../../assets/images/experience2/natural/natural_1.gif';
import natural_2 from '../../../assets/images/experience2/natural/natural_2.gif';
import passion_1 from '../../../assets/images/experience2/passion/passion_1.gif';
import passion_2 from '../../../assets/images/experience2/passion/passion_2.gif';
import rebelious_1 from '../../../assets/images/experience2/rebelious/rebelious_1.gif';
import rebelious_2 from '../../../assets/images/experience2/rebelious/rebelious_2.gif';
import sexy_1 from '../../../assets/images/experience2/sexy/sexy_1.gif';
import sexy_2 from '../../../assets/images/experience2/sexy/sexy_2.gif';
import zen_1 from '../../../assets/images/experience2/zen/zen_1.gif';
import zen_2 from '../../../assets/images/experience2/zen/zen_2.gif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "natural",
    img: natural_1,
    imgGif: natural_2,
    color: "#043f1b",
    colorNext: "#a2c855"
  },
  {
    name: "citrus",
    img: citrus_1,
    imgGif: citrus_2,
    color: "#00f5f0",
    colorNext: "#00f564"
  },
  {
    name: "happy",
    img: happy_1,
    imgGif: happy_2,
    color: "#f55500",
    colorNext: "#f5e120"
  },
  {
    name: "passion",
    img: passion_1,
    imgGif: passion_2,
    color: "#e34b80",
    colorNext: "#dc0714"
  },
  {
    name: "rebelious",
    img: rebelious_1,
    imgGif: rebelious_2,
    color: "#dc0714",
    colorNext: "#7c045d"
  },
  {
    name: "sexy",
    img: sexy_1,
    imgGif: sexy_2,
    color: "#831970",
    colorNext: "#d6679b"
  },
  {
    name: "zen",
    img: zen_1,
    imgGif: zen_2,
    color: "#f49e6f",
    colorNext: "#dcc8a7"
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true
};

const BottleCarousel = props => {
  const { visibleChangeFalse, visibleChange, visible } = props;

  const items = data.map(item =>
    <BottleItem visibleChangeFalse={visibleChangeFalse} visibleChange={visibleChange} visible={visible} item={item} />
  )

  return (
    <Slider {...settings}>
      {items}
    </Slider>
  );
}
export default BottleCarousel;