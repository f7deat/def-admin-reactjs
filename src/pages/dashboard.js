import React from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
    {
        name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
    },
    {
        name: 'Page F', uv: 1400, pv: 680, amt: 1700,
    },
];
export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="card-deck">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', height: 300 }} className="card border-0 shadow mt-4">
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
                </div>
            </div>
        );
    }
}