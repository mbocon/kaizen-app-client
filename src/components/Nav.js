import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	render() {
		return (
			<div className='nav'>
				<Link to='/'>
					<h1 className='nav-logo'>Kaizen</h1>
				</Link>
				<div className='nav-buttons'>
					<Link to='/register'>
						<button className='styled-btn'>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>Register
						</button>
					</Link>
					<Link className='' to='/login'>
						<button className='styled-btn'>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>
							<span className='span'></span>Login
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
