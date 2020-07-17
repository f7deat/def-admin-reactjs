import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import Login from './components/login';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        );
    }
}