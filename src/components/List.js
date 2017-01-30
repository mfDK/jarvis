import React from 'react';
import ListItem from './ListItem';

function List(props) {
    const listArr = props.toDo;
    const listItem = listArr.map((item, index) =>
            <ListItem key={index} value={item}></ListItem>
    )
    return (
        <ul>
            {listItem}
        </ul>
    )
}

export default List;
