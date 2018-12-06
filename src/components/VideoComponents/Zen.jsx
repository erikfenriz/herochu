import React, {Component} from 'react';
import zenMP4 from '../../assets/videos/experience2/mp4/zen.mp4';
import zenWebM from "../../assets/videos/experience2/webm/zen.webm";

export default class Zen extends Component {
    setTitle = () => {
        document.title = "Feeling zen today? Let Perfume Talk by MANE";
    };

    componentDidMount() {
        this.setTitle();
    }
    render() {
        return (
            <main>
                <video className="video"
                       autoPlay={true}
                       loop={true}
                       muted={false}
                >
                    <source src={zenMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={zenWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}