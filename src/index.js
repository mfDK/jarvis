import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import ToDoForm from './components/TaskList/Input';
import Motivation from './components/Motivation/Motivation';
import Home from './components/Home/Home';
import 'whatwg-fetch';
import style from './Index.css';

class App extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <h1>Jarvis</h1>
                <ul role="nav" className={style.nav}>
                    <li><Link to="/todolist" activeStyle={{ color: 'green'}} className={style.navItem}>Task List</Link></li>
                    <li><Link to="/motivation" activeStyle={{ color: 'green'}} className={style.navItem}>Motivation</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home} />
            <Route path="/todolist" component={ToDoForm} />
            <Route path="/motivation" component={Motivation} />
        </Route>
    </Router>,
    document.getElementById("root")
)
