import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const BottleItem = props => {
  const { visibleChangeButtonFalse, visibleChangeButton, visible } = props;
  const { name, color, img, imgGif, colorNext } = props.item;
  const gradient = "linear-gradient(to bottom right," + color + ", " + colorNext + ")";
  return (
    <div
      key={name}
      onMouseOver={visibleChangeButton}
      onMouseLeave={visibleChangeButtonFalse}
      className="bottle_item"
    >
      <center>
        <div style={{ opacity: visible, background: gradient }} className="play_circle">
          <p className="play_circle_text">play</p>
        </div>
        {visible === 0 ? <img className="bottle_img" alt={name} src={img} /> : <img className="bottle_img" alt={name} src={imgGif} />}
      </center>
    </div>
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