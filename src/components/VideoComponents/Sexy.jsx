import React, {Component, lazy, Suspense} from 'react';
import MP4 from '../../assets/videos/experience2/mp4/sexy.mp4';
import WebM from "../../assets/videos/experience2/webm/sexy.webm";
import MP3 from "../../assets/audio/sexy.mp3";
import featherClick from "../../assets/images/experience2/cursor/feather-click.png";
import featherClicked from "../../assets/images/experience2/cursor/feather-clicked.png";
import {rotatingCursor} from "./cursor";
// import $ from 'jquery';
import pineapple from '../../assets/images/experience2/elements/happy/gr_ananas.png';
import sun from '../../assets/images/experience2/elements/happy/gr_sun.png';
import {Link} from "react-router-dom";
import facebook from "../../assets/images/main/facebook-logo-button.svg";
import twitter from "../../assets/images/main/twitter-logo-button.svg";
import google from "../../assets/images/main/google-plus-logo-button.svg";
import {TweenMax} from "gsap/TweenMax";
import Loader from "./Components/Loader";
const Video = lazy(() => import('./Components/Video'));
// import candy1 from '../../assets/images/experience2/elements/happy/gr_candy1.png';
// import candy2 from '../../assets/images/experience2/elements/happy/gr_candy2.png';
// import iceCream from '../../assets/images/experience2/elements/happy/gr_icecream.png';
// import note from '../../assets/images/experience2/elements/happy/gr_musicnote.png';

export default class Happy extends Component {
    setTitle = () => {
        document.title = "Feeling sexy today? Let Perfume Talk by MANE";
    };
    constructor(props) {
        super(props);
        this.state = {
            mood: "sexy",
            mute: false,
            play: true,
            audioPlayBack: false,
            strikeThrough: "menu__bottom--sexy",
            displayCursor: true,
            isSharing: false,
            cursor: "cursor__click",
            x: Number,
            y: Number,
            element: [],
            loader: "loading",
            shareMedia: `letPerfumeTalk__share--media menu__circle--sexy`,
            shareClose: `letPerfumeTalk__share--close`,
            mainClassToggleCursor: "letPerfumeTalk"
        };
        this.video = React.createRef();
        this.audio = React.createRef();
        this.setCoordinates = this.setCoordinates.bind(this);
    };

