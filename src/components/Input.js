import React from 'react';
import Errors from './Errors';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDo: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
    handleDelete(e) {
        console.log(e.target.value);
        let newArr = this.state.toDo;
        newArr.splice(e.target.value, 1);
        console.log(newArr);
        this.setState({
            toDo: newArr
        })
    }
    render() {
        const listArr = this.state.toDo;
        const listItem = listArr.map((item, index) =>
                <li key={index} value={item}>
                    {item}
                    <button onClick={this.handleDelete} value={index}>Delete</button>
                </li>
        )
        return (
            <div>
                <ul>
                    {listItem}
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
