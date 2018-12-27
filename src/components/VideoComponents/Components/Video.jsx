import React from 'react';
import inLoveMP4 from "../../../assets/videos/experience2/mp4/in_love.mp4";
import inLoveWebM from "../../../assets/videos/experience2/webm/alive.webm";
import MP3 from "../../../assets/audio/in_love.mp3";
import featherClick from "../../../assets/images/experience2/cursor/feather-click.png";
import featherClicked from "../../../assets/images/experience2/cursor/feather-clicked.png";
import {Link} from "react-router-dom";
import facebook from "../../../assets/images/main/facebook-logo-button.svg";
import twitter from "../../../assets/images/main/twitter-logo-button.svg";
import google from "../../../assets/images/main/google-plus-logo-button.svg";

export default class Video extends React.Component {
    render() {
        return (
            <video className="letPerfumeTalk__video"
                   autoPlay={true}
                   loop={true}
                   muted={true}
                   ref={this.props.videoRef}
            >
                <source src={this.props.mp4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                <source src={this.props.webm} type="video/webm"/>
            </video>
        )
    }
}

