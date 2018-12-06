import React, {Component} from 'react';
import aliveMP4 from '../../assets/videos/experience2/mp4/alive.mp4';
import aliveWebM from '../../assets/videos/experience2/webm/alive.webm';
import $ from 'jquery';

export default class Alive extends Component {
    video = React.createRef();
    setTitle = () => {
        document.title = "Feeling alive today? Let Perfume Talk by MANE";
    };

    playVideo = () => {
        this.video.current.play();
        $('.video').get(0).play();
    };

    videoStarts = () => {
        console.log(this.video.current.muted);
        this.video.current.muted = false;
    };

    componentDidMount() {
        this.setTitle();
        this.playVideo();
        setTimeout(this.videoStarts,300);
    }

    render() {
        return (
            <main>
                <video className="video"
                       autoPlay={true}
                       loop={true}
                       muted={true}
                       ref={this.video}
                >
                    <source src={aliveMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={aliveWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}