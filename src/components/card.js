import React from 'react';

function Card(props) {
    return (
        <div class="card">
            <div class="card-body">
                {props.body}
            </div>
        </div>
    );
}

export default Card