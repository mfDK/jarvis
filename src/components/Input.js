import React from 'react';
import List from './List';

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDo: []
        };

        this.handleChange = this.handleChange.bind(this);
        // The reason I have to do this is because I am creating
        // a react function and the constructor handles it this way.
        // figure it out when you're not high.
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        this.setState({
            toDo: this.state.value
        });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>To Do Item</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
                <List value={this.state.value}/>
            </div>
        )
    }
}



export default ToDoInput;
