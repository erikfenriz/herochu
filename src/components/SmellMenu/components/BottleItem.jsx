import React from 'react';
import { Link } from 'react-router-dom'
import { compose, withState, withHandlers } from 'recompose';

const BottleItem = props => {
  const { visibleChangeButtonFalse,visibChange, visibleChangeButton, visible, visib, count } = props;

  const { name, color, img, imgGif, colorNext, link } = props.item;
  const gradient = "linear-gradient(to bottom right," + color + ", " + colorNext + ")";
  const countItem = "item" + count;
  // console.log(props);
  console.log(name);

  return (
    // <figure id={countItem} class="carouselItem trans3d">
<div>

    <div
      // id={countItem}

      key={name}
      onMouseOver={visibleChangeButton}
      onMouseLeave={visibleChangeButtonFalse}
      className="bottle_item"
      style={{ width: "230px" }}
    >
    
      <center>
        <Link to={link}>
          {/* { count === 0 &&
            <div style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "20px", height: "20px", marginLeft:"95px", marginTop: "160px" }} className="play_circle">
              <p className="play_circle_text1">play</p>
            </div>
          }
           { count === 1 &&
            <div style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "25px", height: "25px", marginLeft:"90px", marginTop: "190px" }} className="play_circle">
              <p className="play_circle_text2">play</p>
            </div>
          }
           { count === 2 &&
            <div  style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "27px", height: "27px", marginLeft:"90px", marginTop: "220px" }} className="play_circle">
              <p className="play_circle_text3">play</p>
            </div>
          } */}
           {/* { count === 3 && */}
            <div onClick={visibChange} style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "30px", height: "30px", marginLeft:"90px", marginTop: "260px" }} className="play_circle">
              <p className="play_circle_text">play</p>
            </div>
        
           {/* { count === 4 &&
            <div style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "27px", height: "27px", marginLeft:"90px", marginTop: "220px" }} className="play_circle">
              <p className="play_circle_text3">play</p>
            </div>
          }
           { count === 5 &&
            <div style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "25px", height: "25px", marginLeft:"90px", marginTop: "190px" }} className="play_circle">
              <p className="play_circle_text2">play</p>
            </div>
          }
           { count === 6 &&
            <div style={{ opacity: visible, background: gradient, transition: "0.0s", position: "absolute", borderRadius: "50%",  width: "20px", height: "20px", marginLeft:"95px", marginTop: "160px" }} className="play_circle">
              <p className="play_circle_text1">play</p>
            </div>
          } */}

        </Link>
        {/* {visible === 0 ? <img className={countItem} alt={name} src={img} /> : <img className={countItem} alt={name} src={imgGif} />} */}
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
    },
    visibChange: props => () => {
      props.changeVisib(1);
    }
  })
);
export default enhance(BottleItem);