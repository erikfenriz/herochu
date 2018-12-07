import React, {Component} from 'react';
import zenMP4 from '../../assets/videos/experience2/mp4/zen.mp4';
import zenWebM from "../../assets/videos/experience2/webm/zen.webm";
import zenMP3 from "../../assets/audio/zen.mp3"
import $ from "jquery";

export default class Zen extends Component {
    setTitle = () => {
        document.title = "Feeling zen today? Let Perfume Talk by MANE";
    };

    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
        this.video = React.createRef();
    };

    onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY });
    };

    playVideo = () => {
        this.video.current.play();
        $('.letPerfumeTalk__video').get(0).play();
    };

    videoStarts = () => {
        this.video.current.muted = false;
    };

    componentDidMount() {
        this.setTitle();
        this.playVideo();
        setTimeout(this.videoStarts,300);
    };

    clicked = () =>{
        this.video.current.play();
    };

    render() {
        return (
            <main onClick={this.clicked} className="letPerfumeTalk" onMouseMove={this.onMouseMove.bind(this)}>
                <video className="letPerfumeTalk__video"
                       autoPlay={true}
                       loop={true}
                       muted={false}
                       ref={this.video}
                >
                    <source src={zenMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={zenWebM} type="video/webm"/>
                </video>
                <audio controls>
                    <source src={zenMP3} type="audio/mpeg"/>
                </audio>
            </main>
        )
    }
}