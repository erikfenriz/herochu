import React, { Component } from 'react';
import BottleItem from "./BottleItem";
import Test from "./test";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";


var elements = [];

export default class BottleCarousel extends Component {
  constructor(props) {  
    super(props);
    this.myRef = React.createRef();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init = this.init.bind(this);
    for (var i = 0; i <= 100; i++) {
      this.props.data.forEach((item, i) =>
        elements.push(<li className="carousel-item">
          <BottleItem count={i} visibleChangeFalse={this.props.visibleChangeFalse} visibleChange={this.props.visibleChange} visible={this.props.visible} item={item} />
        </li>
        )
      )
    }
  }

  onMouseMove(event) {
    const valueMouse = -(-(window.innerWidth * .5) + event.layerX);
    setInterval(valueMouse > 0 ? this.myRef.current.slickNext() : this.myRef.current.slickPrev(), 1)
  }
  init() {

    var speed = 0;
    var container = $('.carousel-frame');
    var scroll = 100200;
    var container_w = container.width();
    container.on('mousemove', function (e) {
      var mouse_x = e.pageX - container.offset().left;
      var mouseperc = 100 * mouse_x / container_w;
      speed = mouseperc - 50;
    }).on('mouseleave', function () {
      speed = 0;
    });

    function updatescroll() {
      var max_scroll = container[0].scrollWidth;
      if (speed !== 0) {
        scroll += speed / 1;
        if (scroll < 0) scroll = 0;
        if (scroll > max_scroll) scroll = max_scroll;
        $('.carousel-frame').scrollLeft(scroll);
      }
      var item0 = '.natural';
      var item1 = '.alive';
      var item2 = '.happy';
      var item3 = '.in_love';
      var item4 = '.rebellious';
      var item5 = '.sexy';
      var item6 = '.zen';
      var massCoordinate0 = [];
      var massCoordinate1 = [];
      var massCoordinate2 = [];
      var massCoordinate3 = [];
      var massCoordinate4 = [];
      var massCoordinate5 = [];
      var massCoordinate6 = [];
      for (var i = 0; i < $(item0).length; i++) {
        massCoordinate0.push($(item0)[i].getBoundingClientRect().x + 70)
        massCoordinate1.push($(item1)[i].getBoundingClientRect().x + 70)
        massCoordinate2.push($(item2)[i].getBoundingClientRect().x + 70)
        massCoordinate3.push($(item3)[i].getBoundingClientRect().x + 70)
        massCoordinate4.push($(item4)[i].getBoundingClientRect().x + 70)
        massCoordinate5.push($(item5)[i].getBoundingClientRect().x + 70)
        massCoordinate6.push($(item6)[i].getBoundingClientRect().x + 70)
      }

      for (var i = 0; i < massCoordinate0.length; i++) {
        if (massCoordinate0[i] <= window.innerWidth / 7 && massCoordinate0[i] > 0) {
          $(item0)[i].id = "item0";
        }
        if (massCoordinate0[i] > window.innerWidth / 7 && massCoordinate0[i] <= (window.innerWidth / 7) * 2) {
          $(item0)[i].id = "item1";
        }
        if (massCoordinate0[i] > (window.innerWidth / 7) * 2 && massCoordinate0[i] <= (window.innerWidth / 7) * 3) {
          $(item0)[i].id = "item2";
        }
        if (massCoordinate0[i] > (window.innerWidth / 7) * 3 && massCoordinate0[i] <= (window.innerWidth / 7) * 4) {
          $(item0)[i].id = "item3";
        }
        if (massCoordinate0[i] > (window.innerWidth / 7) * 4 && massCoordinate0[i] <= (window.innerWidth / 7) * 5) {
          $(item0)[i].id = "item2";
        }
        if (massCoordinate0[i] > (window.innerWidth / 7) * 5 && massCoordinate0[i] <= (window.innerWidth / 7) * 6) {
          $(item0)[i].id = "item1";
        }
        if (massCoordinate0[i] > (window.innerWidth / 7) * 6 && massCoordinate0[i] <= window.innerWidth) {
          $(item0)[i].id = "item0";
        }
      }

      // ---------------------------------------------------------------------------------------------------------------------------
      for (var i = 0; i < massCoordinate1.length; i++) {
        if (massCoordinate1[i] <= window.innerWidth / 7 && massCoordinate1[i] > 0) {
          $(item1)[i].id = "item0";
        }
        if (massCoordinate1[i] > window.innerWidth / 7 && massCoordinate1[i] <= (window.innerWidth / 7) * 2) {
          $(item1)[i].id = "item1";
        }
        if (massCoordinate1[i] > (window.innerWidth / 7) * 2 && massCoordinate1[i] <= (window.innerWidth / 7) * 3) {
          $(item1)[i].id = "item2";
        }
        if (massCoordinate1[i] > (window.innerWidth / 7) * 3 && massCoordinate1[i] <= (window.innerWidth / 7) * 4) {
          $(item1)[i].id = "item3";
        }
        if (massCoordinate1[i] > (window.innerWidth / 7) * 4 && massCoordinate1[i] <= (window.innerWidth / 7) * 5) {
          $(item1)[i].id = "item2";
        }
        if (massCoordinate1[i] > (window.innerWidth / 7) * 5 && massCoordinate1[i] <= (window.innerWidth / 7) * 6) {
          $(item1)[i].id = "item1";
        }
        if (massCoordinate1[i] > (window.innerWidth / 7) * 6 && massCoordinate1[i] <= window.innerWidth) {
          $(item1)[i].id = "item0";
        }
      }
      // ---------------------------------------------------------------------------------------------------------------------------
      for (var i = 0; i < massCoordinate2.length; i++) {
        if (massCoordinate2[i] <= window.innerWidth / 7 && massCoordinate2[i] > 0) {
          $(item2)[i].id = "item0";
        }
        if (massCoordinate2[i] > window.innerWidth / 7 && massCoordinate2[i] <= (window.innerWidth / 7) * 2) {
          $(item2)[i].id = "item1";
        }
        if (massCoordinate2[i] > (window.innerWidth / 7) * 2 && massCoordinate2[i] <= (window.innerWidth / 7) * 3) {
          $(item2)[i].id = "item2";
        }
        if (massCoordinate2[i] > (window.innerWidth / 7) * 3 && massCoordinate2[i] <= (window.innerWidth / 7) * 4) {
          $(item2)[i].id = "item3";
        }
        if (massCoordinate2[i] > (window.innerWidth / 7) * 4 && massCoordinate2[i] <= (window.innerWidth / 7) * 5) {
          $(item2)[i].id = "item2";
        }
        if (massCoordinate2[i] > (window.innerWidth / 7) * 5 && massCoordinate2[i] <= (window.innerWidth / 7) * 6) {
          $(item2)[i].id = "item1";
        }
        if (massCoordinate2[i] > (window.innerWidth / 7) * 6 && massCoordinate2[i] <= window.innerWidth) {
          $(item2)[i].id = "item0";
        }
      }
      // ---------------------------------------------------------------------------------------------------------------------------
      for (var i = 0; i < massCoordinate3.length; i++) {
        if (massCoordinate3[i] <= window.innerWidth / 7 && massCoordinate3[i] > 0) {
          $(item3)[i].id = "item0";
        }
        if (massCoordinate3[i] > window.innerWidth / 7 && massCoordinate3[i] <= (window.innerWidth / 7) * 2) {
          $(item3)[i].id = "item1";
        }
        if (massCoordinate3[i] > (window.innerWidth / 7) * 2 && massCoordinate3[i] <= (window.innerWidth / 7) * 3) {
          $(item3)[i].id = "item2";
        }
        if (massCoordinate3[i] > (window.innerWidth / 7) * 3 && massCoordinate3[i] <= (window.innerWidth / 7) * 4) {
          $(item3)[i].id = "item3";
        }
        if (massCoordinate3[i] > (window.innerWidth / 7) * 4 && massCoordinate3[i] <= (window.innerWidth / 7) * 5) {
          $(item3)[i].id = "item2";
        }
        if (massCoordinate3[i] > (window.innerWidth / 7) * 5 && massCoordinate3[i] <= (window.innerWidth / 7) * 6) {
          $(item3)[i].id = "item1";
        }
        if (massCoordinate3[i] > (window.innerWidth / 7) * 6 && massCoordinate3[i] <= window.innerWidth) {
          $(item3)[i].id = "item0";
        }
      }
      // ---------------------------------------------------------------------------------------------------------------------------
      for (var i = 0; i < massCoordinate4.length; i++) {
        if (massCoordinate4[i] <= window.innerWidth / 7 && massCoordinate4[i] > 0) {
          $(item4)[i].id = "item0";
        }
        if (massCoordinate4[i] > window.innerWidth / 7 && massCoordinate4[i] <= (window.innerWidth / 7) * 2) {
          $(item4)[i].id = "item1";
        }
        if (massCoordinate4[i] > (window.innerWidth / 7) * 2 && massCoordinate4[i] <= (window.innerWidth / 7) * 3) {
          $(item4)[i].id = "item2";
        }
        if (massCoordinate4[i] > (window.innerWidth / 7) * 3 && massCoordinate4[i] <= (window.innerWidth / 7) * 4) {
          $(item4)[i].id = "item3";
        }
        if (massCoordinate4[i] > (window.innerWidth / 7) * 4 && massCoordinate4[i] <= (window.innerWidth / 7) * 5) {
          $(item4)[i].id = "item2";
        }
        if (massCoordinate4[i] > (window.innerWidth / 7) * 5 && massCoordinate4[i] <= (window.innerWidth / 7) * 6) {
          $(item4)[i].id = "item1";
        }
        if (massCoordinate4[i] > (window.innerWidth / 7) * 6 && massCoordinate4[i] <= window.innerWidth) {
          $(item4)[i].id = "item0";
        }
      }
      // ---------------------------------------------------------------------------------------------------------------------------
      for (var i = 0; i < massCoordinate5.length; i++) {
        if (massCoordinate5[i] <= window.innerWidth / 7 && massCoordinate5[i] > 0) {
          $(item5)[i].id = "item0";
        }
        if (massCoordinate5[i] > window.innerWidth / 7 && massCoordinate5[i] <= (window.innerWidth / 7) * 2) {
          $(item5)[i].id = "item1";
        }
        if (massCoordinate5[i] > (window.innerWidth / 7) * 2 && massCoordinate5[i] <= (window.innerWidth / 7) * 3) {
          $(item5)[i].id = "item2";
        }
        if (massCoordinate5[i] > (window.innerWidth / 7) * 3 && massCoordinate5[i] <= (window.innerWidth / 7) * 4) {
          $(item5)[i].id = "item3";
        }
        if (massCoordinate5[i] > (window.innerWidth / 7) * 4 && massCoordinate5[i] <= (window.innerWidth / 7) * 5) {
          $(item5)[i].id = "item2";
        }
        if (massCoordinate5[i] > (window.innerWidth / 7) * 5 && massCoordinate5[i] <= (window.innerWidth / 7) * 6) {
          $(item5)[i].id = "item1";
        }
        if (massCoordinate5[i] > (window.innerWidth / 7) * 6 && massCoordinate5[i] <= window.innerWidth) {
          $(item5)[i].id = "item0";
        }
      }
      // ---------------------------------------------------------------------------------------------------------------------------
      for (var i = 0; i < massCoordinate6.length; i++) {
        if (massCoordinate6[i] <= window.innerWidth / 7 && massCoordinate6[i] > 0) {
          $(item6)[i].id = "item0";
        }
        if (massCoordinate6[i] > window.innerWidth / 7 && massCoordinate6[i] <= (window.innerWidth / 7) * 2) {
          $(item6)[i].id = "item1";
        }
        if (massCoordinate6[i] > (window.innerWidth / 7) * 2 && massCoordinate6[i] <= (window.innerWidth / 7) * 3) {
          $(item6)[i].id = "item2";
        }
        if (massCoordinate6[i] > (window.innerWidth / 7) * 3 && massCoordinate6[i] <= (window.innerWidth / 7) * 4) {
          $(item6)[i].id = "item3";
        }
        if (massCoordinate6[i] > (window.innerWidth / 7) * 4 && massCoordinate6[i] <= (window.innerWidth / 7) * 5) {
          $(item6)[i].id = "item2";
        }
        if (massCoordinate6[i] > (window.innerWidth / 7) * 5 && massCoordinate6[i] <= (window.innerWidth / 7) * 6) {
          $(item6)[i].id = "item1";
        }
        if (massCoordinate6[i] > (window.innerWidth / 7) * 6 && massCoordinate6[i] <= window.innerWidth) {
          $(item6)[i].id = "item0";
        }
      }

      window.requestAnimationFrame(updatescroll);
    }
    window.requestAnimationFrame(updatescroll);
    
  }
  render() {

    const {  visible } = this.props;
  
    $(document).ready(this.init);
    return (<div>
      <div className="leftTopLine">
        <svg height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100" y2="100" stroke="gray" strokeWidth="1" />
        </svg>
      </div>
      <div className="centerLineRight">
        <svg width="50" xmlns="http://www.w3.org/2000/svg" >
  
      	<path class="st0" d="M37.7,24.2L13.8,0.3c-0.4-0.4-1.1-0.4-1.5,0s-0.4,1.1,0,1.5L35.4,25L12.3,48.1c-0.4,0.4-0.4,1.1,0,1.5
			c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3l23.9-23.9C38.1,25.3,38.1,24.7,37.7,24.2z" />
	
	
      </svg>
    </div>
      <div className="centerLineLeft">
      <svg  width="50" xmlns="http://www.w3.org/2000/svg" >
      <path class="st0" d="M14.6,25L37.7,1.9c0.4-0.4,0.4-1.1,0-1.5c-0.4-0.4-1.1-0.4-1.5,0L12.3,24.2c-0.4,0.4-0.4,1.1,0,1.5l23.9,23.9
			c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3c0.4-0.4,0.4-1.1,0-1.5L14.6,25z"/>
        </svg>
      </div>
      <div className="rightTopLine">
        <svg height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="320" y1="0" x2="0" y2="220" stroke="gray" strokeWidth="1" />
        </svg>
      </div>

      <div id="infinite-list" ref={this.myRef} className="carousel-frame containerCenter">
        {elements}
      </div>
      <Test colorNext={this.props.colorNext} visible={visible} name={this.props.name} />
    
    <div className="leftBottomLine">
      <svg height="100" xmlns="http://www.w3.org/2000/svg">
        <line x1="-120" y1="150" x2="110" y2="0" stroke="gray" strokeWidth="1" />
      </svg>
    </div>
      <div className="rightBottomLine">
        <svg height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="180" y1="0" x2="320" y2="100" stroke="gray" strokeWidth="1" />
        </svg>
      </div>
    </div >
    );
  }
}