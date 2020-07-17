import React from 'react';
import Navbar from '../layouts/navbar';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div>Phần nội dung</div>
            </div>
        );
    }
}