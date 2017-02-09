import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './components/Input';

const divStyle = {
    container: {
        margin: '0 auto',
        border: '1px solid black',
        height: '300px',
        width: '400px',
    }
}

function TaskList() {
    return (
        <div style={divStyle.container}>
            <ToDoForm />
        </div>
    )
}

ReactDOM.render(
    <TaskList />,
    document.getElementById("root")
)
