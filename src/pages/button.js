import React from 'react';

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Basic
                        </h5>
                            <button className="btn btn-primary">Primary</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Light
                        </h5>
                            <button className="btn btn-light text-primary font-weight-bold mr-2">Primary</button>
                            <button className="btn btn-light text-info font-weight-bold mr-2">Info</button>
                            <button className="btn btn-light text-warning font-weight-bold mr-2">Warning</button>
                            <button className="btn btn-light text-danger font-weight-bold">Danger</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}