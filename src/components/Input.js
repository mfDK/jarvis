import React from 'react';
import List from './List';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDo: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    render() {
        return (
            <div>
                <ul>
                    <List toDo={this.state.toDo} />
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
            </div>
        )
    }
}



export default ToDoForm;
