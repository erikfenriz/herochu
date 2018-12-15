import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const BottleItem = props => {
  const { visibleChangeButtonFalse, visibleChangeButton, visible, count } = props;

  const { name, color, img, imgGif, colorNext } = props.item;
  const gradient = "linear-gradient(to bottom right," + color + ", " + colorNext + ")";
  const countItem = "item" + count;
  // console.log(props);
  return (
    // <figure id={countItem} class="carouselItem trans3d">
   
      <div
        // id={countItem}
        
        key={name}
        // onMouseOver={visibleChangeButton}
        // onMouseLeave={visibleChangeButtonFalse}
        className="bottle_item"
        style={{width:"230px"}}
      >
        <center>
          
          <div style={{ opacity: visible, background: gradient }} className="play_circle">
            <p className="play_circle_text">play</p>
          </div>
          {visible === 0 ? <img  className={countItem} alt={name} src={img} /> : <img  className={countItem} alt={name} src={imgGif} />}
        </center>
      </div>
    // </figure>
  );
}
const enhance = compose(
  withState('visible', 'changeVisible', 0),
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