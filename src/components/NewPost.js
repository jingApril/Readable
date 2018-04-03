import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

export default class NewPost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			author: '',
			category: ''
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePostChange = this.handlePostChange.bind(this);
		this.handleCatChang = this.handleCatChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	// handleChange = (e) => {
	// 	this.setState({
	// 		title: e.target.value,
	// 		body : e.target.value,
	// 		author: e.target.value,
	// 		category: e.target.value
	// 	});
	// }

	// handleChange(e) {
	//  this.setState({[e.target.name]: e.target.value});
	// }

	// handlePostSubmit= (e) => {
	// 	e.preventDefault();
	// }

	// componentDidMount() {
	//     fetch('http://localhost:3001/posts')
	//       .then(res => res.json())
	//       .then(data => {
	//         this.setState({
	//           id: data.id,
	//           timestamp: data.timestamp,
	//           title: data.title,
	//           body: data.body,
	//           author: data.author,
	//           category: data.category,
	//           voteScore: data.voteScore,
	//           deleted: data.deleted,
	//           commentCount: data.commentCount
	//         });
	//     });
	// }

	handleClearForm = () => {
		this.setState({title: '', body: '', author: '', category: ''})
	}
	handleTitleChange = (e) => {
		this.setState({title: e.target.value})
		console.log(this.state.title)
	}

	handleUserChange = (e) => {
		this.setState({author: e.target.value})
	}

	handlePostChange = (e) => {
		this.setState({body: e.target.value})
	}
	handleCatChange = (e) => {
		this.setState({category: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let postBody = JSON.stringify({
			title: this.state.title,
			author: this.state.author,
			body: this.state.body,
			id: 1111,
			deleted: false,
			category: this.state.category,
			timestamp: Date.now()
		});
		console.log(postBody);
		fetch(`http://localhost:3001/posts`, {
			method: 'POST',
			body: postBody,
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': 'hello'
			}
		}).then(response => response.json()).then(data => data)
	}
	render() {

		return (<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
					<button type="button" className="close" onClick={this.props.modalopen}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">

					<form className="clearfix" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label for="title">Title</label>
							<input type="text" className="form-control" id="title" placeholder="Title" value={this.state.value} onChange={this.handleTitleChange}/>
						</div>
						<div className="form-group">
							<label for="author">Author</label>
							<input type="text" className="form-control" id="author" placeholder="Your name" value={this.state.value} onChange={this.handleUserChange}/>
						</div>
						<div className="form-group">
							<label for="author">Category</label>
							<select className="form-control" id="category" value={this.state.value} onChange={this.handlePostChange}>
								<option>react</option>
								<option>redux</option>
								<option>udacity</option>
							</select>
						</div>
						<div className="form-group">
							<label for="content">Content</label>
							<textarea className="form-control" id="content" rows="3" value={this.state.value} onChange={this.handleCatChange}></textarea>
						</div>
					</form>
				</div>
				<div className="modal-footer">
					{/* <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClearForm}>Cancel</button> */}
					<input type="submit" className="btn btn-primary" value="Submit"/> {/* <button type="submit" className="btn btn-primary">Submit</button> */}
				</div>
			</div>
		</div>)
	}
}
