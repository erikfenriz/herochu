import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import happyMP4 from '../../assets/videos/experience2/mp4/happy.mp4';
import happyWebM from "../../assets/videos/experience2/webm/happy.webm";
import $ from "jquery";
// import happyMP3 from "../../assets/audio/happy.mp3";

export default class Happy extends Component {
    setTitle = () => {
        document.title = "Feeling happy today? Let Perfume Talk by MANE";
    };

    constructor(props) {
        super(props);
        this.state = {
            x: Number,
            y: Number
        };
        this.video = React.createRef();
        // this.audio = React.createRef();
        this.test = React.createRef();
        this.setCoordinates = this.setCoordinates.bind(this);
    };

    // stile = {
    //     top: this.state.x + "px",
    //     left: this.state.y + "px",
    //     position: 'absolute'
    // };

    setCoordinates = e => {
        this.setState({x: e.pageX, y: e.pageY});
    };

    playVideo = () => {
        this.video.current.play();
        $('.letPerfumeTalk__video').get(0).play();
    };

    videoStarts = () => {
        // this.video.current.muted = false;
        // this.audio.current.play();
    };

    setMouse = (e) => {
        // $('.test').css({
        //     left:  e.pageX + 30 + "px",
        //     top:   e.pageY
        // });

        // ReactDOM.findDOMNode(this.refs.test).style = {
        //     left:  e.pageX + 30 + "px",
        //     top:   e.pageY,
        //     position: 'absolute'
        // };
        // $('.test').css({
        //     left:  e.pageX + 30 + "px",
        //     top:   e.pageY
        // });
        // console.log(ReactDOM.findDOMNode(this.refs.test).style.left);
    };

    clicked = () => {
        this.video.current.play();
        this.video.current.muted = false;
        // this.refs.test.style.opacity = 0;
        do {
            this.refs.test.style.opacity--
        } while (this.refs.test.style.opacity > 0);

        if (this.refs.test.style.opacity === 0) {
            this.refs.test.remove();
        }
    };

    componentDidMount() {
        this.setTitle();
        this.playVideo();
        setTimeout(this.videoStarts, 300);
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('mousemove', this.setCoordinates);
    };


    render() {
        return (
            <main onClick={this.clicked} className="letPerfumeTalk"
                  onMouseMove={this.setCoordinates.bind(this)}>
                <video className="letPerfumeTalk__video"
                       autoPlay={true}
                       loop={true}
                       muted={true}
                       ref={this.video}
                >
                    <source src={happyMP4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src={happyWebM} type="video/webm"/>
                </video>
                {/*<audio autoPlay*/}
                {/*ref={this.audio}>*/}
                {/*<source src={happyMP3} type="audio/mpeg"/>*/}
                {/*</audio>*/}
                <div className="test"
                     ref='test'
                     style={{
                         top: this.state.y + 0 + "px",
                         left: this.state.x + 30 + "px",
                     }}>
                    Click, drag<br/>
                    & enjoy!
                </div>
            </main>
        )
    }
}