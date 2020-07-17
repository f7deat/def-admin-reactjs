import React from 'react';
import Navbar from './layouts/navbar';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Sidebar from './layouts/sidebar';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar/>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        );
    }
}