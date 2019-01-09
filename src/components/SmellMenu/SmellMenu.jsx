import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { Link } from 'react-router-dom'
import ShareLink from 'react-facebook-share-link'
import ShareLinkTwitter from 'react-twitter-share-link'
import BottleCarousel from './components/BottleСarousel'
import youtube from '../../assets/images/main/MANE_youtube.svg'
import twitter from '../../assets/images/main/MANE_twitter.svg'
import facebook from '../../assets/images/main/MANE_facebook.svg'
import twitterShare from '../../assets/images/main/twitter.png'
import facebookShare from '../../assets/images/main/fb.png'
import citrus_1 from '../../assets/images/experience2/citrus/citrus_1.gif';
import citrus_2 from '../../assets/images/experience2/citrus/citrus_2.gif';
import happy_1 from '../../assets/images/experience2/happy/happy_1.gif';
import happy_2 from '../../assets/images/experience2/happy/happy_2.gif';
import natural_1 from '../../assets/images/experience2/natural/natural_1.gif';
import natural_2 from '../../assets/images/experience2/natural/natural_2.gif';
import passion_1 from '../../assets/images/experience2/passion/passion_1.gif';
import passion_2 from '../../assets/images/experience2/passion/passion_2.gif';
import rebelious_1 from '../../assets/images/experience2/rebelious/rebelious_1.gif';
import rebelious_2 from '../../assets/images/experience2/rebelious/rebelious_2.gif';
import sexy_1 from '../../assets/images/experience2/sexy/sexy_1.gif';
import sexy_2 from '../../assets/images/experience2/sexy/sexy_2.gif';
import zen_1 from '../../assets/images/experience2/zen/zen_1.gif';
import zen_2 from '../../assets/images/experience2/zen/zen_2.gif';
import '../../styles/style.css';

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

const SmellMenu = props => {

  const { visible, visibleChange, visibleChangeFalse, colorNext, name } = props;

  return (
    <div className="smellMenu-page" >
      <div className="smellMenu__header">
        <ShareLink link='https://experiences.mane.com/LetPerfumeTalk/'>
          {link => (
            <a href={link} rel="noopener noreferrer" target='_blank'><img className="twitterShare" alt="youtube" src={facebookShare} /></a>
          )}
        </ShareLink>
        <ShareLinkTwitter link='https://experiences.mane.com/LetPerfumeTalk/'>
          {link => (
            <a href={link} rel="noopener noreferrer" target='_blank'><img alt="youtube" src={twitterShare} /></a>
          )}
        </ShareLinkTwitter>
      </div>
      <h1 className='smellMenu__title'>What's your mood today?</h1>
      <div className='smellMenu__carousel'>
        <BottleCarousel colorNext={colorNext} name={name} data={data} visible={visible} visibleChange={visibleChange} visibleChangeFalse={visibleChangeFalse} />
      </div>
      <div className='smellMenu__footer'>
        <div className='smellMenu__footer__left'>
          <label className='smellMenu__footer__text'>let perfume talk </label>
          <label className='smellMenu__footer__mane'>by MANE</label>
        </div>
        <div className='smellMenu__footer__right'>
          <label className='smellMenu__footer__right_item text_footer'><Link to={"/LetPerfumeTalk/legal"}>Legal </Link></label>
          <label className='smellMenu__footer__right_item text_footer'>Credits</label>
          <label className='smellMenu__footer__right_item text_footer'>MANE © 2019</label>
          <label className='smellMenu__footer__right_item text_footer22'><img alt="youtube" src={youtube} /></label>
          <label className='smellMenu__footer__right_item '><img alt="facebook" src={facebook} /></label>
          <label className='smellMenu__footer__right_item '><img alt="twitter" src={twitter} /></label>
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
