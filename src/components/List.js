import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const listArr = this.props.toDo;
        const listItem = listArr.map((item, index) =>

                <ListItem key={index} value={item}>
                </ListItem>

        )
        return (
            <ul>
                {listItem}
            </ul>
        )
    }

}

export default List;
