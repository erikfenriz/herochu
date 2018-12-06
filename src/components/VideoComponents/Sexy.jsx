import React, {Component} from 'react';
import sexyMP4 from '../../assets/videos/experience2/mp4/sexy.mp4';
import sexyWebM from "../../assets/videos/experience2/webm/sexy.webm";

export default class Sexy extends Component {
    setTitle = () => {
        document.title = "Feeling sexy today? Let Perfume Talk by MANE";
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
                    <source src={sexyMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={sexyWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}