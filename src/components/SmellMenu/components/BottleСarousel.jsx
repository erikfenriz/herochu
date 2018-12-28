import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import Slider from "react-slick";
import { Icon } from "antd";
import BottleItem from "./BottleItem";
import Test from "./test";
// import citrus_1 from '../../../assets/images/experience2/citrus/citrus_1.gif';
// import citrus_2 from '../../../assets/images/experience2/citrus/citrus_2.gif';
// import happy_1 from '../../../assets/images/experience2/happy/happy_1.gif';
// import happy_2 from '../../../assets/images/experience2/happy/happy_2.gif';
// import natural_1 from '../../../assets/images/experience2/natural/natural_1.gif';
// import natural_2 from '../../../assets/images/experience2/natural/natural_2.gif';
// import passion_1 from '../../../assets/images/experience2/passion/passion_1.gif';
// import passion_2 from '../../../assets/images/experience2/passion/passion_2.gif';
// import rebelious_1 from '../../../assets/images/experience2/rebelious/rebelious_1.gif';
// import rebelious_2 from '../../../assets/images/experience2/rebelious/rebelious_2.gif';
// import sexy_1 from '../../../assets/images/experience2/sexy/sexy_1.gif';
// import sexy_2 from '../../../assets/images/experience2/sexy/sexy_2.gif';
// import zen_1 from '../../../assets/images/experience2/zen/zen_1.gif';
// import zen_2 from '../../../assets/images/experience2/zen/zen_2.gif';
import arrow from '../../../assets/images/experience2/35.ico';
import arrow2 from '../../../assets/images/experience2/34.ico';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";


var elements = [];
var tickLoadMore = 0;
var pasha = false;

export default class BottleCarousel extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init = this.init.bind(this);
    for (var i = 0; i <= 100; i++) {
      this.props.data.forEach((item, i) =>
        elements.push(<li className="carousel-item">
          <BottleItem pasha={pasha} count={i} visibleChangeFalse={this.props.visibleChangeFalse} visibleChange={this.props.visibleChange} visible={this.props.visible} item={item} />
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
    // var scroll = 0;
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
        // console.log("----------", scroll);
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
    // let loadMore = () => {
    //   if (container[0]) {
    //     var items=[];
    //     for (var i = 0; i < data.length; i++) {
    //       // items.push(<BottleItem count={i} visibleChangeFalse={this.props.visibleChangeFalse} visibleChange={this.props.visibleChange} visible={this.props.visible} item={data[i]} />)
    //       //  items = ReactDOMServer.renderToString(<BottleItem count={i} visibleChangeFalse={this.props.visibleChangeFalse} visibleChange={this.props.visibleChange} visible={this.props.visible} item={data[i]} />)
    //      // items.push(<li className= 'carousel-item'> <BottleItem count={i} visibleChangeFalse={this.props.visibleChangeFalse} visibleChange={this.props.visibleChange} visible={this.props.visible} item={data[i]} /></li>)
    //       //  console.log("_______________________________________________________________--");
    //       // var item = document.createElement('li');
    //       // item.className = 'carousel-item';
    //       //  item.innerHTML = items
    //       // container[0].dangerouslySetInnerHTML={__html: <p>PASHA</p>}
    //       // container[0].appendChild(item);
    //     // console.log("pasha",items)

    //     }

    //     // if(this.state.element !== items) {this.setState({element:items})}
    //     tickLoadMore++;
    //   }
    //   // $('.carousel-frame').scrollLeft(100200);
    // }

    // if (container[0]) {
    //   container[0].addEventListener('scroll', function () {
    //   //  console.log(container[0].scrollLeft,"'scroll'",container[0].clientWidth ,"'scroll'",container[0].scrollWidth);

    //     if (container[0].scrollLeft + container[0].clientWidth >= container[0].scrollWidth) {
    //       loadMore();
    //     }
    //   });
    // }
    // loadMore();
  }
  render() {

    const { visibleChangeFalse, visibleChange, visible } = this.props;
    // console.log(visible);
    // if($('.smellMenu__svg')[0]){

    //     // eslint-disable-next-line no-unused-expressions
    //     visible ?  $('.smellMenu__svg')[0].id = "smellMenu__svg2" : $('.smellMenu__svg')[0].id = "smellMenu__svg"
    // }

    // console.log(pasha);


    $(document).ready(this.init);
    return (<div>
      <div className="leftTopLine">
        <svg height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100" y2="100" stroke="gray" strokeWidth="1" />
        </svg>
      </div>
      <div className="centerLineRight">
        <svg xmlns="http://www.w3.org/2000/svg" >
  
        <path class="st0" d="M14.6,25L37.7,1.9c0.4-0.4,0.4-1.1,0-1.5c-0.4-0.4-1.1-0.4-1.5,0L12.3,24.2c-0.4,0.4-0.4,1.1,0,1.5l23.9,23.9
			c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3c0.4-0.4,0.4-1.1,0-1.5L14.6,25z"/>
	
      </svg>
    </div>
      <div className="centerLineLeft">
        <img alt="right" src={arrow2} />
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
      {/* {visible ?
          <div>
            <div className='smellMenu__svg' id="pasha">
              <svg width="400" height="40" xmlns="http://www.w3.org/2000/svg">
                <line x1="340" y1="20" x2="180" y2="20" stroke="green" strokeWidth="1" />
                <polygon fill="green" points="250 20, 270 20, 260 30" />
              </svg>
            </div>
            <div style={{ opacity: 1 }} className='smellMenu__text__perfume'>Choose your perfume according to your instant emotion.</div>
          </div>
           :
          <center>
            <div style={{ color: this.props.colorNext }} className='smellMenu__text__name'>{ this.props.name}</div>
          </center>
        }  */}
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