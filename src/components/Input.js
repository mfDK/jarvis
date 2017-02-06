import React from 'react';
import Errors from './Errors';

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
                <li key={index} value={item}>
                    {item}
                    <button onClick={this.handleDelete} value={index}>Delete</button>
                    {/* {props.children} */}
                </li>
            )
        return (
            <div>
                {listItem}
            </div>
        )
    }
}

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDo: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        console.log(this.state.value);
        this.setState({
            toDo: this.state.toDo.concat([this.state.value]),
            value: ''
        });
        e.preventDefault();
    }
    // handleDelete(e) {
    //     console.log(e.target.value);
    // }
    render() {
        return (
            <div>
                <ul>
                    <List toDo={this.state.toDo}>
                    </List>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>To Do Item</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
                <Errors value={this.state.value} />
            </div>
        )
    }
}



export default ToDoForm;
