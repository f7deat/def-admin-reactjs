import React from 'react';
import Navbar from './layouts/navbar';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Sidebar from './layouts/sidebar';
import Profile from './pages/profile';

export default class App extends React.Component {
    state = {
        collapsed: false
    };
    toggleSidebar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
        console.log(this.state.collapsed)
    }

    render() {
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar} />
                <Sidebar collapsed={this.state.collapsed} />
                <main>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </main>
            </div>
        );
    }
}