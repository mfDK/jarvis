import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from './components/Input';
import Motivation from './components/Motivation/Motivation';
import 'whatwg-fetch';
import style from './Index.css'

function App() {
    return (
        <div>
            <div className={style.toDo} >
                <ToDoForm />
            </div>
            <div className={style.motivation} >
                <Motivation />
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
