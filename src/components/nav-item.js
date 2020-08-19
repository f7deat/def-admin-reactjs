import React from 'react';
import { Link } from 'react-router-dom';

function NavItem(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link custom-nav-link active" to={props.to}>
                {props.icon} {props.name}
            </Link>
        </li>
    );
}

export default NavItem