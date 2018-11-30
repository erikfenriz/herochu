import React from 'react';
import App from '../App';
import LetPerfumeTalk from './LetPerfumeTalk';
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/LetPerfumeTalk" component={LetPerfumeTalk}/>
            {/*<Route path="/test/:id" component={Test}/>*/}
        </Switch>
    </BrowserRouter>
);

export default Router;