import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import Quote from './Quote';
import style from './Motivation.css'

class Motivation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
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
            this.setState({
                img: json.url
            })
        })
        .catch((exception) => {
            console.log('parse failed', exception)
        })
    }
    render() {
        const loading = <div>loading...</div>;
        const pic = <img src={this.state.img} className={style.spaceImg} />;
        const quote = <Quote />;
        return (
            <div className={style.motivationComponent}>
                {pic}
                {quote}
            </div>
        )
    }
}



export default Motivation;
