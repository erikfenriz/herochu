import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Lottie from "react-lottie";
import animationIntro from '../assets/animation/perfumeIntro/data';
import intro from '../assets/videos/experience2/lptalk_intro.mp4';
import image from "../assets/images/experience2/rhombus.png";

export default class LetPerfumeTalk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rhombusAnimation: "perfume-starting__background " +
                "perfume-starting__background--delay",
            textAnimation: "perfume-starting__text"
        };
        this.animationEnds = this.animationEnds.bind(this);
        this.animationIntro = {
            loop: false,
            autoplay: true,
            animationData: animationIntro,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        };
        this.data = <Lottie className="perfume-starting__animation"
                            options={this.animationIntro}
                            height={500}
                            width={500}
                            isClickToPauseDisabled={true}
        />;
    }

    animationEnds() {
        this.setState({
            rhombusAnimation: "perfume-starting__background" +
                " perfume-starting__background--hover",
            textAnimation: "perfume-starting__text perfume-starting__text--transform"
        });
    };

    componentDidMount() {
        setTimeout(this.animationEnds, 1500)
    };

    render() {
        return (
            <main className="perfume-starting">
                <video autoPlay muted loop className="perfume-starting__video">
                    <source src={intro} type="video/mp4"/>
                </video>
                <Link to="/SmellMenu" className="perfume-starting__animation">
                    <img className={this.state.rhombusAnimation} src={image} alt="background"/>
                    {this.data}
                    <p className={this.state.textAnimation}>
                        Dedicated to perfume lovers</p>
                </Link>
            </main>
        )
    }
}