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
        // The reason I have to do this is because I am creating
        // a react function and the constructor handles it this way.
        // figure it out when you're not high.
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
    //     let
    //     this.setState({
    //         toDo:
    //     })
    // }
    render() {
        const listArr = this.state.toDo;
        const listItem = listArr.map((item, index) =>
                <li key={index} value={item}>
                    {item}
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
