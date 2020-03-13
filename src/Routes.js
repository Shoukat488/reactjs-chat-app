import React, { Component } from 'react'
import ChatShell from './containers/shell/ChatShell';
import Login from './containers/login/login';
import Signup from './containers/signup/signup';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/chatshell" component={ChatShell} />
                </div>
            </BrowserRouter>
        )
    }
}
