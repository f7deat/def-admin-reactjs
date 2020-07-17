import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        return (
            <nav className="d-md-block bg-dark sidebar collapse h-100 custom-sidebar shadow">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link active" to="#">
                                <i className="fas fa-file" />
          Blank <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="#">
                                <i className="fas fa-gift" />
          ...
        </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Settings</span>
                        <Link className="d-flex align-items-center text-muted" to="#" aria-label="Add a new report">
                            <i className="fas fa-plus-circle" />
                        </Link>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="#">
                                <i className="fas fa-user" />
          Account
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="#">
                                <i className="fas fa-user-lock" />
          ...
        </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}