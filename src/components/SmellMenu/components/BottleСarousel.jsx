import React, { Component } from 'react';
import Slider from "react-slick";
import { Icon } from "antd";
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
import $ from "jquery";
const data = [
  {
    name: "natural",
    img: natural_1,
    imgGif: natural_2,
    color: "#043f1b",
    colorNext: "#a2c855",
    link: "/LetPerfumeTalk/Natural",
  },
  {
    name: "alive",
    img: citrus_1,
    imgGif: citrus_2,
    color: "#00f5f0",
    colorNext: "#00f564",
    link: "/LetPerfumeTalk/Alive",
  },
  {
    name: "happy",
    img: happy_1,
    imgGif: happy_2,
    color: "#f55500",
    colorNext: "#f5e120",
    link: "/LetPerfumeTalk/Happy",
  },
  {
    name: "in_love",
    img: passion_1,
    imgGif: passion_2,
    color: "#dc0714",
    colorNext: "#e34b80",
    link: "/LetPerfumeTalk/In_love",
  },
  {
    name: "rebellious",
    img: rebelious_1,
    imgGif: rebelious_2,
    color: "#7c045d",
    colorNext: "#dc0714",
    link: "/LetPerfumeTalk/Rebellious",
  },
  {
    name: "sexy",
    img: sexy_1,
    imgGif: sexy_2,
    color: "#831970",
    colorNext: "#d6679b",
    link: "/LetPerfumeTalk/Sexy",
  },
  {
    name: "zen",
    img: zen_1,
    imgGif: zen_2,
    color: "#f49e6f",
    colorNext: "#dcc8a7",
    link: "/LetPerfumeTalk/Zen",
  }
]

var items = [];

