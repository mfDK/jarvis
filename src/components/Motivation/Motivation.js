import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import Quote from './Quote';
import style from './Motivation.css'

function EmbedVideo(props) {
    return (
        <div>
            <iframe src={props.video}></iframe>
        </div>
    )
}

class Motivation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            video: ''
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
                this.setState({
                    video: json.url
                })
            } else {
                this.setState({
                    img: json.url
                })
            }
        })
        .catch((exception) => {
            console.log('parse failed', exception)
        })
    }
    render() {
        const pic = <img src={this.state.img} className={style.spaceImg} />;
        const media = this.state.video === '' ? pic : <EmbedVideo video={this.state.video}/>;
        return (
            <div className={style.motivationComponent}>
                {media}
                <Quote className={style.quoteContainer}/>
            </div>
        )
    }
}



export default Motivation;
