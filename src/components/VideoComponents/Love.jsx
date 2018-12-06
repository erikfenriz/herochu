import React, {Component} from 'react';
import loveMP4 from '../../assets/videos/experience2/mp4/in_love.mp4';
import loveWebM from "../../assets/videos/experience2/webm/love.webm";

export default class Love extends Component {
    video = React.createRef();
    setTitle = () => {
        document.title = "Feeling in love today? Let Perfume Talk by MANE";
    };
    playVideo = () => {

        this.video.current.play();
    };

    componentDidMount() {
        this.setTitle();
        this.playVideo();
    }
    render() {
        return (
            <main>
                <video className="video"
                       autoPlay={true}
                       loop={true}
                       muted={false}
                       ref={this.video}
                >
                    <source src={loveMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={loveWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}