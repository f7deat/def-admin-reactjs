import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faBars, faCog, faBell } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="bg-white shadow">
                <div className="row no-gutters">
                    <div className="width-240px py-2 px-3">
                        <Link to="#" className="navbar-brand font-weight-bold text-sm-left">TrivAdmin</Link>
                    </div>
                    <div className="flex-md-grow-1 p-2">
                        <button className="btn btn-light" onClick={this.props.toggleSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className="d-none d-md-block">
                        <div className="nav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="#" className="nav-link p-3 text-dark" role="button" id="dropdownMenuNotify" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faBell} />
                                        <span className="bg-danger dot-notify" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right border-0 shadow p-0" aria-labelledby="dropdownMenuNotify">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Alerts</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Events</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Logs</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade p-4 show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                            <div className="tab-pane fade p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                            <div className="tab-pane fade p-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                            <div className="dropdown-divider" />
                                            <div className="text-right px-4 pb-2">
                                                <Link to="#" className="text-muted"><small>Load All</small></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button className="btn nav-link p-3 text-dark font-weight-bold text-muted dropdown-toggle" id="dropdownMenuAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="far fa-user" /> F7Deat</button>
                                    <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="dropdownMenuAccount">
                                        <Link className="dropdown-item" to="/profile"><i className="far fa-user" /> My Account</Link>
                                        <Link className="dropdown-item" to="#"><i className="fas fa-cog" /> Settings</Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" to="/login"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link p-3 text-dark">
                                        <FontAwesomeIcon icon={faCog} spin={true} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}