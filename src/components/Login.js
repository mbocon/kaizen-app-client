import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';


export default class Login extends Component {
	
	render() {
		return (
			<div className='login'>
				<Nav />
				<div className='login-main'>
					<h1 className='login-h1'>Login</h1>
					<form onSubmit={this.handleSubmit} className='form-group login-form'>
						<label htmlFor='email'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Enter your Email'
								type='email'
								name='email'
								id='email'
								onChange={this.handleInput}
							/>
						</label>
						<label htmlFor='password'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Enter password'
								type='password'
								name='password'
								id='password'
								onChange={this.handleInput}
							/>
						</label>
						<button className='styled-btn login-btn'>
                            Login
                            <span className='span'></span>
							<span className='span'></span>
                            <span className='span'></span>
                            <span className='span'></span>
						</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}


