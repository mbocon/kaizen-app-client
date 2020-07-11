import React, { Component } from 'react';

export default class Quotes extends Component {
	state = {
		quotes: [],
		quote: [],
	};

	getQuotes = () => {
		let random = Math.floor(Math.random() * 1000);
		console.log(random, 'is the random number');
		fetch('https://type.fit/api/quotes')
			.then(data => data.json())
			.then(data =>
				this.setState({
					quotes: data,
					quote: data[random],
				}),
			);
	};

	render() {
		return (
			<div>
				<h3 className='quotes-h3'>Quotes</h3>
				<button className='styled-btn quote-btn' onClick={this.getQuotes}>
					Get quote
				</button>
				<div className='quote-area'>
                    <h5 className='quotes-h5'>{this.state.quote.author}</h5>
                    {this.state.quote.text === undefined ? null : <p>{`"${this.state.quote.text}"`}</p> }
					
				</div>
			</div>
		);
	}
}
