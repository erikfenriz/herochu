import React, {Component} from 'react';
import rebelliousMP4 from '../../assets/videos/experience2/mp4/rebellious.mp4';
import rebelliousWebM from "../../assets/videos/experience2/webm/rebelious.webm";

export default class Rebellious extends Component {
    setTitle = () => {
        document.title = "Feeling rebellious today? Let Perfume Talk by MANE";
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
                    <source src={rebelliousMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={rebelliousWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}