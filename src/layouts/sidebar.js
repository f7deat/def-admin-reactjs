import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faGift, faPlusCircle, faUser, faUserLock, faChartBar } from '@fortawesome/free-solid-svg-icons';

export default class Sidebar extends React.Component {
    render() {
        return (
            <nav className={this.props.collapsed ? "d-md-block bg-dark sidebar collapse h-100 custom-sidebar shadow" : "d-md-block bg-dark sidebar collapse h-100 custom-sidebar shadow show"}>
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link active" to="/dashboard">
                                <i className="fas fa-file" />
                                <FontAwesomeIcon icon={faChartBar} /> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link active" to="#">
                                <i className="fas fa-file" />
                                <FontAwesomeIcon icon={faFile} /> Blank
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="#">
                                <FontAwesomeIcon icon={faGift} /> ...
                            </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Settings</span>
                        <Link className="d-flex align-items-center text-muted" to="#" aria-label="Add a new report">
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </Link>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="#">
                                <FontAwesomeIcon icon={faUser} /> Account
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="#">
                                <i className="fas fa-user-lock" />
                                <FontAwesomeIcon icon={faUserLock} /> ...
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}