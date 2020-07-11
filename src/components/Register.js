import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';



export default class Register extends Component {
    state = {
        user: {},
        email: '',
        password: ''
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }



    handleSubmit = (e, email, password) => {
        e.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            this.handleLogin(data.user)
        })
        
        this.setState({
            email: '',
            password: ''
        })
    }
    
    handleLogin = (user) => {
        this.setState({
            user: user
        })
      }
	
	render() {
		return (
			<div className='login'>
				<Nav />
				<div className='login-main'>
					<h1 className='login-h1'>Register</h1>
					<form onSubmit={this.handleSubmit} className='form-group login-form'>
						<label htmlFor='email'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Enter your Email'
								type='email'
								name='email'
                                id='email'
                                
								onChange={this.handleEmailChange}
							/>
						</label>
						<label htmlFor='password'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Enter password'
								type='password'
								name='password'
								id='password'
								onChange={this.handlePasswordChange}
							/>
						</label>
						<button className='styled-btn login-btn'>
                            Register
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


