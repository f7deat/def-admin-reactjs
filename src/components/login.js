import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default class Login extends React.Component {
    render() {
        return (
            <div className="loginWrapper">
                <formv className="form-signin p-4">
                    <h1 className="h3 mb-4 font-weight-normal">Please sign in</h1>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><FontAwesomeIcon icon={faUser} /></div>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" required autoComplete="username"/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><FontAwesomeIcon icon={faLock} /></div>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" required autoComplete="current-password"/>
                    </div>
                    <div className="custom-control custom-switch mb-4">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                        <label className="custom-control-label" htmlFor="customSwitch1">Remember me</label>
                    </div>
                    <Link to="/dashboard" className="btn btn-primary btn-block">Sign in</Link>
                </formv>
                <p className="pr-2 copyright text-muted">© 2020 <a href="https://github.com/f7deat" className="text-white">F7Deat</a></p>
            </div>
        );
    }
}