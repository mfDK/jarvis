import React from 'react';
import style from './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDo: this.props.toDo};
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e) {
        console.log(e.target.value);
        let deleteArray = this.props.toDo;
        let removedArr = deleteArray.splice(e.target.value, 1);
        this.setState({
            toDo: removedArr
        })
        console.log(this.state.toDo);
    }
    render() {
        const listArr = this.props.toDo;
        const listItem = listArr.map((item, index) =>
                <li key={index} value={item} className={style.listItem}>
                    {item}
                    <button onClick={this.handleDelete} value={index} className={style.removeItem}>Delete</button>
                </li>
            )
        return (
            <div className={style.liContainer}>
                <ul className={style.list}>
                    {listItem}
                </ul>
            </div>
        )
    }
}

export default List;
