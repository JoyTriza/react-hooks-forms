import React from 'react'

function DisplayData(props) {
    return (
        <div>
            <h1>{props.fistName}</h1>
            <h1>{props.lastName}</h1>
        </div>
    );
}

export default DisplayData;