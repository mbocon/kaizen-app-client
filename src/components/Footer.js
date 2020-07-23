import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className='footer fixed-bottom'>
                <h5 className='footer-h5'>Created by Mike Bocon</h5>
                <div className="footer-icons">
                <a id='github' href="https://github.com/mbocon" rel="noopener noreferrer" target='_blank'> <span> <i className="fa fa-github-square"></i></span></a>
				<a id='github' href="https://www.linkedin.com/in/mike-bocon/" rel="noopener noreferrer" target='_blank'> <span> <i className="fa fa-linkedin"></i> </span></a>
				<a id='github' href="https://www.mikebocon.com/" rel="noopener noreferrer" target='_blank'> <span> <i className="fa fa-globe"></i></span></a>
				</div>
			</div>
		);
	}
}
