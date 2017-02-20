import React from 'react';
import 'whatwg-fetch';

class Quote extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: 'a quote goes here',
            author: ''
        }
        this.getQuote = this.getQuote.bind(this);
    }
    componentWillMount() {
        this.getQuote();
    }
    getQuote() {
        const quoteApi = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';
        fetch(quoteApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'mMPhbNEBE2mshH6G9G1vEPPpm8lPp15zZ54jsnl2veAxRUx61j'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            this.setState({
                quote: json.quote,
                author: json.author
            })

        })
        .catch((exception) => {
            console.log(exception);
        })
    }
    componentDidMount() {
        setInterval(this.getQuote, 300000);
    }
    render() {
        return(
            <div>
                {this.state.quote} - {this.state.author}
            </div>
        )
    }
}

export default Quote;
