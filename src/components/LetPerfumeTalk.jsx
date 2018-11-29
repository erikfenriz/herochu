import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import intro from '../assets/videos/experience2/lptalk_intro.mp4';

export default class LetPerfumeTalk extends Component {
render() {
        return(
            <main className="intro">
                <video autoPlay muted loop className="intro__video">
                    <source src={intro} type="video/mp4"/>
                </video>
            </main>
        )
    }
}