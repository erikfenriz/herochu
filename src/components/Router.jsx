import React from 'react';
import App from '../App';
import LetPerfumeTalk from './LetPerfumeTalk';
import SmellMenu from './SmellMenu/SmellMenu.jsx';
import Alive from './VideoComponents/Alive';
import Happy from './VideoComponents/Happy';
import Love from './VideoComponents/Love';
import Natural from './VideoComponents/Natural';
import Rebellious from './VideoComponents/Rebellious';
import Sexy from './VideoComponents/Sexy';
import Zen from './VideoComponents/Zen';
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/LetPerfumeTalk" component={LetPerfumeTalk}/>
            <Route path="/LetPerfumeTalk/Alive" component={Alive}/>
            <Route path="/LetPerfumeTalk/Happy" component={Happy}/>
            <Route path="/LetPerfumeTalk/Love" component={Love}/>
            <Route path="/LetPerfumeTalk/Natural" component={Natural}/>
            <Route path="/LetPerfumeTalk/Rebellious" component={Rebellious}/>
            <Route path="/LetPerfumeTalk/Sexy" component={Sexy}/>
            <Route path="/LetPerfumeTalk/Zen" component={Zen}/>
            <Route path="/SmellMenu" component={SmellMenu}/>
        </Switch>
    </BrowserRouter>
);

export default Router;