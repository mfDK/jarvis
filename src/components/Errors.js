import React from 'react';

function Errors(props) {
    let error;
    if (props.value === '') {
        error = <div>Input is blank</div>;
    } else {
        error = <div>onChange</div>;
    }
    return (
        <div>
            {error}
        </div>
    )
}

export default Errors;
