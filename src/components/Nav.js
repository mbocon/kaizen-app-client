import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	logout = () => {
		localStorage.clear('token');
	}
	render() {
		if(localStorage.token && localStorage.id) {
			return (
				<nav class='navbar nav navbar-expand-lg navbar-dark bg-light'>
				<Link className='navbar-brand' to='/'>
					<h1 className='nav-logo'>Kaizen</h1>
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/login'>
								<button className='styled-btn' onClick={this.logout}>
									<span className='span'></span>
									<span className='span'></span>
									<span className='span'></span>
									<span className='span'></span>Logout
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			)
		} else
		return (
			<nav class='navbar nav navbar-expand-lg navbar-dark bg-light'>
				<Link className='navbar-brand' to='/'>
					<h1 className='nav-logo'>Kaizen</h1>
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/register'>
								<button className='styled-btn'>
									<span className='span'></span>
									<span className='span'></span>
									<span className='span'></span>
									<span className='span'></span>Register
								</button>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/login'>
								<button className='styled-btn'>
									<span className='span'></span>
									<span className='span'></span>
									<span className='span'></span>
									<span className='span'></span>Login
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

// <nav className='navbar nav fixed-top navbar-expand-md'>
// 				<div className='container'>
// 					<Link className='navbar-brand' to='/'>
// 						<h1 className='nav-logo'>Kaizen</h1>
// 					</Link>
// 					<button
// 						class='navbar-toggler'
// 						type='button'
// 						data-toggle='collapse'
// 						data-target='#navbarCollapse'
// 						aria-controls='navbarCollapse'
// 						aria-expanded='false'
// 						aria-label='Toggle navigation'>
// 						<span class='navbar-toggler-icon'></span>
// 						<span class="icon-bar"></span>
// 						<span class="icon-bar"></span>
// 						<span class="icon-bar"></span>
// 					</button>
// 					<div class='collapse navbar-collapse' id='navbarCollapse'>
// 						<ul class='navbar-nav mr-auto'>
// 						<li className="nav-item">
// 							<Link className='nav-link' to='/register'>
// 								<button className='styled-btn'>
// 									<span className='span'></span>
// 									<span className='span'></span>
// 									<span className='span'></span>
// 									<span className='span'></span>Register
// 								</button>
// 							</Link>
// 							</li>
// 							<li className="nav-item">
// 							<Link className='nav-link' to='/login'>
// 								<button className='styled-btn'>
// 									<span className='span'></span>
// 									<span className='span'></span>
// 									<span className='span'></span>
// 									<span className='span'></span>Login
// 								</button>
// 							</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
