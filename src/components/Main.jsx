import React from 'react';
import {Link} from 'react-router-dom';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animationEssence: "experience__essence experience__essence--animation",
            animationPerfume: "experience__perfume experience__perfume--animation",
        };
        this.animationEnds = this.animationEnds.bind(this);
        // this.animationDesktop = React.createRef();
        // this.animationResponsive = React.createRef();
    }

    animationEnds() {
        this.setState({
            animationEssence: "experience__essence experience__essence--animation-none",
            animationPerfume: "experience__perfume experience__perfume--animation-none"
        });
    };

    componentDidMount() {
        const animationDesktop = document.getElementById("animation-listener-desktop");
        animationDesktop.addEventListener("animationend", this.animationEnds);
        const animationResponsive = document.getElementById("animation-listener-responsive");
        animationResponsive.addEventListener("animationend", this.animationEnds);
        // this.animationDesktop.addEventListener("animationend", this.animationEnds);
    };

    render() {
        return (<main className="main-page">
            <section className="main-page__content">
                <section className="intro">
                    <div className="intro__title">
                        <div className="intro__title--container-headline">
                            <h1 className="intro__title--headline">EXPERIENCES<br/> by MANE</h1>
                        </div>
                        <h2 className="intro__title--secondary">Dedicated to perfume lovers</h2>
                        <ul className="intro__title--list">
                            <li>What’s your mood today?</li>
                            <li>What’s your perfect perfume?</li>
                            <li>What’s your “it” colour?</li>
                            <li>What’s your inspiring rhythm?</li>
                        </ul>
                        <p className="intro__title--summary">EXPERIENCES by MANE help you find the answers to the above
                            to many other questions on the magic world of perfume.
                        </p>
                    </div>
                    <div className="experience experience__responsive">
                        <div className="experience__choice">
                            <Link to="/LetPerfumeTalk"
                                  className={this.state.animationPerfume}>
                                <div className="experience__link--container">
                                    <h3 className="experience__link--title">Let perfume talk</h3>
                                    <hr className="experience__link--underline"/>
                                    <h4 className="experience__link--entry">Enter</h4>
                                </div>
                            </Link>
                            <Link to="#"
                                  id="animation-listener-responsive"
                                  className={this.state.animationEssence}>
                                <div className="experience__link--container">
                                    <h3 className="experience__link--title">Let perfume talk</h3>
                                    <hr className="experience__link--underline"/>
                                    <h4 className="experience__link--entry">Enter</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="experience">
                    <div className="experience__choice">
                        <Link to="/LetPerfumeTalk"
                              className={this.state.animationPerfume}>
                            <div className="experience__link--container">
                                <h3 className="experience__link--title">Let perfume talk</h3>
                                <hr className="experience__link--underline"/>
                                <h4 className="experience__link--entry">Enter</h4>
                            </div>
                        </Link>
                        <Link to="#" id="animation-listener-desktop"
                              className={this.state.animationEssence}>
                            <div className="experience__link--container">
                                <h3 className="experience__link--title">Let perfume talk</h3>
                                <hr className="experience__link--underline"/>
                                <h4 className="experience__link--entry">Enter</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>)
    }
};