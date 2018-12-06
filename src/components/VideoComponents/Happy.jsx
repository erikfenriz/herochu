import React, {Component} from 'react';
import happyMP4 from '../../assets/videos/experience2/mp4/happy.mp4';
import happyWebM from "../../assets/videos/experience2/webm/happy.webm";

export default class Happy extends Component {
    setTitle = () => {
        document.title = "Feeling happy today? Let Perfume Talk by MANE";
    };

    playVideo = () => {
        this.video = React.createRef();
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
                >
                    <source src={happyMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={happyWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}