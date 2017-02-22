import React from 'react';
import List from './List';
import style from './Input.sass';

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
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            toDo: this.state.toDo.concat([this.state.value]),
            value: ''
        });
    }
    render() {
        return (
            <div>
                <List toDo={this.state.toDo} />
                <div className={style.formContainer}>
                    <form onSubmit={this.handleSubmit} className={style.form}>
                        <label>Enter an Item</label>
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
            </div>
        )
    }
}



export default ToDoForm;
