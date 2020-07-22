import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { api } from '../url';

export default class Register extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInput = event => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${api}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                username: '',
                password: ''
            })
        }).then((e)=>this.props.history.push('/login'))
    }
	
	render() {
		return (
			<div className='login'>
				<Nav />
				<div className='login-main'>
					<h1 className='login-h1'>Register</h1>
					<form onSubmit={this.handleSubmit} className='form-group login-form'>
						<label htmlFor='username'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Create username'
								type='username'
								name='username'
                                id='username'
                                
								onChange={this.handleInput}
							/>
						</label>
						<label htmlFor='password'>
							<input
								className='form-control mx-sm-3 login-input'
								placeholder='Create password'
								type='password'
								name='password'
								id='password'
								onChange={this.handleInput}
							/>
						</label>
						<button className='styled-btn login-btn' type='submit'>
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


