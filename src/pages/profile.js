import React from 'react';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card border-0 shadow">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="http://placehold.jp/99ccff/003366/100x100.png?text=avatar" className="rounded-circle img-thumbnail" alt="" />
                                    </div>
                                    <div className="col-md-8 font-weight-bold">
                                        John Doe
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card border-0 shadow">

                    </div>
                </div>
            </div>
        );
    }
}