import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import ToDoForm from './components/TaskList/Input';
import Motivation from './components/Motivation/Motivation';
import 'whatwg-fetch';
import style from './Index.css';

class App extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <h1>Route Navigator</h1>
                <ul role="nav">
                    <li><Link to="/todolist" activeStyle={{ color: 'green'}} className={style.nav}>Task List</Link></li>
                    <li><Link to="/motivation" activeStyle={{ color: 'green'}} className={style.nav}>Motivation</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/todolist" component={ToDoForm} />
            <Route path="/motivation" component={Motivation} />
        </Route>
    </Router>,
    document.getElementById("root")
)
