import React from 'react';
import { Link } from 'react-router-dom'
import { compose, withState, withHandlers } from 'recompose';

const BottleItem = props => {
  const { visibleChangeButtonFalse, visibChange, visibleChangeButton, visible, visib, count } = props;
console.log(visible);
  const { name, color, img, imgGif, colorNext, link } = props.item;
  const gradient = "linear-gradient(to bottom right," + color + ", " + colorNext + ")";
  const countItem = "item" + count;
  return (
    <div>

      <div
        key={name}
        // onMouseOver={visibleChangeButton}
        // onMouseLeave={visibleChangeButtonFalse}
        className="bottle_item"
        style={{ width: "230px" }}
      >

        <center>
          <a href={link}>
          <div  style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%", width: "30px", height: "30px", marginLeft: "90px", marginTop: "260px" }} className="play_circle">
              <p className="play_circle_text">play</p>
            </div> 
          </a>
          <div class={name}></div>
        </center>
      </div>
    </div>
  );
}
const enhance = compose(
  withState('visible', 'changeVisible', 0),
  withState('visib', 'changeVisib', 0),
  withHandlers({
    visibleChangeButton: props => () => {
      props.changeVisible(1);
      props.visibleChangeFalse(props.item);
    },
    visibleChangeButtonFalse: props => () => {
      props.changeVisible(0);
      props.visibleChange();
    }
  })
);
export default enhance(BottleItem);