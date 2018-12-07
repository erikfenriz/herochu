import React, {Component} from 'react';
import loveMP4 from '../../assets/videos/experience2/mp4/in_love.mp4';
import loveWebM from "../../assets/videos/experience2/webm/love.webm";
import $ from "jquery";

export default class Love extends Component {
    setTitle = () => {
        document.title = "Feeling in love today? Let Perfume Talk by MANE";
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
                    <source src={loveMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={loveWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}