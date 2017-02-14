import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class Motivation extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const nasa_url = 'https://api.nasa.gov/planetary/apod?api_key=';
        const api_key = 'S6ues4ODQYwhJv6WiMOhTWkRpcKBCXyYhoigytrx';
        fetch(nasa_url + api_key, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
        })
        .catch((exception) => {
            console.log('parse failed', exception)
        })
    }
    render() {
        return (
            <div>
                Motivation component goes here
            </div>
        )
    }
}



export default Motivation;
