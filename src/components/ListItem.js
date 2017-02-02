import React from 'react';



function ListItem(props) {
    const button = <button onClick={(e) => props.handleDelete }>Delete</button>;
    const checkBox = <form>
                        <input type="checkbox" onChange={(e) => console.log('clicked ' + props.value )}/>
                    </form>;
    return (
        <li>
            {props.value}
            {checkBox}
        </li>
    )
}

export default ListItem;
