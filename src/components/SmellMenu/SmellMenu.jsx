import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../styles/style.css';
import BottleСarousel from './components/BottleСarousel';

export default class SmellMenu extends Component {

  render() {

    return (
      <div className="smellMenu-page" >
        <h1 className='smellMenu__title'>What's your mood today?</h1>
        <div className='smellMenu__carousel'>
          <BottleСarousel />
        </div>
        <div className='smellMenu__svg'>
          <svg width="400" height="40" xmlns="http://www.w3.org/2000/svg">
            <line x1="340" y1="20" x2="180" y2="20" stroke="green" stroke-width="1" />
            <polygon fill="green" points="250 20, 270 20, 260 30"/>
          </svg>
        </div>
        <div className='smellMenu__text__perfume'>Choose your perfume according to your instant emotion.</div>
        <div className='smellMenu__footer'>
          <div className='smellMenu__footer__left'>
            <label className='smellMenu__footer__text'>let perfume talk </label><label className='smellMenu__footer__mane'>by MANE</label>
          </div>
          <div className='smellMenu__footer__right'>
            <label className='smellMenu__footer__right_item'>Legal </label>
            <label className='smellMenu__footer__right_item'>Credits</label>
            <label className='smellMenu__footer__right_item'>MANE©2018</label>
            <label className='smellMenu__footer__right_item'><Icon type="youtube" /></label>
            <label className='smellMenu__footer__right_item'><Icon type="facebook" /></label>
            <label className='smellMenu__footer__right_item'><Icon type="twitter" /></label>
          </div>
        </div>
      </div>
    );
  }
}