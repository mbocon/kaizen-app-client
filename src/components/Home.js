import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Goals from './Goals';

export default class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Nav />
				<Goals />
				<Footer />
			</div>
		);
	}
}