    setCoordinates = e => {
        this.setState({x: e.pageX, y: e.pageY});
        if (this.video.current)
            if ((e.buttons === 1 || e.which === 1) &&
                this.state.displayCursor === true &&
                this.state.isSharing === false) {
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

    playContent = () => {
        if (this.video.current)
            this.video.current.play();
        this.audio.current.play();
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

    hideCursorClicked = () => {
        const cursor = document.getElementById('cursor');
        cursor.style.zIndex = '-10';
        this.setState({displayCursor: false});
    };

    displayCursorClicked = () => {
        const cursor = document.getElementById('cursor');
        cursor.style.zIndex = '1';
        this.setState({displayCursor: true});
    };

    fadeOut = () => {
        TweenMax.to(this.audio.current, 1.5, {volume: 0});
    };

    fadeIn = () => {
        TweenMax.to(this.audio.current, 1.5, {volume: 1});
    };

    mute = () => {
        if (this.state.strikeThrough === `menu__bottom--${this.state.mood}`) {
            this.setState({strikeThrough: `menu__bottom--${this.state.mood} strikethrough`});
        } else {
            this.setState({strikeThrough: `menu__bottom--${this.state.mood}`});
        }
        if (this.state.strikeThrough === `menu__bottom--${this.state.mood} strikethrough`) {
            this.fadeIn();
        } else {
            this.fadeOut();
        }
    };

    mouseFirstClick = (e) => {
        e.stopPropagation();

        if (!this.state.isSharing) {
            this.video.current.play();
            this.audio.current.play();
            if (!this.state.audioPlayBack) {
                this.audio.current.currentTime = this.video.current.currentTime;
                this.setState({audioPlayBack: true});
            }
        }
        this.setState({
            cursor: "cursor__click--clicked"
        });
    };

    loaded = () => {
        if (this.video.current) {
            this.setState({loader: "loading loaded"});
            this.video.current.play();
        }
    };

    shareSwitcher = () => {
        this.setState(prevState => ({
            isSharing: !prevState.isSharing
        }));
        if (this.state.mainClassToggleCursor === "letPerfumeTalk") {
            this.setState({mainClassToggleCursor: "letPerfumeTalk cursor"});
        } else if (this.state.mainClassToggleCursor === "letPerfumeTalk cursor") {
            this.setState({mainClassToggleCursor: "letPerfumeTalk"});
        }
    };

    shareIn = (e) => {
        e.stopPropagation();
        if (this.state.isSharing === false) {
            this.hideCursorClicked();
            this.shareSwitcher();
            this.video.current.pause();
            this.audio.current.pause();
            if (this.state.shareClose === "letPerfumeTalk__share--close" &&
                this.state.shareMedia === `letPerfumeTalk__share--media menu__circle--${this.state.mood}`) {
                this.setState({
                    shareClose: "letPerfumeTalk__share--close comesIn",
                    shareMedia: `letPerfumeTalk__share--media menu__circle--${this.state.mood} comesIn`
                });
            } else if (this.state.shareClose.includes("goesOut") &&
                this.state.shareMedia.includes("goesOut")) {
                this.setState({
                    shareClose: "letPerfumeTalk__share--close comesIn",
                    shareMedia: `letPerfumeTalk__share--media menu__circle--${this.state.mood} comesIn`
                });
            }
        }
    };

    shareOut = (e) => {
        e.stopPropagation();
        if (this.state.isSharing === true) {
            this.displayCursorClicked();

            if (this.state.shareClose.includes("comesIn") &&
                this.state.shareMedia.includes("comesIn")) {
                this.setState({
                    shareClose: "letPerfumeTalk__share--close goesOut",
                    shareMedia: `letPerfumeTalk__share--media menu__circle--${this.state.mood} goesOut`
                });
            }
            setTimeout(this.shareSwitcher, 100);
            this.video.current.play();
            this.audio.current.play();
            if (!this.state.audioPlayBack) {
                this.audio.current.currentTime = this.video.current.currentTime;
                this.setState({audioPlayBack: true});
            }
        }
    };

    checkForVideo = () => {
        let b = setInterval(() => {
            if (this.video.current) {
                if (this.video.current.readyState === 4) {
                    this.loaded();
                    clearInterval(b);
                }
            }
        }, 500);
    };

    componentDidMount() {
        this.setTitle();
        document.addEventListener('contextmenu', event => event.preventDefault());
        rotatingCursor.initialize();
        this.playContent();
        this.setCoordinates.bind(this);
        document.addEventListener('click', this.setCoordinates);
        this.checkForVideo();
    };

    render() {
        return (
            <React.Fragment>
                <main
                    onClick={this.mouseFirstClick}
                    onMouseMove={this.setCoordinates}
                    className={this.state.mainClassToggleCursor}
                >
                    <Suspense
                        fallback={
                            <Loader
                                mouseFirstClick={this.mouseFirstClick}
                                setCoordinates={this.setCoordinates}
                                loader={this.state.loader}
                            />
                        }>
                        <Video
                            videoRef={this.video}
                            mp4={MP4}
                            webm={WebM}
                        />
                    </Suspense>
                    {/*<Loader*/}
                        {/*mouseFirstClick={this.mouseFirstClick}*/}
                        {/*setCoordinates={this.setCoordinates}*/}
                        {/*loader={this.state.loader}*/}
                    {/*/>*/}
                    <audio
                        autoPlay
                        loop
                        ref={this.audio}
                    >
                        <source src={MP3} type="audio/mpeg"/>
                    </audio>
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
                                     className={`menu__top--button menu__circle--top
                                     menu__circle--${this.state.mood}`}>
                                    <p>Back</p>
                                </div>
                            </Link>
                        </div>

                        <div className="menu__bottom">
                            <div onMouseOver={this.hide}
                                 onMouseOut={this.display}
                                 onClick={this.shareIn}
                                 className="menu__bottom--button menu__bottom--side">
                                <p className={`menu__bottom--${this.state.mood}`}>
                                    Share
                                </p>
                            </div>
                            <div onMouseOver={this.hide}
                                 onMouseOut={this.display}
                                 className={`menu__bottom--button menu__circle--bottom menu__circle--${this.state.mood}`}>
                                <p>{this.state.mood}</p>
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
                    <div className="letPerfumeTalk__share">
                        <div className={this.state.shareClose}
                             onClick={this.shareOut}
                        >
                            <p>Close</p>
                        </div>
                        <div className={this.state.shareMedia}>
                            <div className="letPerfumeTalk__share--container">
                                <h3>Share your<br/>experience</h3>
                                <div className="letPerfumeTalk__share--icons">
                                    <img src={facebook} alt="facebook icon"/>
                                    <img src={twitter} alt="twitter icon"/>
                                    <img src={google} alt="google icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}