import React from 'react';
import App from '../App';
// import Weather from "./Test";
// import NotFound from "./Test";

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            {/*<Route path="/test" component={Test}/>*/}
            {/*<Route path="/test/:id" component={Test}/>*/}
        </Switch>
    </BrowserRouter>
);

export default Router;