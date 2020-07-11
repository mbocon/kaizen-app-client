import React, { Component } from 'react';
import Quotes from './Quotes';

export default class Landing extends Component {

	render() {
		return (
			<div className='landing'>
			<div className="landing-left">
				<h1 className='landing-h1'>Welcome to Kaizen!</h1>
				<p className='landing-p'>
					Kaizen is a Japanese term meaning "change for the better" or "continuous improvement." It is a philosophy regarding
					the processes that continuously work toward betterment. Kaizen sees improvement in productivity as a gradual and
					methodical process.
				</p>
				</div>
				<div className="landing-right">
				<Quotes />
				</div>
			</div>
		);
	}
}