var tickLoadMore = 0;
export default class BottleCarousel extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init = this.init.bind(this);
  }
  onMouseMove(event) {
    const valueMouse = -(-(window.innerWidth * .5) + event.layerX);
    setInterval(valueMouse > 0 ? this.myRef.current.slickNext() : this.myRef.current.slickPrev(), 1)
  }
  init() {
    var speed = 0;
    var scroll = 0;
    var container = $('.carousel-frame');
    var container_w = container.width();

    container.on('mousemove', function (e) {
      var mouse_x = e.pageX - container.offset().left;
      var mouseperc = 100 * mouse_x / container_w;
      speed = mouseperc - 50;
    }).on('mouseleave', function () {
      speed = 0;
    });
    function inWindow(s) {
      // var scrollTop = $(window).scrollTop();
      var windowWidth = $(window).width();
      var currentEls = $(s);
      var result = [];
      console.log(windowWidth, currentEls, result)
      currentEls.each(function () {
        var el = $(this);
        var offset = el.offset();
        console.log(el.width(), windowWidth);
        if (el.width() > 0 && el.width() < windowWidth)
          result.push(this);
      });
      return $(result);
    }
    function updatescroll() {

      var max_scroll = container[0].scrollWidth;
      if (speed !== 0) {
        scroll += speed / 5;
        if (scroll < 0) scroll = 0;
        if (scroll > max_scroll) scroll = max_scroll;
        $('.carousel-frame').scrollLeft(scroll);
      }
      var item0 = '.item0';
      var item1 = '.item1';
      var item2 = '.item2';
      var item3 = '.item3';
      var item4 = '.item4';
      var item5 = '.item5';
      var item6 = '.item6';

      if ($(item0)[0]) {
        var coordinate0 = $(item0)[0].getBoundingClientRect().x + 100;
        var coordinate1 = $(item1)[0].getBoundingClientRect().x + 100;
        var coordinate2 = $(item2)[0].getBoundingClientRect().x + 100;
        var coordinate3 = $(item3)[0].getBoundingClientRect().x + 100;
        var coordinate4 = $(item4)[0].getBoundingClientRect().x + 100;
        var coordinate5 = $(item5)[0].getBoundingClientRect().x + 100;
        var coordinate6 = $(item6)[0].getBoundingClientRect().x + 100;
      }

      //----------------------------------------------------------------------------
      var i;

      // for (i = tickLoadMore - 1; i <= tickLoadMore; i++) {
      // console.log("_____________for___________");
      // if (coordinate0 < window.innerWidth / 7 && coordinate0 > 0) {
      //   // console.log("_______________1");
      //   $(item0)[0].id = "item0";
      // }
      // if (coordinate0 > window.innerWidth / 7 && coordinate0 < (window.innerWidth / 7) * 2) {
      //   $(item0)[0].id = "item1";
      // }
      // if (coordinate0 > (window.innerWidth / 7) * 2 && coordinate0 < (window.innerWidth / 7) * 3) {
      //   $(item0)[0].id = "item2";
      // }
      // if (coordinate0 > (window.innerWidth / 7) * 3 && coordinate0 < (window.innerWidth / 7) * 4) {
      //   $(item0)[0].id = "item3";
      // }
      // if (coordinate0 > (window.innerWidth / 7) * 4 && coordinate0 < (window.innerWidth / 7) * 5) {
      //   $(item0)[0].id = "item2";
      // }
      // if (coordinate0 > (window.innerWidth / 7) * 5 && coordinate0 < (window.innerWidth / 7) * 6) {
      //   $(item0)[0].id = "item1";
      // }
      // if (coordinate0 > (window.innerWidth / 7) * 6 && coordinate0 < window.innerWidth) {
      //   $(item0)[0].id = "item0";
      // }
      // //----------------------------------------------------------------------------
      // if (coordinate1 < window.innerWidth / 7 && coordinate1 > 0) {
      //   $(item1)[0].id = "item0";
      // }
      // if (coordinate1 > window.innerWidth / 7 && coordinate1 < (window.innerWidth / 7) * 2) {
      //   $(item1)[0].id = "item1";
      // }
      // if (coordinate1 > (window.innerWidth / 7) * 2 && coordinate1 < (window.innerWidth / 7) * 3) {
      //   $(item1)[0].id = "item2";
      // }
      // if (coordinate1 > (window.innerWidth / 7) * 3 && coordinate1 < (window.innerWidth / 7) * 4) {
      //   $(item1)[0].id = "item3";
      // }
      // if (coordinate1 > (window.innerWidth / 7) * 4 && coordinate1 < (window.innerWidth / 7) * 5) {
      //   $(item1)[0].id = "item2";
      // }
      // if (coordinate1 > (window.innerWidth / 7) * 5 && coordinate1 < (window.innerWidth / 7) * 6) {
      //   $(item1)[0].id = "item1";
      // }
      // if (coordinate1 > (window.innerWidth / 7) * 6 && coordinate1 < window.innerWidth) {
      //   $(item1)[0].id = "item0";
      // }
      // //----------------------------------------------------------------------------
      // if (coordinate2 < window.innerWidth / 7 && coordinate2 > 0) {
      //   $(item2)[0].id = "item0";
      // }
      // if (coordinate2 > window.innerWidth / 7 && coordinate2 < (window.innerWidth / 7) * 2) {
      //   $(item2)[0].id = "item1";
      // }
      // if (coordinate2 > (window.innerWidth / 7) * 2 && coordinate2 < (window.innerWidth / 7) * 3) {
      //   $(item2)[0].id = "item2";
      // }
      // if (coordinate2 > (window.innerWidth / 7) * 3 && coordinate2 < (window.innerWidth / 7) * 4) {
      //   $(item2)[0].id = "item3";
      // }
      // if (coordinate2 > (window.innerWidth / 7) * 4 && coordinate2 < (window.innerWidth / 7) * 5) {
      //   $(item2)[0].id = "item2";
      // }
      // if (coordinate2 > (window.innerWidth / 7) * 5 && coordinate2 < (window.innerWidth / 7) * 6) {
      //   $(item2)[0].id = "item1";
      // }
      // if (coordinate2 > (window.innerWidth / 7) * 6 && coordinate2 < window.innerWidth) {
      //   $(item2)[0].id = "item0";
      // }
      // //----------------------------------------------------------------------------
      // if (coordinate3 < window.innerWidth / 7 && coordinate3 > 0) {
      //   $(item3)[0].id = "item0";
      // }
      // if (coordinate3 > window.innerWidth / 7 && coordinate3 < (window.innerWidth / 7) * 2) {
      //   $(item3)[0].id = "item1";
      // }
      // if (coordinate3 > (window.innerWidth / 7) * 2 && coordinate3 < (window.innerWidth / 7) * 3) {
      //   $(item3)[0].id = "item2";
      // }
      // if (coordinate3 > (window.innerWidth / 7) * 3 && coordinate3 < (window.innerWidth / 7) * 4) {
      //   $(item3)[0].id = "item3";
      // }
      // if (coordinate3 > (window.innerWidth / 7) * 4 && coordinate3 < (window.innerWidth / 7) * 5) {
      //   $(item3)[0].id = "item2";
      // }
      // if (coordinate3 > (window.innerWidth / 7) * 5 && coordinate3 < (window.innerWidth / 7) * 6) {
      //   $(item3)[0].id = "item1";
      // }
      // if (coordinate3 > (window.innerWidth / 7) * 6 && coordinate3 < window.innerWidth) {
      //   $(item3)[0].id = "item0";
      // }
      // //----------------------------------------------------------------------------
      // if (coordinate4 < window.innerWidth / 7 && coordinate4 > 0) {
      //   $(item4)[0].id = "item0";
      // }
      // if (coordinate4 > window.innerWidth / 7 && coordinate4 < (window.innerWidth / 7) * 2) {
      //   $(item4)[0].id = "item1";
      // }
      // if (coordinate4 > (window.innerWidth / 7) * 2 && coordinate4 < (window.innerWidth / 7) * 3) {
      //   $(item4)[0].id = "item2";
      // }
      // if (coordinate4 > (window.innerWidth / 7) * 3 && coordinate4 < (window.innerWidth / 7) * 4) {
      //   $(item4)[0].id = "item3";
      // }
      // if (coordinate4 > (window.innerWidth / 7) * 4 && coordinate4 < (window.innerWidth / 7) * 5) {
      //   $(item4)[0].id = "item2";
      // }
      // if (coordinate4 > (window.innerWidth / 7) * 5 && coordinate4 < (window.innerWidth / 7) * 6) {
      //   $(item4)[0].id = "item1";
      // }
      // if (coordinate4 > (window.innerWidth / 7) * 6 && coordinate4 < window.innerWidth) {
      //   $(item4)[0].id = "item0";
      // }
      // //----------------------------------------------------------------------------
      // if (coordinate5 < window.innerWidth / 7 && coordinate5 > 0) {
      //   $(item5)[0].id = "item0";
      // }
      // if (coordinate5 > window.innerWidth / 7 && coordinate5 < (window.innerWidth / 7) * 2) {
      //   $(item5)[0].id = "item1";
      // }
      // if (coordinate5 > (window.innerWidth / 7) * 2 && coordinate5 < (window.innerWidth / 7) * 3) {
      //   $(item5)[0].id = "item2";
      // }
      // if (coordinate5 > (window.innerWidth / 7) * 3 && coordinate5 < (window.innerWidth / 7) * 4) {
      //   $(item5)[0].id = "item3";
      // }
      // if (coordinate5 > (window.innerWidth / 7) * 4 && coordinate5 < (window.innerWidth / 7) * 5) {
      //   $(item5)[0].id = "item2";
      // }
      // if (coordinate5 > (window.innerWidth / 7) * 5 && coordinate5 < (window.innerWidth / 7) * 6) {
      //   $(item5)[0].id = "item1";
      // }
      // if (coordinate5 > (window.innerWidth / 7) * 6 && coordinate5 < window.innerWidth) {
      //   $(item5)[0].id = "item0";
      // }
      // //----------------------------------------------------------------------------
      // if (coordinate6 < window.innerWidth / 7 && coordinate6 > 0) {
      //   $(item6)[0].id = "item0";
      // }
      // if (coordinate6 > window.innerWidth / 7 && coordinate6 < (window.innerWidth / 7) * 2) {
      //   $(item6)[0].id = "item1";
      // }
      // if (coordinate6 > (window.innerWidth / 7) * 2 && coordinate6 < (window.innerWidth / 7) * 3) {
      //   $(item6)[0].id = "item2";
      // }
      // if (coordinate6 > (window.innerWidth / 7) * 3 && coordinate6 < (window.innerWidth / 7) * 4) {
      //   $(item6)[0].id = "item3";
      // }
      // if (coordinate6 > (window.innerWidth / 7) * 4 && coordinate6 < (window.innerWidth / 7) * 5) {
      //   $(item6)[0].id = "item2";
      // }
      // if (coordinate6 > (window.innerWidth / 7) * 5 && coordinate6 < (window.innerWidth / 7) * 6) {
      //   $(item6)[0].id = "item1";
      // }
      // if (coordinate6 > (window.innerWidth / 7) * 6 && coordinate6 < window.innerWidth) {
      //   $(item6)[0].id = "item0";
      //   // }
      // }
      //  console.log($(item6));
      window.requestAnimationFrame(updatescroll);
    }
    window.requestAnimationFrame(updatescroll);

    let loadMore = () => {
      if (container[0]) {
        console.log(inWindow("img.item0"));
        console.log("--loadMore--")
        for (var i = 0; i < data.length; i++) {
          var item = document.createElement('li');
          item.className = 'carousel-item';
          item.innerHTML = '<div  style="margin-left:20px;margin-right:20px;" id=' + i + '} key=' + data[i].name + '  ><center><div class='+data[i].name+'></div></center></div>'

          container[0].appendChild(item);
        }
        tickLoadMore++;
      }
    }
    if (container[0]) {
      container[0].addEventListener('scroll', function () {
        if (container[0].scrollLeft + container[0].clientWidth >= container[0].scrollWidth) {
          loadMore();
        }

      });
    }
    loadMore();
  }
  render() {


    const { visibleChangeFalse, visibleChange, visible } = this.props;

    const items = data.map((item, i) =>
      <li class="carousel-item">
        <BottleItem count={i} visibleChangeFalse={visibleChangeFalse} visibleChange={visibleChange} visible={visible} item={item} />
      </li>
    )

    $(document).ready(this.init);
    return (<div>
      
      {/* <svg width="1920" height="100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="220" y2="100" stroke="gray" strokeWidth="1" />
        <line x1="1920" y1="0" x2="1700" y2="100" stroke="gray" strokeWidth="1" />
      </svg>
      */}
      <div id="infinite-list" ref={this.myRef} className="carousel-frame">
        {items}
      </div>
{/*       
       <svg width="1920" height="100" xmlns="http://www.w3.org/2000/svg">
        <line x1="-250" y1="100" x2="120" y2="0" stroke="gray" strokeWidth="1" />
        <line x1="1920" y1="0" x2="1700" y2="100" stroke="gray" strokeWidth="1" />
      </svg> */}
    </div>
    );
  }
}
// export default BottleCarousel;