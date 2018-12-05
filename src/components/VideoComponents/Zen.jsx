import React, {Component} from 'react';
import zen from '../../assets/videos/experience2/zen.mp4';

export default class Zen extends Component {
    render() {
        return (
            <main>
                <video className="video" autoPlay muted loop>
                    <source src={zen} type="video/mp4"/>
                </video>
            </main>
        )
    }
}