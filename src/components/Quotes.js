import React, { Component } from 'react';

export default class Quotes extends Component {
	state = {
		quotes: [],
		quote: [],
	};

	getQuotes = () => {
		let random = Math.floor(Math.random() * 1000);
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
			<div className='aside'>
				<h3 className='quotes-h3'>Need inspiration?</h3>
				<div className='quote-area'>
                    <h5 className='quotes-h5'>{this.state.quote.author}</h5>
                    {this.state.quote.text === undefined ? null : <p>{`"${this.state.quote.text}"`}</p> }
				</div>
				<button className='styled-btn quote-btn' onClick={this.getQuotes}>
					Get quote
				</button>
			</div>
		);
	}
}
