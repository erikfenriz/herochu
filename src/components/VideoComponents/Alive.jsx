import React, {Component} from 'react';
import aliveMP4 from '../../assets/videos/experience2/mp4/alive.mp4';
import aliveWebM from '../../assets/videos/experience2/webm/alive.webm';
import $ from 'jquery';

export default class Alive extends Component {
    setTitle = () => {
        document.title = "Feeling alive today? Let Perfume Talk by MANE";
    };

    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
        this.video = React.createRef();
    };

    onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY });
    };

    videoStarts = () => {
        this.video.current.muted = false;
    };

    componentDidMount() {
        this.setTitle();
        // this.playVideo();
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
                       muted={true}
                       ref={this.video}
                >
                    <source src={aliveMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={aliveWebM} type="video/webm"/>
                </video>
                <div className="test">Mouse coordinates: { this.state.x } { this.state.y }</div>
            </main>
        )
    }
}