import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import $ from "jquery";

  export default class BottleItem extends Component {
     constructor(props) {  
          super(props);
        this.state = {visible: 0};
  }

    visibleChangeButton = () => {
      this.setState({visible: 1})
      this.props.changeState(this.props.item)
  }

    visibleChangeButtonFalse = () => {
      this.setState({visible: 0})
  }

  render() {

 const { count } = this.props;
 const { visible } = this.state;
  const { name, color, colorNext, link } = this.props.item;
  const gradient = "linear-gradient(to bottom right," + color + ", " + colorNext + ")";
    return(<div
        key={name}
        onMouseOver={this.visibleChangeButton}
        onMouseLeave={this.visibleChangeButtonFalse}
        className="bottle_item"
        style={{ width: "230px" }}
      >
        <center>
          <div >
            <div className={name}>
              <Link to={link}>
                <div style={{ opacity: visible, background: gradient, transition: "0.3s", position: "absolute", borderRadius: "50%", width: "30px", height: "30px", marginLeft: "90px", marginTop: "260px" }} className="play_circle">
                  <p className="play_circle_text">play</p>
                </div>
              </Link>
            </div>
          </div>
        </center>
      </div>
    )
  }
}