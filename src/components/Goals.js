import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quotes from './Quotes';
import { api } from '../url';

export default class Goals extends Component {
	state = {
		goals: [],
		isEditing: false,
		goalToEdit: {},
		title: '',
		body: '',
		user: {},
	};

	componentDidMount() {
		this.getData();
	}

	getData() {
		fetch(`${api}/goals`)
			.then(response => response.json())
			.then(data =>
				this.setState({
					goals: data,
				}),
			);
	}

	handleDelete = (id, index) => {
		fetch(`${api}/goals/${id}`, {
			method: 'DELETE',
		}).then(() => {
			this.setState({
				posts: [...this.state.goals.slice(0, index), ...this.state.goals.slice(index + 1)],
			});
			this.getData();
		});
	};

	toggleEdit(goal, id) {
		this.state.goalToEdit = goal;
		this.setState({
			isEditing: !this.state.isEditing,
		});
	}

	handleTitleChange = event => {
		this.state.goalToEdit.title = event.target.value;
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleBodyChange = event => {
		this.state.goalToEdit.body = event.target.value;
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleUpdate(event, item) {
		event.preventDefault();
		fetch(`${api}/goals/${item.id}`, {
			body: JSON.stringify(item),
			method: 'PUT',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(updatedGoal => {
				window.location.reload();
			});
	}

	userId = parseInt(localStorage.id);

	render() {
		return (
			<div className='goals-main'>
				<div className='main left'>
					{this.state.isEditing ? null : (
						<div>
							<div className='goals'>
								<h3 className='goals-h3'>Daily goals</h3>
							</div>
							<div className='labels'>
								<div className='title-label'>
									<h5>Title</h5>
								</div>
								<div className='body-label'>
									<h5>Body</h5>
								</div>
								<div className='actions-label'>
									<h5>Actions</h5>
								</div>
							</div>
						</div>
					)}
					<ul>
						{this.state.isEditing ? null : (
							<Link to='/new' className='add-btn styled-btn btn'>
								<span className='span'></span>
								<span className='span'></span>
								<span className='span'></span>
								<span className='span'></span>Add goal
							</Link>
						)}

						{this.state.goals.map((goal, index) => {
							if (this.state.isEditing) {
								if (this.state.goalToEdit.id === goal.id)
									return (
										<div key={goal.id}>
											<h3 className='edit-h3'>EDIT GOAL</h3>
											<form className='form-group'>
												<label className='form-label edit-label' htmlFor='title'>
													Title
												</label>
												<input
													className='form-control'
													onChange={event => this.handleTitleChange(event)}
													type='text'
													id='title'
													value={goal.title}
												/>

												<label className='form-label edit-label' htmlFor='body'>
													Body
												</label>
												<input
													className='form-control'
													onChange={event => this.handleBodyChange(event)}
													type='text'
													id='body'
													value={goal.body}
												/>
												<button className='styled-btn save-btn' onClick={e => this.handleUpdate(e, this.state.goalToEdit)}>
													Save changes
												</button>
											</form>
										</div>
									);
							} else if (goal.user_id === this.userId) {
								return (
									<span key={goal.id} className='list-item'>
										<li>
											<div className='wrapper-1'>
												<div className='title'>{goal.title}</div>
											</div>
											<div className='wrapper-2'>
												<div className='body'>{goal.body}</div>
											</div>
											<div className='action-btns'>
												<button className='btn styled-btn edit-btn' onClick={() => this.toggleEdit(goal, goal.id)}>
													<span className='span'></span>
													<span className='span'></span>
													<span className='span'></span>
													<span className='span'></span>
													{this.state.isEditing ? 'SAVE' : 'EDIT'}
												</button>
												<button className='btn styled-btn delete-btn' onClick={() => this.handleDelete(goal.id, index)}>
													<span className='span'></span>
													<span className='span'></span>
													<span className='span'></span>
													<span className='span'></span>DELETE
												</button>
											</div>
										</li>
									</span>
								);
							}
						})}
					</ul>
				</div>
				<div className='right'>
					<h3>Questions</h3>
					<div className='reflections'>
						<p>Did I accomplish my goals today?</p>
						<p>If no, why not?</p>
						<p>How much time did I spend on social media today?</p>
						<p>How much time did I spend watching TV today?</p>
						<p>What can I do to improve tomorrow?</p>
					</div>
				</div>
				<Quotes />
			</div>
		);
	}
}
