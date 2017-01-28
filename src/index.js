import React from 'react';
import ReactDOM from 'react-dom';
import ToDoInput from './components/Input'

function App() {
    return (
        <div>
            <ToDoInput />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
