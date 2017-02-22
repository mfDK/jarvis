import React from 'react';
import 'whatwg-fetch';
import style from './Quote.css'

class Quote extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: '',
            author: ''
        }
        this.fetchQuote = this.fetchQuote.bind(this);
    }
    fetchQuote() {
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
        this.fetchQuote();
    }
    render() {
        return(
            <div>
                {this.state.quote} - {this.state.author}
                <button onClick={this.fetchQuote}>New Quote</button>
            </div>
        )
    }
}

export default Quote;
