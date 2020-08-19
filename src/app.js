import React from 'react';
import Navbar from './layouts/navbar';
import Sidebar from './layouts/sidebar';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ButtonPage from './pages/button';

export default class App extends React.Component {
    state = {
        collapsed: false
    };
    toggleSidebar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar} />
                <Sidebar collapsed={this.state.collapsed} />
                <main>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/button" component={ButtonPage} />
                    </Switch>
                </main>
            </div>
        );
    }
}