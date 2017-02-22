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
            if (json.media_type === 'video') {
                console.log('its a video bro');
            }
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
        return (
            <div className={style.motivationComponent}>
                {pic}
                <Quote className={style.quoteContainer}/>
            </div>
        )
    }
}



export default Motivation;
