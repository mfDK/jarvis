import React from 'react';
import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            <ListItem value={props.value}/>
        </ul>
    )
}

export default List;
