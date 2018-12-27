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
    for(var i=0;i<=100;i++){
      this.props.data.forEach((item, i) =>
      elements.push(<li class="carousel-item">
        <BottleItem  pasha={pasha} count={i} visibleChangeFalse={this.props.visibleChangeFalse} visibleChange={this.props.visibleChange} visible={this.props.visible} item={item} />
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
        scroll += speed / 3;
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

      if ($(item0)[0]) {
        var coordinate0 = $(item0)[0].getBoundingClientRect().x + 100;
        var coordinate1 = $(item1)[0].getBoundingClientRect().x + 100;
        var coordinate2 = $(item2)[0].getBoundingClientRect().x + 100;
        var coordinate3 = $(item3)[0].getBoundingClientRect().x + 100;
        var coordinate4 = $(item4)[0].getBoundingClientRect().x + 100;
        var coordinate5 = $(item5)[0].getBoundingClientRect().x + 100;
        var coordinate6 = $(item6)[0].getBoundingClientRect().x + 100;
      }



// console.log($(item1)[0])

      if (coordinate0 < window.innerWidth / 7 && coordinate0 > 0) {
        // console.log("_______________1");
        $(item0)[0].id = "item0";
      }
      if (coordinate0 > window.innerWidth / 7 && coordinate0 < (window.innerWidth / 7) * 2) {
        $(item0)[0].id = "item1";
      }
      if (coordinate0 > (window.innerWidth / 7) * 2 && coordinate0 < (window.innerWidth / 7) * 3) {
        $(item0)[0].id = "item2";
      }
      if (coordinate0 > (window.innerWidth / 7) * 3 && coordinate0 < (window.innerWidth / 7) * 4) {
        $(item0)[0].id = "item3";
      }
      if (coordinate0 > (window.innerWidth / 7) * 4 && coordinate0 < (window.innerWidth / 7) * 5) {
        $(item0)[0].id = "item2";
      }
      if (coordinate0 > (window.innerWidth / 7) * 5 && coordinate0 < (window.innerWidth / 7) * 6) {
        $(item0)[0].id = "item1";
      }
      if (coordinate0 > (window.innerWidth / 7) * 6 && coordinate0 < window.innerWidth) {
        $(item0)[0].id = "item0";
      }
      //----------------------------------------------------------------------------
      if (coordinate1 < window.innerWidth / 7 && coordinate1 > 0) {
        $(item1)[0].id = "item0";
      }
      if (coordinate1 > window.innerWidth / 7 && coordinate1 < (window.innerWidth / 7) * 2) {
        $(item1)[0].id = "item1";
      }
      if (coordinate1 > (window.innerWidth / 7) * 2 && coordinate1 < (window.innerWidth / 7) * 3) {
        $(item1)[0].id = "item2";
      }
      if (coordinate1 > (window.innerWidth / 7) * 3 && coordinate1 < (window.innerWidth / 7) * 4) {
        $(item1)[0].id = "item3";
      }
      if (coordinate1 > (window.innerWidth / 7) * 4 && coordinate1 < (window.innerWidth / 7) * 5) {
        $(item1)[0].id = "item2";
      }
      if (coordinate1 > (window.innerWidth / 7) * 5 && coordinate1 < (window.innerWidth / 7) * 6) {
        $(item1)[0].id = "item1";
      }
      if (coordinate1 > (window.innerWidth / 7) * 6 && coordinate1 < window.innerWidth) {
        $(item1)[0].id = "item0";
      }
      //----------------------------------------------------------------------------
      if (coordinate2 < window.innerWidth / 7 && coordinate2 > 0) {
        $(item2)[0].id = "item0";
      }
      if (coordinate2 > window.innerWidth / 7 && coordinate2 < (window.innerWidth / 7) * 2) {
        $(item2)[0].id = "item1";
      }
      if (coordinate2 > (window.innerWidth / 7) * 2 && coordinate2 < (window.innerWidth / 7) * 3) {
        $(item2)[0].id = "item2";
      }
      if (coordinate2 > (window.innerWidth / 7) * 3 && coordinate2 < (window.innerWidth / 7) * 4) {
        $(item2)[0].id = "item3";
      }
      if (coordinate2 > (window.innerWidth / 7) * 4 && coordinate2 < (window.innerWidth / 7) * 5) {
        $(item2)[0].id = "item2";
      }
      if (coordinate2 > (window.innerWidth / 7) * 5 && coordinate2 < (window.innerWidth / 7) * 6) {
        $(item2)[0].id = "item1";
      }
      if (coordinate2 > (window.innerWidth / 7) * 6 && coordinate2 < window.innerWidth) {
        $(item2)[0].id = "item0";
      }
      //----------------------------------------------------------------------------
      if (coordinate3 < window.innerWidth / 7 && coordinate3 > 0) {
        $(item3)[0].id = "item0";
      }
      if (coordinate3 > window.innerWidth / 7 && coordinate3 < (window.innerWidth / 7) * 2) {
        $(item3)[0].id = "item1";
      }
      if (coordinate3 > (window.innerWidth / 7) * 2 && coordinate3 < (window.innerWidth / 7) * 3) {
        $(item3)[0].id = "item2";
      }
      if (coordinate3 > (window.innerWidth / 7) * 3 && coordinate3 < (window.innerWidth / 7) * 4) {
        $(item3)[0].id = "item3";
      }
      if (coordinate3 > (window.innerWidth / 7) * 4 && coordinate3 < (window.innerWidth / 7) * 5) {
        $(item3)[0].id = "item2";
      }
      if (coordinate3 > (window.innerWidth / 7) * 5 && coordinate3 < (window.innerWidth / 7) * 6) {
        $(item3)[0].id = "item1";
      }
      if (coordinate3 > (window.innerWidth / 7) * 6 && coordinate3 < window.innerWidth) {
        $(item3)[0].id = "item0";
      }
      //----------------------------------------------------------------------------
      if (coordinate4 < window.innerWidth / 7 && coordinate4 > 0) {
        $(item4)[0].id = "item0";
      }
      if (coordinate4 > window.innerWidth / 7 && coordinate4 < (window.innerWidth / 7) * 2) {
        $(item4)[0].id = "item1";
      }
      if (coordinate4 > (window.innerWidth / 7) * 2 && coordinate4 < (window.innerWidth / 7) * 3) {
        $(item4)[0].id = "item2";
      }
      if (coordinate4 > (window.innerWidth / 7) * 3 && coordinate4 < (window.innerWidth / 7) * 4) {
        $(item4)[0].id = "item3";
      }
      if (coordinate4 > (window.innerWidth / 7) * 4 && coordinate4 < (window.innerWidth / 7) * 5) {
        $(item4)[0].id = "item2";
      }
      if (coordinate4 > (window.innerWidth / 7) * 5 && coordinate4 < (window.innerWidth / 7) * 6) {
        $(item4)[0].id = "item1";
      }
      if (coordinate4 > (window.innerWidth / 7) * 6 && coordinate4 < window.innerWidth) {
        $(item4)[0].id = "item0";
      }
      //----------------------------------------------------------------------------
      if (coordinate5 < window.innerWidth / 7 && coordinate5 > 0) {
        $(item5)[0].id = "item0";
      }
      if (coordinate5 > window.innerWidth / 7 && coordinate5 < (window.innerWidth / 7) * 2) {
        $(item5)[0].id = "item1";
      }
      if (coordinate5 > (window.innerWidth / 7) * 2 && coordinate5 < (window.innerWidth / 7) * 3) {
        $(item5)[0].id = "item2";
      }
      if (coordinate5 > (window.innerWidth / 7) * 3 && coordinate5 < (window.innerWidth / 7) * 4) {
        $(item5)[0].id = "item3";
      }
      if (coordinate5 > (window.innerWidth / 7) * 4 && coordinate5 < (window.innerWidth / 7) * 5) {
        $(item5)[0].id = "item2";
      }
      if (coordinate5 > (window.innerWidth / 7) * 5 && coordinate5 < (window.innerWidth / 7) * 6) {
        $(item5)[0].id = "item1";
      }
      if (coordinate5 > (window.innerWidth / 7) * 6 && coordinate5 < window.innerWidth) {
        $(item5)[0].id = "item0";
      }
      //----------------------------------------------------------------------------
      if (coordinate6 < window.innerWidth / 7 && coordinate6 > 0) {
        $(item6)[0].id = "item0";
      }
      if (coordinate6 > window.innerWidth / 7 && coordinate6 < (window.innerWidth / 7) * 2) {
        $(item6)[0].id = "item1";
      }
      if (coordinate6 > (window.innerWidth / 7) * 2 && coordinate6 < (window.innerWidth / 7) * 3) {
        $(item6)[0].id = "item2";
      }
      if (coordinate6 > (window.innerWidth / 7) * 3 && coordinate6 < (window.innerWidth / 7) * 4) {
        $(item6)[0].id = "item3";
      }
      if (coordinate6 > (window.innerWidth / 7) * 4 && coordinate6 < (window.innerWidth / 7) * 5) {
        $(item6)[0].id = "item2";
      }
      if (coordinate6 > (window.innerWidth / 7) * 5 && coordinate6 < (window.innerWidth / 7) * 6) {
        $(item6)[0].id = "item1";
      }
      if (coordinate6 > (window.innerWidth / 7) * 6 && coordinate6 < window.innerWidth) {
        $(item6)[0].id = "item0";
        // }
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
  
console.log(pasha);
  

    $(document).ready(this.init);
    return (<div>
      <div className="leftTopLine">
        <svg  height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100" y2="100" stroke="gray" strokeWidth="1" />
        </svg>
      </div>
      <div className="centerLineRight">
      <img alt="left" src={arrow}/>
      </div>
      <div  className="centerLineLeft">
      <img alt="right" src={arrow2}/>
      </div>
      <div className="rightTopLine">
        <svg  height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="320" y1="0" x2="0" y2="220" stroke="gray" strokeWidth="1" />
        </svg>
      </div>

      <div id="infinite-list" ref={this.myRef} className="carousel-frame containerCenter">
        {elements}
      </div>
        <Test colorNext={this.props.colorNext} visible = {visible} name={this.props.name}/>
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
        <svg  height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="-120" y1="150" x2="110" y2="0" stroke="gray" strokeWidth="1" />
        </svg>
      </div>
      <div  className="rightBottomLine">
        <svg  height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="180" y1="0" x2="320" y2="100" stroke="gray" strokeWidth="1" />
        </svg>
      </div>
    </div>
    );
  }
}