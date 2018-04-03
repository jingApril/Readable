import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
//import * as API from '../util/api'

class NewPost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body : '',
			author: '',
			category:''
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
	// 		     console.log(this.state.title)
	// }
	handleTitleChange = (e) => {
		this.setState({title: e.target.value});
		console.log(this.state.title);
	}

	handleUserChange = (e) => {
		this.setState({author: e.target.value});
			console.log(this.state.author);
	}

	handlePostChange = (e) => {
		this.setState({body: e.target.value});
			console.log(this.state.body);
	}
	handleCatChange = (e) => {
		this.setState({category: e.target.value});
			console.log(this.state.category);
	}

	// handleSubmit = (e) =>{
	//       e.preventDefault();
	//       let postBody = {
	//           author: this.state.author,
	//           title: this.state.title,
	//           body: this.state.post,
	//           id: 1213,
	// 					//id: uuid.v4(),
	//           category: 'redux',
	//           timestamp: Date.now()
	//       };
	// 		 API.newPost(postBody);
	// }

	handleSubmit = (e) => {
		e.preventDefault();
		let postBody = JSON.stringify({
			title: this.state.title,
			author: this.state.author,
			body: this.state.body,
			//id: uuid.v4(),
			id: 12121,
			category: this.state.category,
			voteScore: 0,
			commentCount: 0,
			deleted: false,
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
		}).then(response => response.json())
		.then((data) => {
			console.log('data', data);
		})
  //this.handleClearForm(e);
	}

	// componentDidMount = () => {
	// 	const {post} = this.props
	// 	this.setState({
	// 		postForm: {
	// 			title: post.title,
	// 			body: post.body,
	// 			author: post.author,
	// 			category: post.category
	// 		}
	// 	})
	// }
	// handleClearForm= (e)=> {
	//   //e.preventDefault();
	//   this.setState({
	// 		title: '',
	// 		author: '',
	// 		body: '',
	// 		category: ''
	//   });
	// }
	render(){
		return (
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">Create a new post</h5>
						<Link to='/' >
						<button type="button" className="close" onClick={this.props.modelClose} ref={form => this.form = form}>
							<span aria-hidden="true">&times;</span>
						</button>
						</Link>
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
								<select className="form-control" id="category" value={this.state.value} onChange={this.handleCatChange}>
									<option>Kat1</option>
									<option>Kat2</option>
									<option>Kat3</option>
									<option>Kat4</option>
								</select>
							</div>
							<div className="form-group">
								<label for="content">Content</label>
								<textarea className="form-control" id="content" rows="3" value={this.state.value} onChange={this.handlePostChange}></textarea>
							</div>
							<div className="modal-footer">
								{/* <button type="button" onClick={this.handleClearForm} className="btn btn-secondary" data-dismiss="modal">Cancel</button> */}
								{/* <button type="submit" className="btn btn-primary">Submit</button> */}

								<input type="submit" className="btn btn-primary" value="Submit"/>
							</div>
						</form>
					</div>

				</div>
			</div>
		)
	}
}


export default NewPost;
