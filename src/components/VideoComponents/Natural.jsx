import React, {Component} from 'react';
import naturalMP4 from '../../assets/videos/experience2/mp4/natural.mp4';
import naturalWebM from "../../assets/videos/experience2/webm/natural.webm";

export default class Natural extends Component {
    setTitle = () => {
        document.title = "Feeling natural today? Let Perfume Talk by MANE";
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
                    <source src={naturalMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={naturalWebM} type="video/webm"/>
                </video>
            </main>
        )
    }
}