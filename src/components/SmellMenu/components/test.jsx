import React, { Component } from 'react';
export default class test extends Component {
  
  render() {

    const {  visible } = this.props;
    return (<div>
      {visible ?
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
        } 
     </div>
    );
  }
}