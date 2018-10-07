import React from 'react';

export default (props) => {
    return(
        <div>
            <h1 className="disaplay-4">About Contact Manager</h1>
            <p className="lead">Simple App to manage contacts</p>
            <p className="text-secondary">Version {props.match.params.id}.0.0</p>
        </div>
    )
}