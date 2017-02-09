import React from 'react';

function Errors(props) {
    let error;
    if (props.value === '') {
        error = <div>Add To Do Item</div>;
    } 
    return (
        <div>
            {error}
        </div>
    )
}

export default Errors;
