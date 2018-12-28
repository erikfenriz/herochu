import React from 'react';
import { Link } from 'react-router-dom'
import { compose, withState, withHandlers } from 'recompose';
import $ from "jquery";

const BottleItem = props => {
  const { visibleChangeButtonFalse, visibChange, visibleChangeButton, visible, visib, count } = props;
  // console.log(visible);
  const { name, color, img, imgGif, colorNext, link } = props.item;
  const gradient = "linear-gradient(to bottom right," + color + ", " + colorNext + ")";
  const countItem = "item" + count;
  return (
    <div>

      <div
        key={name}
        onMouseOver={visibleChangeButton}
        onMouseLeave={visibleChangeButtonFalse}
        className="bottle_item"
        style={{ width: "230px" }}
      >

        <center>
          <div className="pashaguzu">
            <div className={name}>
              <a href={link}>
                <div style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%", width: "30px", height: "30px", marginLeft: "90px", marginTop: "260px" }} className="play_circle">
                  <p className="play_circle_text">play</p>
                </div>
              </a>
            </div>
          </div>
        </center>
      </div>
      {/* {visible=== ?
          <div>
            <div className='smellMenu__svg'>
              <svg width="400" height="40" xmlns="http://www.w3.org/2000/svg">
                <line x1="340" y1="20" x2="180" y2="20" stroke="green" strokeWidth="1" />
                <polygon fill="green" points="250 20, 270 20, 260 30" />
              </svg>
            </div>
            <div style={{ opacity: 1 }} className='smellMenu__text__perfume'>Choose your perfume according to your instant emotion.</div>
          </div>
          :
          <center>
            <div style={{ color: colorNext }} className='smellMenu__text__name'>{name}</div>
          </center>
        } */}
    </div>
  );
}
const enhance = compose(
  withState('visible', 'changeVisible', 0),
  withState('visib', 'changeVisib', 0),
  withHandlers({
    visibleChangeButton: props => () => {
      props.changeVisible(1);
      // props.visibleChangeFalse(props.item);
    },
    visibleChangeButtonFalse: props => () => {
      props.changeVisible(0);
      // props.visibleChange();
    }
  })
);
export default enhance(BottleItem);