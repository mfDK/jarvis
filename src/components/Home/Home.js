import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from './Home.css';

function Home() {
    return (
        <ReactCSSTransitionGroup
            transitionName={style}
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={5000}>
            <h1>Home</h1>
        </ReactCSSTransitionGroup>
    )
}

export default Home;
