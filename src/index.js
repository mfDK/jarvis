import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './components/Input';

function TaskList() {
    return (
        <div>
            <ToDoForm />
        </div>
    )
}

ReactDOM.render(
    <TaskList />,
    document.getElementById("root")
)
