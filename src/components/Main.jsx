import React from 'react';
// import experience2 from '../assets/images/main/exp2title.png';
// import experience1 from '../assets/images/main/exp2title.png';
import {Link} from 'react-router-dom';

export const Main = () => (
    <main className="main-page">
        <section className="main-page__nesting">
            <section className="experience">
                <div className="experience__title">
                    <div className="experience__title--container-headline">
                        <h1 className="experience__title--headline">EXPERIENCES by MANE</h1>
                    </div>
                    <h2 className="experience__title--secondary">Dedicated to perfume lovers</h2>
                    <ul className="experience__title--list">
                        <li>What’s your mood today?</li>
                        <li>What’s your perfect perfume?</li>
                        <li>What’s your “it” colour?</li>
                        <li>What’s your inspiring rhythm?</li>
                    </ul>
                    <p className="experience__title--summary">EXPERIENCES by MANE help you find the answers to the above


                        to many other questions on the magic world of perfume.
                    </p>
                </div>

            </section>
            <div id="asd">
                <div id="test">
                    <Link to="/LetPerfumeTalk" className="experience__perfume">
                        <div className="experience__link--container">
                            <h3 className="experience__link--title">Let perfume talk</h3>
                            <hr className="experience__link--underline"/>
                            <h4 className="experience__link--entry">Enter</h4>
                        </div>
                    </Link>
                    <Link to="#" className="experience__essence">
                        <div className="experience__link--container">
                            <h3 className="experience__link--title">Let perfume talk</h3>
                            <hr className="experience__link--underline"/>
                            <h4 className="experience__link--entry">Enter</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    </main>
);