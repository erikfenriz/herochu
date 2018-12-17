import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { Icon } from 'antd';
import splitting from 'splitting';
import BottleCarousel from './components/BottleСarousel'
import youtube from '../../assets/images/main/MANE_youtube.svg'
import twitter from '../../assets/images/main/MANE_twitter.svg'
import facebook from '../../assets/images/main/MANE_facebook.svg'
import '../../styles/style.css';

const SmellMenu = props => {
  const { visible, visibleChange, visibleChangeFalse, colorNext, name } = props;

  return (
    <div className="smellMenu-page" >
      <h1 className='smellMenu__title'>What's your mood today?</h1>
      {/* <div className='smellMenu__svg'> */}

      {/* </div> */}

      <div className='smellMenu__carousel'>
        <BottleCarousel visible={visible} visibleChange={visibleChange} visibleChangeFalse={visibleChangeFalse} />
     
        {visible ?
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
        }

      </div>
      <div className='smellMenu__footer'>
        <div className='smellMenu__footer__left'>
          <label className='smellMenu__footer__text'>let perfume talk </label>
          <label className='smellMenu__footer__mane'>by MANE</label>
        </div>
        <div className='smellMenu__footer__right'>
          <label className='smellMenu__footer__right_item'>Legal </label>
          <label className='smellMenu__footer__right_item'>Credits</label>
          <label className='smellMenu__footer__right_item'>MANE©2018</label>
          <label className='smellMenu__footer__right_item'><img alt="youtube" src={youtube}  /></label>
          <label className='smellMenu__footer__right_item'><img alt="facebook" src={facebook} /></label>
          <label className='smellMenu__footer__right_item'><img alt="twitter" src={twitter}  /></label>
        </div>
      </div>
    </div>
  );
}

const enhance = compose(
  withState('visible', 'changeVisible', false),
  withState('name', 'visibleChangeName', ''),
  withState('colorNext', 'visibleChangeColor', ''),
  withHandlers({
    visibleChange: props => () => {
      props.changeVisible(true);
    },
    visibleChangeFalse: props => (item) => {
      props.changeVisible(false);
      props.visibleChangeName(item.name);
      props.visibleChangeColor(item.colorNext);
    }
  })
);
export default enhance(SmellMenu);
