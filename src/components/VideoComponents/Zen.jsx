import React, {Component} from 'react';
import happyMP4 from '../../assets/videos/experience2/mp4/zen.mp4';
import happyWebM from "../../assets/videos/experience2/webm/zen.webm";
import {Link} from 'react-router-dom';
// import happyMP3 from "../../assets/audio/happy.mp3";
import featherClick from "../../assets/images/experience2/cursor/feather-click.png";
import featherClicked from "../../assets/images/experience2/cursor/feather-clicked.png";
import {rotatingCursor} from "./cursor";
// import {TweenMax} from "gsap/TweenMax";
// import $ from 'jquery';
import pineapple from '../../assets/images/experience2/elements/happy/gr_ananas.png';
import sun from '../../assets/images/experience2/elements/happy/gr_sun.png';
// import candy1 from '../../assets/images/experience2/elements/happy/gr_candy1.png';
// import candy2 from '../../assets/images/experience2/elements/happy/gr_candy2.png';
// import iceCream from '../../assets/images/experience2/elements/happy/gr_icecream.png';
// import note from '../../assets/images/experience2/elements/happy/gr_musicnote.png';

export default class Happy extends Component {
    setTitle = () => {
        document.title = "Feeling zen today? Let Perfume Talk by MANE";
    };

    constructor(props) {
        super(props);
        this.state = {
            mute: false,
            strikeThrough: "menu__bottom--zen",
            displayCursor: true,
            cursor: "cursor__click",
            x: Number,
            y: Number,
            element: [],
            loader: "loading"
        };
        this.video = React.createRef();
        // this.audio = React.createRef();
        this.test = React.createRef();
        this.setCoordinates = this.setCoordinates.bind(this);
    };

    setCoordinates = e => {
        this.setState({x: e.pageX, y: e.pageY});
        if (this.video.current)
            if ((e.buttons === 1 || e.which === 1) && this.state.displayCursor === true) {
                if (this.video.current.currentTime < 5) {
                    let element = React.createElement('img', {
                        src: sun,
                        alt: "experience",
                        key: Math.random(),
                        style: {
                            top: this.state.y - 80 + "px",
                            left: this.state.x - 50 + "px",
                            position: 'fixed',
                            animation: 'anima ' + 3 + 's',
                            opacity: 0,
                        }
                    });
                    this.setState(prevState => ({
                        element: [...prevState.element, element]
                    }));
                } else if (this.video.current.currentTime > 5 && this.video.current.currentTime < 10) {
                    let element = React.createElement('img', {
                        src: pineapple,
                        alt: "experience",
                        key: Math.random(),
                        style: {
                            top: this.state.y - 80 + "px",
                            left: this.state.x - 50 + "px",
                            position: 'fixed',
                            animation: 'anima ' + 3 + 's',
                            opacity: 0,
                        }
                    });
                    this.setState(prevState => ({
                        element: [...prevState.element, element]
                    }));
                }
            }
    };

    playVideo = () => {
        this.video.current.play();
    };

    hide = () => {
        const cursor = document.getElementById('cursor');
        cursor.style.display = 'none';
        this.setState({displayCursor: false});
    };

    display = () => {
        const cursor = document.getElementById('cursor');
        cursor.style.display = 'block';
        this.setState({displayCursor: true});
    };

    mute = () => {
        if (this.state.strikeThrough === "menu__bottom--zen") {
            this.setState({strikeThrough: "menu__bottom--zen strikethrough"});
        } else {
            this.setState({strikeThrough: "menu__bottom--zen"});
        }
        // if (this.state.strikeThrough === "menu__bottom--happy strikethrough") {
        //     this.video.current.muted = true;
        // } else{
        //     this.video.current.muted = false;
        // }
        this.state.strikeThrough === "menu__bottom--happy strikethrough"
            ? this.video.current.muted = false :
            this.video.current.muted = true;

        console.log(this.video.current.muted);
    };

    clicked = () => {
        this.video.current.play();
        // this.video.current.muted = false;
        this.setState({
            cursor: "cursor__click--clicked"
        });
    };

    loaded = () => {
        this.setState({loader: "loading loaded"});
        this.video.current.play();
    };

    componentDidMount() {
        this.setTitle();

        document.addEventListener('contextmenu', event => event.preventDefault());
        rotatingCursor.initialize();
        this.playVideo();
        this.setCoordinates.bind(this);
        document.addEventListener('click', this.setCoordinates);
        // document.addEventListener('mousemove', this.setCoordinates);
        setTimeout(this.loaded, 1000);
        // document.addEventListener('DOMContentLoaded', this.loaded);
    };


    render() {
        return (
            <React.Fragment>
                <main onClick={this.clicked}
                      onMouseMove={this.setCoordinates}
                      className="letPerfumeTalk"
                >
                    <video className="letPerfumeTalk__video"
                           autoPlay={true}
                           loop={true}
                           muted={false}
                           ref={this.video}
                    >
                        <source src={happyMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                        <source src={happyWebM} type="video/webm"/>
                    </video>
                    {/*<audio autoPlay*/}
                    {/*ref={this.audio}>*/}
                    {/*<source src={happyMP3} type="audio/mpeg"/>*/}
                    {/*</audio>*/}
                    {this.state.element}
                    <div ref="cursor" id="cursor">
                        <img className={this.state.cursor} alt="feather" src={featherClick}/>
                        <img className="cursor__clicked" alt="feather" src={featherClicked}/>
                    </div>

                    <div className="menu">
                        <div className="menu__top">
                            <Link className="menu__top--link" to={'/SmellMenu'}>
                            <div onMouseOver={this.hide}
                                 onMouseOut={this.display}
                                 className="menu__top--button menu__circle--top menu__circle--zen">
                                <p>Back</p>
                            </div>
                            </Link>
                        </div>

                        <div className="menu__bottom">
                            <div onMouseOver={this.hide}
                                 onMouseOut={this.display}
                                 className="menu__bottom--button
                                 menu__bottom--side">
                                <p className="menu__bottom--zen">
                                    Share
                                </p>
                            </div>
                            <div onMouseOver={this.hide}
                                 onMouseOut={this.display}
                                 className="menu__bottom--button menu__circle--bottom
                                 menu__circle--zen">
                                <p>Zen</p>
                            </div>
                            <div onMouseOver={this.hide}
                                 onMouseOut={this.display}
                                 onClick={this.mute}
                                 className="menu__bottom--button menu__bottom--side">
                                <p className={this.state.strikeThrough}>Sound</p>
                            </div>
                        </div>
                    </div>
                    <div className="LetPerfumeTalkByMane">
                        <p className="LetPerfumeTalkByMane__experienceName">Let Perfume Talk
                            <span className="LetPerfumeTalkByMane__experienceName--small">&nbsp;by MANE</span>
                        </p>
                    </div>
                </main>
                <div className={this.state.loader}>
                    <div className="loading__text">
                        <h1>Loading</h1>
                        <div className="three-bounce">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}